import { useEffect, useRef } from 'react';

/**
 * Hero 3D backdrop rendered on a single <canvas>:
 *  - Villarceau torus wireframe (3D "spirograph" ring) with depth shading + dark core
 *  - Tilted orbit tracks with multicolor comet-stars that pass in front of / behind the ring
 *  - Perspective wave grid (synthwave terrain) with a scan pulse travelling to the viewer
 *  - Sparse twinkling star field
 * Pauses off-screen / in background tabs; renders one static frame for reduced motion.
 */

type RGB = readonly [number, number, number];

const TAU = Math.PI * 2;

const WHITE: RGB = [241, 245, 249];
const CYAN: RGB = [103, 232, 249];
const AMBER: RGB = [253, 186, 116];
const ORANGE: RGB = [251, 146, 60];
const SKY: RGB = [125, 211, 252];
const EMBER: RGB = [248, 113, 113];

/** Limited, harmonious palette: cool (white / cyan / sky) + warm (amber / orange / ember). */
const PALETTE: readonly RGB[] = [WHITE, CYAN, AMBER, ORANGE, SKY, EMBER];

const rgba = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/** Deterministic PRNG so the layout is identical on every load. */
function mulberry32(seed: number) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Pre-rendered glow sprite — far cheaper than shadowBlur per frame. */
function makeSprite(c: RGB, size = 48): HTMLCanvasElement {
  const el = document.createElement('canvas');
  el.width = size;
  el.height = size;
  const g = el.getContext('2d');
  if (!g) return el;
  const r = size / 2;
  const grad = g.createRadialGradient(r, r, 0, r, r, r);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.12, rgba(c, 1));
  grad.addColorStop(0.36, rgba(c, 0.32));
  grad.addColorStop(1, rgba(c, 0));
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return el;
}

type Track = {
  k: number; // radius as a multiple of the torus outer radius
  ct: number; // cos/sin of tilt (around X)
  st: number;
  cr: number; // cos/sin of roll (around Z)
  sr: number;
  speed: number;
  dir: 1 | -1;
  tint: RGB;
  stars: { a0: number; sp: number; c: number; size: number }[];
};

const TRACK_DEFS = [
  { k: 1.25, tilt: 1.3, roll: -0.55, speed: 0.42, dir: 1 as const, tint: AMBER },
  { k: 1.6, tilt: 1.2, roll: 0.5, speed: 0.28, dir: -1 as const, tint: CYAN },
  { k: 1.95, tilt: 1.38, roll: -0.12, speed: 0.2, dir: 1 as const, tint: SKY },
  { k: 2.3, tilt: 1.12, roll: 0.24, speed: 0.14, dir: -1 as const, tint: AMBER },
];

const TORUS_BUCKETS = 5;
const TORUS_ALPHA = [0.5, 0.36, 0.25, 0.16, 0.1];
const TORUS_COLOR: RGB[] = [
  [253, 186, 116],
  [251, 146, 60],
  [249, 115, 22],
  [234, 88, 12],
  [194, 65, 12],
];

const TRACK_SEG = 140;
const GROUND_BUCKETS = 8;

const HeroScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lite = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;

    const cfg = lite
      ? { circles: 30, segs: 36, bgStars: 55, perTrack: 6, trail: 3, dprCap: 1.25, tracks: 3 }
      : { circles: 48, segs: 56, bgStars: 110, perTrack: 10, trail: 5, dprCap: 1.75, tracks: 4 };

    const sprites = PALETTE.map((c) => makeSprite(c));
    const solid = PALETTE.map((c) => rgba(c, 1));
    const rand = mulberry32(4081);

    const bgStars = Array.from({ length: cfg.bgStars }, () => ({
      x: rand(),
      y: rand(),
      r: 0.5 + rand() * 1.3,
      c: Math.floor(rand() * PALETTE.length),
      tw: 0.6 + rand() * 1.8,
      ph: rand() * TAU,
      drift: 0.003 + rand() * 0.01,
    }));

    const tracks: Track[] = TRACK_DEFS.slice(0, cfg.tracks).map((d, ti) => ({
      k: d.k,
      ct: Math.cos(d.tilt),
      st: Math.sin(d.tilt),
      cr: Math.cos(d.roll),
      sr: Math.sin(d.roll),
      speed: d.speed,
      dir: d.dir,
      tint: d.tint,
      stars: Array.from({ length: cfg.perTrack }, (_, i) => ({
        a0: (i / cfg.perTrack) * TAU + rand() * 0.5,
        sp: 0.75 + rand() * 0.6,
        c: (i * 2 + ti) % PALETTE.length,
        size: 0.8 + rand() * 0.9,
      })),
    }));

    // ---- Layout state ----
    let w = 0;
    let h = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;
    let U = 0;
    let horizonY = 0;
    let R = 0; // torus major radius (= Villarceau circle radius)
    let r = 0; // torus minor radius (= circle centre offset)
    let outer = 1;
    let camDist = 1;
    let local = new Float32Array(0);
    let scr = new Float32Array(0);

    const buildTorus = () => {
      R = U * 0.135;
      r = U * 0.08;
      outer = R + r;
      camDist = U * 2.2;
      const sinD = r / R;
      const cosD = Math.sqrt(1 - sinD * sinD);
      const n = cfg.circles;
      const m = cfg.segs;
      local = new Float32Array(n * m * 3);
      scr = new Float32Array(n * m * 3);
      let o = 0;
      for (let i = 0; i < n; i++) {
        const phi = (i / n) * TAU;
        const cp = Math.cos(phi);
        const sp = Math.sin(phi);
        for (let j = 0; j < m; j++) {
          const tt = (j / m) * TAU;
          // Villarceau circle: radius R, centre offset r along the radial axis,
          // plane tilted about that axis by asin(r/R) — lies exactly on the torus.
          const a = r + R * Math.cos(tt);
          const b = R * Math.sin(tt) * cosD;
          local[o++] = a * cp - b * sp;
          local[o++] = a * sp + b * cp;
          local[o++] = R * Math.sin(tt) * sinD;
        }
      }
    };

    // ---- Pointer parallax (desktop only) ----
    let pYaw = 0;
    let pPitch = 0;
    let tYaw = 0;
    let tPitch = 0;
    const onPointer = (e: PointerEvent) => {
      tYaw = (e.clientX / window.innerWidth - 0.5) * 0.4;
      tPitch = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };

    // ---- Track projection ----
    const tp = { x: 0, y: 0, z: 0, s: 1 };
    const trackPoint = (tr: Track, theta: number, cg: number, sg: number, cpi: number, spi: number) => {
      const rad = outer * tr.k;
      const x = rad * Math.cos(theta);
      const y0 = rad * Math.sin(theta);
      const y = y0 * tr.ct; // tilt (X)
      const z = y0 * tr.st;
      const x2 = x * tr.cr - y * tr.sr; // roll (Z)
      const y2 = x * tr.sr + y * tr.cr;
      const x3 = x2 * cg + z * sg; // yaw (Y)
      const z3 = -x2 * sg + z * cg;
      const y4 = y2 * cpi - z3 * spi; // pitch (X)
      const z4 = y2 * spi + z3 * cpi;
      const s = camDist / (camDist + z4);
      tp.x = cx + x3 * s;
      tp.y = cy + y4 * s;
      tp.z = z4;
      tp.s = s;
    };

    const drawTrackLines = (back: boolean, cg: number, sg: number, cpi: number, spi: number) => {
      ctx.lineWidth = 0.8;
      for (const tr of tracks) {
        ctx.beginPath();
        let px = 0;
        let py = 0;
        let pz = 0;
        for (let i = 0; i <= TRACK_SEG; i++) {
          trackPoint(tr, (i / TRACK_SEG) * TAU, cg, sg, cpi, spi);
          if (i > 0 && (pz + tp.z > 0) === back) {
            ctx.moveTo(px, py);
            ctx.lineTo(tp.x, tp.y);
          }
          px = tp.x;
          py = tp.y;
          pz = tp.z;
        }
        ctx.strokeStyle = rgba(tr.tint, back ? 0.07 : 0.18);
        ctx.stroke();
      }
    };

    const drawTrackStars = (back: boolean, t: number, cg: number, sg: number, cpi: number, spi: number) => {
      const baseSize = lite ? 8 : 10;
      for (const tr of tracks) {
        for (const st of tr.stars) {
          const theta = st.a0 + tr.dir * tr.speed * st.sp * t;
          trackPoint(tr, theta, cg, sg, cpi, spi);
          if (tp.z > 0 !== back) continue;
          const hx = tp.x;
          const hy = tp.y;
          const hs = tp.s;
          const spr = sprites[st.c];
          const base = baseSize * st.size;

          // Comet tail behind the head
          for (let k = cfg.trail; k >= 1; k--) {
            trackPoint(tr, theta - tr.dir * k * 0.035, cg, sg, cpi, spi);
            const fade = 1 - k / (cfg.trail + 1);
            const sz = base * tp.s * fade * 0.8;
            ctx.globalAlpha = (back ? 0.22 : 0.45) * fade;
            ctx.drawImage(spr, tp.x - sz / 2, tp.y - sz / 2, sz, sz);
          }

          const sz = base * hs * (back ? 0.85 : 1);
          ctx.globalAlpha = back ? 0.5 : 1;
          ctx.drawImage(spr, hx - sz / 2, hy - sz / 2, sz, sz);
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawTorus = (ca: number, sa: number, cb: number, sb: number, cg: number, sg: number) => {
      for (let k = 0; k < local.length; k += 3) {
        const x = local[k];
        const y = local[k + 1];
        const z = local[k + 2];
        const x1 = x * ca - y * sa; // spin (Z)
        const y1 = x * sa + y * ca;
        const y2 = y1 * cb - z * sb; // tilt (X)
        const z2 = y1 * sb + z * cb;
        const x3 = x1 * cg + z2 * sg; // yaw (Y)
        const z3 = -x1 * sg + z2 * cg;
        const s = camDist / (camDist + z3);
        scr[k] = cx + x3 * s;
        scr[k + 1] = cy + y2 * s;
        scr[k + 2] = z3;
      }

      const n = cfg.circles;
      const m = cfg.segs;
      ctx.lineWidth = lite ? 0.8 : 0.9;
      // Depth buckets: near segments bright amber, far segments dim ember.
      for (let b = 0; b < TORUS_BUCKETS; b++) {
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const base = i * m;
          for (let j = 0; j < m; j++) {
            const p = (base + j) * 3;
            const q = (base + ((j + 1) % m)) * 3;
            const zN = (scr[p + 2] + scr[q + 2]) / (2 * outer);
            let bi = Math.floor((zN + 1) * 0.5 * TORUS_BUCKETS);
            if (bi < 0) bi = 0;
            else if (bi >= TORUS_BUCKETS) bi = TORUS_BUCKETS - 1;
            if (bi !== b) continue;
            ctx.moveTo(scr[p], scr[p + 1]);
            ctx.lineTo(scr[q], scr[q + 1]);
          }
        }
        ctx.strokeStyle = rgba(TORUS_COLOR[b], TORUS_ALPHA[b]);
        ctx.stroke();
      }
    };

    const drawCore = (cb: number, cg: number) => {
      // Ember glow behind the ring
      const gr = outer * 1.5;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, gr);
      glow.addColorStop(0, 'rgba(249,115,22,0.13)');
      glow.addColorStop(0.5, 'rgba(234,88,12,0.05)');
      glow.addColorStop(1, 'rgba(234,88,12,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(cx - gr, cy - gr, gr * 2, gr * 2);

      // Dark "event horizon" core — also keeps the title readable
      const hole = (R - r) * 1.1;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(Math.max(0.4, Math.abs(cg)), Math.max(0.3, Math.abs(cb)));
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, hole);
      core.addColorStop(0, 'rgba(2,6,23,0.95)');
      core.addColorStop(0.7, 'rgba(2,6,23,0.85)');
      core.addColorStop(1, 'rgba(2,6,23,0)');
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(0, 0, hole, 0, TAU);
      ctx.fill();
      ctx.restore();
    };

    const drawGround = (t: number) => {
      const gh = h - horizonY;
      if (gh <= 0) return;
      const f = gh * 1.1;
      const camH = 1;
      const zNear = 0.85;
      const zFar = 15;
      const S = 1;
      const travel = t * 0.6;
      const scroll = travel % S;
      const amp = 0.2;
      const xMax = Math.ceil((w * 0.5 * zFar) / f) + 1;
      const wave = (x: number, zw: number) =>
        amp *
        (Math.sin(x * 0.38 + zw * 0.22 + t * 0.9) * 0.55 +
          Math.sin(zw * 0.6 - t * 1.4 + x * 0.1) * 0.45);

      // Soft horizon glow
      const hg = ctx.createLinearGradient(0, horizonY - 40, 0, horizonY + 60);
      hg.addColorStop(0, 'rgba(34,211,238,0)');
      hg.addColorStop(0.4, 'rgba(34,211,238,0.08)');
      hg.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.fillStyle = hg;
      ctx.fillRect(0, horizonY - 40, w, 100);

      ctx.lineWidth = 1;

      // Rows (constant depth) — scroll toward the viewer; a scan pulse brightens rows it passes.
      const scanZ = zFar - ((t * 2.6) % (zFar + 3));
      for (let k = 0; ; k++) {
        const z = zNear + (k + 1) * S - scroll;
        if (z >= zFar) break;
        const depth = 1 - z / zFar;
        let a = Math.pow(depth, 1.5) * 0.5;
        const d = Math.abs(z - scanZ);
        if (d < 0.9) a += (1 - d / 0.9) * 0.45 * depth;
        ctx.strokeStyle = `rgba(34,211,238,${a.toFixed(3)})`;
        ctx.beginPath();
        for (let xi = -xMax; xi <= xMax; xi++) {
          const X = xi * S;
          const Y = wave(X, z + travel);
          const sx = cx + (X * f) / z;
          const sy = horizonY + ((camH - Y) * f) / z;
          if (xi === -xMax) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }

      // Columns (constant X) — converge to the vanishing point, depth-faded.
      const step = 0.5;
      const nz = Math.ceil((zFar - zNear) / step);
      for (let b = 0; b < GROUND_BUCKETS; b++) {
        ctx.beginPath();
        for (let s = 0; s < nz; s++) {
          const z0 = zNear + s * step;
          const z1 = Math.min(zFar, z0 + step);
          const bi = Math.min(
            GROUND_BUCKETS - 1,
            Math.floor((((z0 + z1) / 2 - zNear) / (zFar - zNear)) * GROUND_BUCKETS),
          );
          if (bi !== b) continue;
          for (let xi = -xMax; xi <= xMax; xi++) {
            const X = xi * S;
            const y0 = wave(X, z0 + travel);
            const y1 = wave(X, z1 + travel);
            ctx.moveTo(cx + (X * f) / z0, horizonY + ((camH - y0) * f) / z0);
            ctx.lineTo(cx + (X * f) / z1, horizonY + ((camH - y1) * f) / z1);
          }
        }
        const depth = 1 - (b + 0.5) / GROUND_BUCKETS;
        ctx.strokeStyle = `rgba(34,211,238,${(Math.pow(depth, 1.5) * 0.42).toFixed(3)})`;
        ctx.stroke();
      }
    };

    const drawBgStars = (t: number) => {
      for (const st of bgStars) {
        const y = (((st.y - st.drift * t) % 1) + 1) % 1;
        const x = st.x * w;
        const yy = y * h;
        const a = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * st.tw + st.ph));
        if (st.r > 1.25) {
          const sz = st.r * 7;
          ctx.globalAlpha = a * 0.8;
          ctx.drawImage(sprites[st.c], x - sz / 2, yy - sz / 2, sz, sz);
        } else {
          ctx.globalAlpha = a * 0.7;
          ctx.fillStyle = solid[st.c];
          ctx.fillRect(x - st.r / 2, yy - st.r / 2, st.r, st.r);
        }
      }
      ctx.globalAlpha = 1;
    };

    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);
      if (w === 0 || h === 0) return;

      pYaw += (tYaw - pYaw) * 0.05;
      pPitch += (tPitch - pPitch) * 0.05;

      const spin = t * 0.16;
      const tilt = 0.78 + 0.24 * Math.sin(t * 0.15) + pPitch;
      const yaw = 0.3 * Math.sin(t * 0.1) + pYaw;
      const ca = Math.cos(spin);
      const sa = Math.sin(spin);
      const cb = Math.cos(tilt);
      const sb = Math.sin(tilt);
      const cg = Math.cos(yaw);
      const sg = Math.sin(yaw);
      const cpi = Math.cos(pPitch * 0.6);
      const spi = Math.sin(pPitch * 0.6);

      ctx.globalCompositeOperation = 'lighter';
      drawBgStars(t);

      ctx.globalCompositeOperation = 'source-over';
      drawGround(t);

      ctx.globalCompositeOperation = 'lighter';
      drawTrackLines(true, cg, sg, cpi, spi);
      drawTrackStars(true, t, cg, sg, cpi, spi);

      ctx.globalCompositeOperation = 'source-over';
      drawCore(cb, cg);

      ctx.globalCompositeOperation = 'lighter';
      drawTorus(ca, sa, cb, sb, cg, sg);
      drawTrackLines(false, cg, sg, cpi, spi);
      drawTrackStars(false, t, cg, sg, cpi, spi);

      ctx.globalCompositeOperation = 'source-over';
    };

    // ---- Loop / lifecycle ----
    let raf = 0;
    let running = false;
    let inView = true;
    let lastT = 8;
    const t0 = performance.now() - 8000;

    const frame = (now: number) => {
      lastT = (now - t0) / 1000;
      draw(lastT);
      raf = requestAnimationFrame(frame);
    };

    const sync = () => {
      const shouldRun = !reduceMotion && inView && document.visibilityState === 'visible';
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(frame);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, cfg.dprCap);
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      cx = w / 2;
      const title = host.querySelector('h1');
      if (title) {
        const tr = title.getBoundingClientRect();
        cy = tr.top - rect.top + tr.height / 2;
      } else {
        cy = h * 0.36;
      }
      U = Math.min(w, h * 1.6);
      horizonY = h * 0.56;
      buildTorus();
      if (!running) draw(lastT);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.02 },
    );
    io.observe(host);

    document.addEventListener('visibilitychange', sync);
    if (!lite && !reduceMotion) window.addEventListener('pointermove', onPointer, { passive: true });
    sync();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden />;
};

export default HeroScene;
