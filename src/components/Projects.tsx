import { useMemo, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectCategory = 'data' | 'dashboard' | 'ml';
type FilterId = 'all' | ProjectCategory;

type Project = {
  id: string;
  title: string;
  accent: string;
  image: string;
  categories: ProjectCategory[];
  tags: string[];
  bullets: [string, string, string];
  github: string;
  live: string;
  liveLabel: string;
};

const tagClass =
  'text-xs bg-white/5 text-white/70 px-2.5 py-1 rounded-md font-semibold border border-white/10 group-hover:bg-blue-500/20 group-hover:text-cyan-200 group-hover:border-blue-400/30 transition-all duration-300';

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterId>('all');

  const projects: Project[] = useMemo(
    () => [
      {
        id: 'ecommerce',
        title: 'End-to-End E-Commerce Customer & Sales Analytics',
        accent: 'from-cyan-500/35 via-blue-600/20 to-transparent',
        image: '/projects/ecommerce.png',
        categories: ['data', 'dashboard', 'ml'],
        tags: ['SQL Server', 'Python', 'Streamlit'],
        bullets: [t.projects.p1b1, t.projects.p1b2, t.projects.p1b3],
        github: 'https://github.com/LeThanhTin4081/SQL-ECommerce-Analytics-With-Machine-Learning',
        live: 'https://ecommerce-annual-report-2018.streamlit.app/',
        liveLabel: 'Streamlit',
      },
      {
        id: 'housing',
        title: 'Ho Chi Minh City Housing Market Analysis 2021 – 2025',
        accent: 'from-orange-400/30 via-amber-600/15 to-transparent',
        image: '/projects/housing.png',
        categories: ['data', 'dashboard'],
        tags: ['Python (Selenium, BeautifulSoup)', 'Power BI'],
        bullets: [t.projects.p2b1, t.projects.p2b2, t.projects.p2b3],
        github: 'https://github.com/LeThanhTin4081/hochiminh-city-house-price-analysis',
        live: 'https://app.powerbi.com/view?r=eyJrIjoiYTE3OWVkZWMtYzMzZi00N2IwLWE4MDMtOTdhNTQzNzM4YWQ4IiwidCI6ImVkOGYxNjczLTM4OTAtNGRiNC1hM2YwLTk3YWQ5NDI3Yzc0ZiIsImMiOjEwfQ%3D%3D',
        liveLabel: 'Power BI',
      },
      {
        id: 'commodity',
        title: 'Essential Commodity Price Analysis in Vietnam 2005 - 2025',
        accent: 'from-emerald-400/30 via-teal-700/15 to-transparent',
        image: '/projects/commodity.png',
        categories: ['data', 'dashboard'],
        tags: ['Excel (Power Query)', 'Python', 'Power BI'],
        bullets: [t.projects.p3b1, t.projects.p3b2, t.projects.p3b3],
        github: 'https://github.com/LeThanhTin4081/phan-tich-bien-dong-gia-ca-vietnam-2005-2025',
        live: 'https://app.powerbi.com/view?r=eyJrIjoiMDJlNjAwZTEtNTVjOS00Njc3LWJlMTItNGYxM2FmZmM3YjhkIiwidCI6ImVkOGYxNjczLTM4OTAtNGRiNC1hM2YwLTk3YWQ5NDI3Yzc0ZiIsImMiOjEwfQ%3D%3D',
        liveLabel: 'Power BI',
      },
    ],
    [t],
  );

  const filters: { id: FilterId; label: string }[] = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'data', label: t.projects.filterData },
    { id: 'dashboard', label: t.projects.filterDashboard },
    { id: 'ml', label: t.projects.filterMl },
  ];

  const visible = projects.filter(
    (project) => filter === 'all' || project.categories.includes(filter),
  );

  return (
    <section className="scroll-mt-24">
      <div className="reveal-child mb-8 text-center" style={{ ['--d' as string]: 0 }}>
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="section-rule mx-auto mt-4" />
      </div>

      <div className="reveal-child mb-8 flex flex-wrap items-center justify-center gap-2" style={{ ['--d' as string]: 1 }}>
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 ${
                active
                  ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                  : 'border-white/10 bg-white/5 text-white/55 hover:border-white/20 hover:text-white/85'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="reveal-child py-10 text-center text-sm text-white/50" style={{ ['--d' as string]: 2 }}>
          {t.projects.empty}
        </p>
      ) : (
        <div className="grid gap-8 lg:grid-cols-2">
          {visible.map((project, index) => (
            <article
              key={project.id}
              className="reveal-child surface-card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              style={{ ['--d' as string]: 2 + index }}
            >
              <div className="relative h-40 overflow-hidden border-b border-white/10 bg-slate-950 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <div className="absolute right-3 top-3 rounded-md border border-white/15 bg-slate-950/55 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/70 backdrop-blur-sm">
                  {project.liveLabel}
                </div>
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-xl font-bold leading-snug text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={tagClass}>
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="mb-6 ml-4 flex-grow list-outside list-disc space-y-2.5 text-sm text-white/70">
                  {project.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 32)}>{bullet}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/35 bg-cyan-500/15 px-3.5 py-2 text-sm font-bold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-500/25"
                  >
                    <ExternalLink size={16} />
                    {t.projects.live}
                    <span className="text-cyan-200/60">· {project.liveLabel}</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-bold text-white/70 transition hover:border-white/25 hover:text-white"
                  >
                    <Github size={16} />
                    {t.projects.code}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
