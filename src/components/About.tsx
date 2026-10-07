import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function renderHighlighted(text: string, ...keywords: string[]) {
  const valid = keywords.filter((k): k is string => Boolean(k && k.trim()));
  if (valid.length === 0) return text;
  const pattern = new RegExp(`(${valid.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    valid.includes(part) ? (
      <strong key={i} className="text-white">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-12 items-stretch">
        <div className="reveal-child md:col-span-1 min-h-0" style={{ ['--d' as string]: 0 }}>
          <div className="relative h-full min-h-[280px] md:min-h-0">
            <img
              src="/avatar.jpg"
              alt={t.name}
              className="rounded-2xl shadow-lg shadow-blue-500/10 w-full h-full object-cover aspect-[3/4] md:aspect-auto border-2 border-white/10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="reveal-child md:col-span-2 space-y-6" style={{ ['--d' as string]: 1 }}>
          <div>
            <h2 className="section-title">{t.about.title}</h2>
            <div className="section-rule mt-2"></div>
          </div>

          <h3 className="text-xl font-bold text-white">{t.about.summaryTitle}</h3>
          <p className="text-white/70 leading-relaxed">
            {renderHighlighted(t.about.summaryP1, t.about.summaryBold1, t.about.summaryBold2)}
            <br /><br />
            {t.about.summaryP2}
          </p>

          <div className="surface-card p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <h4 className="font-bold text-lg text-white">{t.about.school}</h4>
            <p className="text-sm text-white/50 mb-2">09/2023 - 12/2026</p>
            <div className="space-y-1">
              <p className="text-white/80 font-medium">{t.about.major}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-sm text-white/70">
                <strong>{t.about.gpa}</strong>{' '}
                <span className="font-bold text-white">3.25/4.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal-child mt-24 max-w-3xl mx-auto" style={{ ['--d' as string]: 2 }}>
        <h2 className="section-title text-center mb-8">{t.about.resume}</h2>
        <div className="bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 flex items-center justify-between gap-4 hover:border-blue-400/30 transition-colors">
          <a
            href="/TinLeThanh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 text-sm font-medium hover:text-cyan-300 transition-colors"
          >
            TinLeThanh_CV (pdf)
            <ExternalLink size={14} className="text-white/40" />
          </a>
          <a
            href="/TinLeThanh_CV.pdf"
            download="TinLeThanh_CV.pdf"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors shrink-0"
          >
            <Download size={16} /> {t.about.download}
          </a>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="reveal-child section-title text-center mb-12" style={{ ['--d' as string]: 3 }}>
          {t.about.aboutMe}
        </h2>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="reveal-child flex flex-col items-center" style={{ ['--d' as string]: 4 }}>
            <div className="aspect-square w-full bg-slate-900/40 rounded-2xl mb-6 overflow-hidden border border-white/10">
              <img src="/My_Experience.jpg" alt="My Experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white/60 mb-4">{t.about.experienceTitle}</h3>
            <p className="text-white/70 leading-relaxed text-left w-full">{t.about.experienceBody}</p>
          </div>
          <div className="reveal-child flex flex-col items-center" style={{ ['--d' as string]: 5 }}>
            <div className="aspect-square w-full bg-slate-900/40 rounded-2xl mb-6 overflow-hidden border border-white/10">
              <img src="/My_Skillset.jpg" alt="My Skillset" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white/60 mb-4">{t.about.skillsetTitle}</h3>
            <p className="text-white/70 leading-relaxed text-left w-full">{t.about.skillsetBody}</p>
          </div>
          <div className="reveal-child flex flex-col items-center" style={{ ['--d' as string]: 6 }}>
            <div className="aspect-square w-full bg-slate-900/40 rounded-2xl mb-6 overflow-hidden border border-white/10">
              <img src="/My_Goals.jpg" alt="My Goals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white/60 mb-4">{t.about.goalsTitle}</h3>
            <p className="text-white/70 leading-relaxed text-left w-full">{t.about.goalsBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
