import type { ReactNode } from 'react';

type Skill = {
  name: string;
  tip?: string;
  icon: ReactNode;
};

const iconClass = 'h-10 w-10 sm:h-11 sm:w-11 object-contain';

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className={iconClass} loading="lazy" />
);

const PowerBiIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
    <path d="M3 13.5h5v7.5H3v-7.5z" fill="#e6ad10" />
    <path d="M9.5 8.5h5v12.5h-5V8.5z" fill="#f2c811" />
    <path d="M16 3.5h5v17.5h-5V3.5z" fill="#f9e01e" />
  </svg>
);

const OpenAiIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="#10A37F" aria-hidden="true">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.907 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.908 6.056 6.056 0 0 0-.747-7.065zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.079 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.373v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.083 3.75-5.833-3.387L14.61 7.09a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.405-.668zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.13V6.8a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.166 4.671zm-12.64 4.135L5.666 11.59v-2.34a.08.08 0 0 1 .033-.061l4.83-2.787a.776.776 0 0 1 .785 0l4.774 2.762a.066.066 0 0 1 .028.061v2.34z" />
  </svg>
);

const skills: Skill[] = [
  { name: 'Python', icon: <Img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" /> },
  { name: 'MongoDB', icon: <Img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" /> },
  { name: 'PostgreSQL', icon: <Img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" /> },
  { name: 'ClickHouse', tip: 'ClickHouse (CH)', icon: <Img src="/skills/clickhouse.svg" alt="ClickHouse" /> },
  { name: 'MySQL', icon: <Img src="/skills/mysql.svg" alt="MySQL" /> },
  { name: 'Power BI', icon: <PowerBiIcon /> },
  { name: 'JavaScript', icon: <Img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" /> },
  { name: 'TypeScript', icon: <Img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" /> },
  { name: 'GitHub', icon: <Img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" /> },
  { name: 'GitLab', icon: <Img src="/skills/gitlab.svg" alt="GitLab" /> },
  { name: 'React', icon: <Img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" /> },
  { name: 'Docker', icon: <Img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" /> },
  { name: 'VPS', tip: 'VPS (MobaXterm)', icon: <Img src="/skills/mobaxterm.jpg" alt="MobaXterm" /> },
  { name: 'Claude', icon: <Img src="/skills/claude.svg" alt="Claude" /> },
  { name: 'Codex', tip: 'Codex (OpenAI)', icon: <OpenAiIcon /> },
  { name: 'Antigravity', tip: 'Google Antigravity', icon: <Img src="/skills/antigravity.svg" alt="Antigravity" /> },
  { name: 'NestJS', icon: <Img src="https://cdn.simpleicons.org/nestjs/E0234E" alt="NestJS" /> },
  { name: 'Excel', icon: <Img src="/skills/excel-wiki.svg" alt="Excel" /> },
  { name: 'Solidity', tip: 'Solidity (Blockchain)', icon: <Img src="https://cdn.simpleicons.org/solidity/363636" alt="Solidity" /> },
];

const rows: Skill[][] = [
  skills.slice(0, 6),
  skills.slice(6, 12),
  skills.slice(12, 16),
  skills.slice(16, 19),
];

const Skills = () => {
  return (
    <section className="scroll-mt-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-800">Technical Skills</h2>
        <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-blue-600" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 pb-10 sm:gap-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap items-center justify-center gap-6 sm:gap-9 ${
              rowIndex % 2 === 1 ? 'sm:translate-x-3' : rowIndex === 2 ? 'sm:-translate-x-2' : ''
            }`}
          >
            {row.map((skill) => (
              <div key={skill.name} className="group relative flex flex-col items-center">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-transparent bg-transparent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:shadow-md sm:h-14 sm:w-14">
                  <div className="transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                </div>
                <span className="pointer-events-none absolute top-full z-10 mt-2 translate-y-1 whitespace-nowrap rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {skill.tip ?? skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
