import { useLanguage } from '../i18n/LanguageContext';

type Skill = {
  name: string;
  tip?: string;
  /** Iconify path, e.g. simple-icons/python */
  icon?: string;
  /** Hex color without # — only for mono simple-icons */
  color?: string;
  /** Full CDN URL for multi-color brand logos */
  cdnUrl?: string;
  /** Optional local fallback (rare tools not on CDN) */
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
  // Data & Analytics
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
  // Development
  { name: 'JavaScript', icon: 'simple-icons/javascript', color: 'F7DF1E' },
  { name: 'TypeScript', icon: 'simple-icons/typescript', color: '3178C6' },
  { name: 'React', icon: 'simple-icons/react', color: '61DAFB' },
  { name: 'NestJS', icon: 'simple-icons/nestjs', color: 'E0234E' },
  { name: 'Docker', icon: 'simple-icons/docker', color: '2496ED' },
  { name: 'VPS', tip: 'VPS (MobaXterm)', localSrc: '/skills/mobaxterm.jpg' },
  // Collaboration, AI & Blockchain
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

const rows: Skill[][] = [
  skills.slice(0, 7),
  skills.slice(7, 12),
  skills.slice(12, 16),
  skills.slice(16),
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-24">
      <div className="mb-10 text-center">
        <h2 className="section-title">
          {t.skills.titleLeft} {t.skills.titleRight}
        </h2>
        <div className="section-rule mx-auto mt-4" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 pb-10 sm:gap-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-9"
          >
            {row.map((skill) => (
              <div key={skill.name} className="group relative flex flex-col items-center">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-transparent bg-transparent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-400/30 group-hover:bg-white/10 group-hover:shadow-md sm:h-14 sm:w-14">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <SkillIcon skill={skill} />
                  </div>
                </div>
                <span className="pointer-events-none absolute top-full z-10 mt-2 translate-y-1 whitespace-nowrap rounded-md bg-slate-950/90 border border-white/10 px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
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
