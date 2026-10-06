import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type Skill = {
  name: string;
  tip?: string;
  icon?: string;
  color?: string;
  cdnUrl?: string;
  localSrc?: string;
};

const iconClass = 'h-10 w-10 sm:h-11 sm:w-11 object-contain';

const SkillIcon = ({ skill }: { skill: Skill }) => {
  if (skill.localSrc) {
    return <img src={skill.localSrc} alt={skill.name} className={iconClass} loading="lazy" decoding="async" />;
  }
  if (skill.cdnUrl) {
    return <img src={skill.cdnUrl} alt={skill.name} className={iconClass} loading="lazy" decoding="async" />;
  }
  const src = `https://api.iconify.design/${skill.icon}.svg?color=%23${skill.color}&width=88&height=88`;
  return <img src={src} alt={skill.name} className={iconClass} loading="lazy" decoding="async" />;
};

const skills: Skill[] = [
  { name: 'Python', icon: 'simple-icons/python', color: '3776AB' },
  {
    name: 'Excel',
    cdnUrl: 'https://api.iconify.design/vscode-icons/file-type-excel.svg?width=88&height=88',
  },
  { name: 'Power BI', icon: 'simple-icons/powerbi', color: 'F2C811' },
  { name: 'MongoDB', icon: 'simple-icons/mongodb', color: '47A248' },
  { name: 'PostgreSQL', icon: 'simple-icons/postgresql', color: '4169E1' },
  {
    name: 'MySQL',
    cdnUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  { name: 'ClickHouse', tip: 'ClickHouse (CH)', icon: 'simple-icons/clickhouse', color: 'FFCC01' },
  { name: 'JavaScript', icon: 'simple-icons/javascript', color: 'F7DF1E' },
  { name: 'TypeScript', icon: 'simple-icons/typescript', color: '3178C6' },
  { name: 'React', icon: 'simple-icons/react', color: '61DAFB' },
  { name: 'NestJS', icon: 'simple-icons/nestjs', color: 'E0234E' },
  { name: 'Docker', icon: 'simple-icons/docker', color: '2496ED' },
  { name: 'HTML', icon: 'simple-icons/html5', color: 'E34F26' },
  { name: 'VPS', tip: 'VPS (MobaXterm)', localSrc: '/skills/mobaxterm.jpg' },
  { name: 'GitHub', icon: 'simple-icons/github', color: 'FFFFFF' },
  { name: 'GitLab', icon: 'simple-icons/gitlab', color: 'FC6D26' },
  {
    name: 'Claude',
    tip: 'Claude (Anthropic)',
    cdnUrl: 'https://api.iconify.design/simple-icons/claude.svg?color=%23D97757&width=88&height=88',
  },
  { name: 'Codex', tip: 'Codex (OpenAI)', icon: 'simple-icons/openai', color: '10A37F' },
  { name: 'Antigravity', tip: 'Google Antigravity', localSrc: '/skills/antigravity.svg' },
  { name: 'Solidity', tip: 'Solidity (Blockchain)', icon: 'simple-icons/solidity', color: 'A855F7' },
];

/**
 * Inverted triangle with pointed tip (7 → 5 → 4 → 3 → 1):
 * Row0: data stack
 * Row1: JS TS React NestJS Docker
 * Row2: VPS GitHub GitLab Claude
 * Row3: Codex Antigravity Solidity
 * Row4: HTML (mũi nhọn)
 */
type Point = { x: number; y: number };

const ROW_Y = [8, 28, 48, 68, 88] as const;
const ROW_HALF_SPAN = [40, 30, 23, 15, 0] as const;
const ROW_COLS = [7, 5, 4, 3, 1] as const;

function pyramidSlot(row: number, col: number): Point {
  const cols = ROW_COLS[row];
  const y = ROW_Y[row];
  if (cols <= 1) return { x: 50, y };
  const halfSpan = ROW_HALF_SPAN[row];
  const x = 50 - halfSpan + (col / (cols - 1)) * (halfSpan * 2);
  return { x, y };
}

/** Outer ring clockwise: top → right → tip → left (adjacent only). */
const OUTER_RING: { name: string; slot: Point }[] = [
  { name: 'Python', slot: pyramidSlot(0, 0) },
  { name: 'Excel', slot: pyramidSlot(0, 1) },
  { name: 'Power BI', slot: pyramidSlot(0, 2) },
  { name: 'MongoDB', slot: pyramidSlot(0, 3) },
  { name: 'PostgreSQL', slot: pyramidSlot(0, 4) },
  { name: 'MySQL', slot: pyramidSlot(0, 5) },
  { name: 'ClickHouse', slot: pyramidSlot(0, 6) },
  { name: 'Docker', slot: pyramidSlot(1, 4) },
  { name: 'Claude', slot: pyramidSlot(2, 3) },
  { name: 'Solidity', slot: pyramidSlot(3, 2) },
  { name: 'HTML', slot: pyramidSlot(4, 0) },
  { name: 'Codex', slot: pyramidSlot(3, 0) },
  { name: 'VPS', slot: pyramidSlot(2, 0) },
  { name: 'JavaScript', slot: pyramidSlot(1, 0) },
];

/** Inner ring clockwise (includes Antigravity just above the tip). */
const INNER_RING: { name: string; slot: Point }[] = [
  { name: 'TypeScript', slot: pyramidSlot(1, 1) },
  { name: 'React', slot: pyramidSlot(1, 2) },
  { name: 'NestJS', slot: pyramidSlot(1, 3) },
  { name: 'GitLab', slot: pyramidSlot(2, 2) },
  { name: 'Antigravity', slot: pyramidSlot(3, 1) },
  { name: 'GitHub', slot: pyramidSlot(2, 1) },
];

const OUTER_SLOTS = OUTER_RING.map((item) => item.slot);
const INNER_SLOTS = INNER_RING.map((item) => item.slot);

/** Clock-like: one adjacent slot per tick (3s), outer then inner. */
const NOTCH_MS = 3_000;
const MOVE_MS = 900;

function lerpPoint(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function positionOnSlotRing(slots: Point[], slotIndex: number, steps: number): Point {
  const n = slots.length;
  const travel = ((steps % n) + n) % n;
  const from = (slotIndex + Math.floor(travel)) % n;
  const to = (from + 1) % n;
  const frac = travel - Math.floor(travel);
  return lerpPoint(slots[from], slots[to], frac);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type MotionPhase = 'outer-move' | 'inner-move';

function useTriangleMotion(enabled: boolean) {
  const [outerSteps, setOuterSteps] = useState(0);
  const [innerSteps, setInnerSteps] = useState(0);
  const [activeLayer, setActiveLayer] = useState<'outer' | 'inner'>('outer');
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    let raf = 0;
    let holdTimer = 0;
    let phase: MotionPhase = 'outer-move';
    let phaseStarted = 0;
    let outerBase = 0;
    let innerBase = 0;
    let lastOuter = -1;
    let lastInner = -1;
    let lastMoving = false;
    let lastLayer: 'outer' | 'inner' = 'outer';
    let running = true;

    const publish = (nextOuter: number, nextInner: number, moving: boolean, layer: 'outer' | 'inner') => {
      if (nextOuter !== lastOuter) {
        lastOuter = nextOuter;
        setOuterSteps(nextOuter);
      }
      if (nextInner !== lastInner) {
        lastInner = nextInner;
        setInnerSteps(nextInner);
      }
      if (moving !== lastMoving) {
        lastMoving = moving;
        setIsMoving(moving);
      }
      if (layer !== lastLayer) {
        lastLayer = layer;
        setActiveLayer(layer);
      }
    };

    const finishNotch = (now: number) => {
      if (phase === 'outer-move') {
        outerBase += 1;
        publish(outerBase, innerBase, false, 'inner');
        phase = 'inner-move';
      } else {
        innerBase += 1;
        publish(outerBase, innerBase, false, 'outer');
        phase = 'outer-move';
      }
      phaseStarted = now;
      startMove();
    };

    const moveTick = (now: number) => {
      if (!running) return;
      const elapsed = now - phaseStarted;
      const moveT = Math.min(1, elapsed / MOVE_MS);
      const eased = easeInOutCubic(moveT);

      if (phase === 'outer-move') {
        publish(outerBase + eased, innerBase, true, 'outer');
      } else {
        publish(outerBase, innerBase + eased, true, 'inner');
      }

      if (moveT < 1) {
        raf = requestAnimationFrame(moveTick);
        return;
      }

      // Snap to end of notch travel, then idle without RAF until next notch.
      if (phase === 'outer-move') {
        publish(outerBase + 1, innerBase, false, 'outer');
      } else {
        publish(outerBase, innerBase + 1, false, 'inner');
      }

      const holdMs = Math.max(0, NOTCH_MS - MOVE_MS);
      holdTimer = window.setTimeout(() => finishNotch(performance.now()), holdMs);
    };

    const startMove = () => {
      phaseStarted = performance.now();
      raf = requestAnimationFrame(moveTick);
    };

    startMove();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(holdTimer);
    };
  }, [enabled]);

  return { outerSteps, innerSteps, activeLayer, isMoving };
}

type PerfTier = 'full' | 'lite' | 'off';

function useSkillsPerf() {
  const [tier, setTier] = useState<PerfTier>('full');
  const [inView, setInView] = useState(false);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const liteMq = window.matchMedia(
      '(max-width: 768px), (pointer: coarse), (update: slow), (prefers-reduced-data: reduce)',
    );

    const sync = () => {
      if (reduceMq.matches) {
        setTier('off');
        return;
      }
      setTier(liteMq.matches ? 'lite' : 'full');
    };

    sync();
    reduceMq.addEventListener('change', sync);
    liteMq.addEventListener('change', sync);
    return () => {
      reduceMq.removeEventListener('change', sync);
      liteMq.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.12),
      { threshold: [0, 0.12, 0.35], rootMargin: '80px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [tier]);

  return { tier, inView, sceneRef };
}

const SPARK_TONES = ['gray', 'blue', 'red', 'orange', 'white', 'purple'] as const;

function SparkField({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <div className="skills-spark-field" aria-hidden>
      {Array.from({ length: count }, (_, i) => {
        const tone = SPARK_TONES[i % SPARK_TONES.length];
        return (
          <span
            key={i}
            className={`skills-spark skills-spark--${tone}`}
            style={
              {
                '--spark-angle': `${(i / count) * 360 + (i % 7) * 9}deg`,
                '--spark-delay': `${(i % 12) * 0.55}s`,
                '--spark-dur': `${6.5 + (i % 8) * 0.9}s`,
                '--spark-size': `${1.2 + (i % 5) * 0.55}px`,
                '--spark-dist': `${39 + (i % 6) * 6.3}rem`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

const SkillMarker = ({
  skill,
  style,
  layer = 'outer',
  floatIndex = 0,
  floating = true,
}: {
  skill: Skill;
  style: CSSProperties;
  layer?: 'outer' | 'inner';
  floatIndex?: number;
  floating?: boolean;
}) => (
  <div
    className={`group absolute -translate-x-1/2 -translate-y-1/2 will-change-[left,top] ${layer === 'inner' ? 'z-20' : 'z-10'}`}
    style={style}
  >
    <div
      className={`skills-icon-float relative flex flex-col items-center ${floating ? 'is-floating' : 'is-sliding'}`}
      style={{ animationDelay: `${(floatIndex % 7) * 0.28}s` }}
    >
      <div className="skills-icon-hit relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <div className="skills-icon-frame" aria-hidden />
        <div className="relative z-[1] transition-transform duration-300 group-hover:scale-105">
          <SkillIcon skill={skill} />
        </div>
      </div>
      <span className="skills-icon-label">{skill.tip ?? skill.name}</span>
    </div>
  </div>
);

const staticRows: Skill[][] = [
  skills.slice(0, 7),
  [skills[7], skills[8], skills[9], skills[10], skills[11]],
  [skills[13], skills[14], skills[15], skills[16]],
  [skills[17], skills[18], skills[19]],
  [skills[12]],
];

const StaticSkillGrid = () => (
  <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 pb-10 sm:gap-10">
    {staticRows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex flex-wrap items-center justify-center gap-6 sm:gap-9">
        {row.map((skill) => (
          <div key={skill.name} className="group relative flex flex-col items-center">
            <div className="skills-icon-hit relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
              <div className="skills-icon-frame" aria-hidden />
              <div className="relative z-[1] transition-transform duration-300 group-hover:scale-105">
                <SkillIcon skill={skill} />
              </div>
            </div>
            <span className="skills-icon-label">{skill.tip ?? skill.name}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Skills = () => {
  const { t } = useLanguage();
  const { tier, inView, sceneRef } = useSkillsPerf();
  const motionEnabled = tier !== 'off' && inView;
  const sparkCount = tier === 'full' ? 28 : tier === 'lite' ? 12 : 0;

  const { outerSteps, innerSteps, activeLayer, isMoving } = useTriangleMotion(motionEnabled);

  const skillByName = useMemo(() => new Map(skills.map((s) => [s.name, s])), []);

  const outerSkills = OUTER_RING.map((item) => skillByName.get(item.name)).filter(
    (s): s is Skill => Boolean(s),
  );
  const innerSkills = INNER_RING.map((item) => skillByName.get(item.name)).filter(
    (s): s is Skill => Boolean(s),
  );

  return (
    <section className="scroll-mt-24">
      <div className="mb-10 text-center">
        <h2 className="section-title">
          {t.skills.titleLeft} {t.skills.titleRight}
        </h2>
        <div className="section-rule mx-auto mt-4" />
      </div>

      {tier === 'off' ? (
        <StaticSkillGrid />
      ) : (
        <div
          ref={sceneRef}
          className={`skills-triangle-scene mx-auto max-w-3xl pb-10 ${tier === 'lite' ? 'skills-perf-lite' : ''} ${inView ? '' : 'skills-scene--paused'}`}
        >
          <div className="skills-triangle-glow" aria-hidden />
          <div className="skills-triangle-glow skills-triangle-glow--core" aria-hidden />
          <SparkField count={sparkCount} />

          {outerSkills.map((skill, index) => {
            const { x, y } = positionOnSlotRing(OUTER_SLOTS, index, outerSteps);
            const floating = !(activeLayer === 'outer' && isMoving);
            return (
              <SkillMarker
                key={skill.name}
                skill={skill}
                layer="outer"
                floatIndex={index}
                floating={floating && inView}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            );
          })}

          {innerSkills.map((skill, index) => {
            const { x, y } = positionOnSlotRing(INNER_SLOTS, index, innerSteps);
            const floating = !(activeLayer === 'inner' && isMoving);
            return (
              <SkillMarker
                key={skill.name}
                skill={skill}
                layer="inner"
                floatIndex={index + 3}
                floating={floating && inView}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Skills;
