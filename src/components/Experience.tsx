import { useLanguage } from '../i18n/LanguageContext';

const tagClass =
  'text-xs bg-white/5 text-white/70 px-2.5 py-1 rounded-md font-semibold border border-white/10 transition-colors duration-300';

const Experience = () => {
  const { t } = useLanguage();

  const bullets = [
    t.experience.b1,
    t.experience.b2,
    t.experience.b3,
    t.experience.b4,
    t.experience.b5,
    t.experience.b6,
  ];

  const tags = [
    'Social Listening',
    'Sentiment Analysis',
    'Data Collection',
    'Data Quality',
    'Market Research',
    'CDP',
  ];

  return (
    <section className="scroll-mt-24">
      <div className="reveal-child mb-10 text-center" style={{ ['--d' as string]: 0 }}>
        <h2 className="section-title">{t.experience.title}</h2>
        <div className="section-rule mx-auto mt-4" />
      </div>

      {/* Narrower than full max-w-6xl so it balances with Projects grid below */}
      <div className="reveal-child relative mx-auto max-w-4xl" style={{ ['--d' as string]: 1 }}>
        <div
          className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/45 via-blue-500/20 to-transparent sm:left-4"
          aria-hidden
        />
        <div
          className="absolute left-1.5 top-5 h-3.5 w-3.5 rounded-full border-2 border-cyan-300/80 bg-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.4)] sm:left-2.5"
          aria-hidden
        />

        <article className="group ml-8 rounded-2xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:ml-10">
          <div className="border-b border-white/10 px-5 py-5 sm:px-6 sm:py-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300/90">
                  {t.experience.roleType}
                </p>
                <h3 className="mt-1 text-xl font-bold leading-snug text-white transition group-hover:text-cyan-200">
                  {t.experience.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/70 sm:text-base">{t.experience.company}</p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:items-end">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                  {t.experience.period}
                </span>
                <span className="text-xs text-white/45">
                  {t.experience.months} · {t.experience.onsite}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className={tagClass}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="px-5 py-5 sm:px-6 sm:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-white/40">
              {t.experience.highlights}
            </p>
            <ol className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {bullets.map((bullet, index) => (
                <li
                  key={bullet.slice(0, 40)}
                  className="group/item flex gap-2.5 rounded-xl border border-transparent bg-white/[0.02] px-3 py-2.5 text-sm leading-relaxed text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.05] hover:text-white/85"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-500/10 text-[11px] font-bold text-cyan-200/90 transition group-hover/item:border-cyan-300/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
