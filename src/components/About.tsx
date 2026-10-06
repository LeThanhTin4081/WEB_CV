import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-12 items-stretch">
        <div className="md:col-span-1 min-h-0">
          <div className="relative h-full min-h-[280px] md:min-h-0">
            <img
              src="/avatar.jpg"
              alt={t.name}
              className="rounded-2xl shadow-2xl w-full h-full object-cover aspect-[3/4] md:aspect-auto border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full -z-10 opacity-20"></div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wide mb-2">{t.about.title}</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>

          <h3 className="text-xl font-bold text-slate-700">{t.about.summaryTitle}</h3>
          <p className="text-slate-600 leading-relaxed text-justify">
            {t.about.summaryP1.includes(t.about.summaryBold1) ? (
              <>
                {t.about.summaryP1.split(t.about.summaryBold1)[0]}
                <strong>{t.about.summaryBold1}</strong>
                {t.about.summaryP1.split(t.about.summaryBold1)[1]?.split(t.about.summaryBold2)[0]}
                <strong>{t.about.summaryBold2}</strong>
                {t.about.summaryP1.split(t.about.summaryBold2)[1]}
              </>
            ) : (
              t.about.summaryP1
            )}
            <br /><br />
            {t.about.summaryP2}
          </p>

          <div className="bg-white p-5 border-l-4 border-blue-600 shadow-md rounded-r-lg">
            <h4 className="font-bold text-lg text-slate-900">{t.about.school}</h4>
            <p className="text-sm text-slate-500 mb-2">09/2023 - 12/2026</p>
            <div className="space-y-1">
              <p className="text-blue-700 font-medium">{t.about.major}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-sm text-slate-700">
                <strong>{t.about.gpa}</strong> <span className="font-bold text-blue-600">3.25/4.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">{t.about.resume}</h2>
        <div className="bg-slate-100 px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-200 transition-colors">
          <a
            href="/TinLeThanh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            TinLeThanh_CV (pdf)
            <ExternalLink size={14} className="text-slate-400" />
          </a>
          <a
            href="/TinLeThanh_CV.pdf"
            download="TinLeThanh_CV.pdf"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm transition-colors shrink-0"
          >
            <Download size={16} /> {t.about.download}
          </a>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">{t.about.aboutMe}</h2>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full bg-slate-100 rounded-lg mb-6 shadow-sm overflow-hidden border border-slate-200">
              <img src="/My_Experience.jpg" alt="My Experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">{t.about.experienceTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">{t.about.experienceBody}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full bg-slate-100 rounded-lg mb-6 shadow-sm overflow-hidden border border-slate-200">
              <img src="/My_Skillset.jpg" alt="My Skillset" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">{t.about.skillsetTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">{t.about.skillsetBody}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full bg-slate-100 rounded-lg mb-6 shadow-sm overflow-hidden border border-slate-200">
              <img src="/My_Goals.jpg" alt="My Goals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">{t.about.goalsTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">{t.about.goalsBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
