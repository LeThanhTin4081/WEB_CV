import { useLanguage } from '../i18n/LanguageContext';

const tagClass =
  'text-xs bg-white/5 text-white/70 px-2.5 py-1 rounded-md font-semibold border border-white/10 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:text-cyan-200 group-hover:border-blue-400/30';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="section-title">{t.experience.title}</h2>
        <div className="section-rule mx-auto mt-4"></div>
      </div>

      <div className="surface-card overflow-hidden hover:border-blue-400/40 transition duration-300 group">
        <div className="p-6 sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
              {t.experience.role}
            </h3>
            <p className="text-white/70 font-medium mt-1">{t.experience.company}</p>
            <p className="text-sm text-white/50 mt-1">
              {t.experience.period} · {t.experience.months}
            </p>
            <p className="text-sm text-white/50">
              {t.experience.roleType} · {t.experience.onsite}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className={tagClass}>Social Listening</span>
            <span className={tagClass}>Sentiment Analysis</span>
            <span className={tagClass}>Social Media Data Collection</span>
            <span className={tagClass}>Data Quality</span>
            <span className={tagClass}>Retail Market Research</span>
            <span className={tagClass}>Customer Data Platform</span>
          </div>

          <ul className="text-white/70 text-sm mt-6 space-y-2.5 list-disc list-outside ml-5">
            <li>{t.experience.b1}</li>
            <li>{t.experience.b2}</li>
            <li>{t.experience.b3}</li>
            <li>{t.experience.b4}</li>
            <li>{t.experience.b5}</li>
            <li>{t.experience.b6}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
