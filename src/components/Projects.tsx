import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const tagClass =
  'text-xs bg-white/5 text-white/70 px-2.5 py-1 rounded-md font-semibold border border-white/10 group-hover:bg-blue-500/20 group-hover:text-cyan-200 group-hover:border-blue-400/30 transition-all duration-300';

const linkClass =
  'flex items-center gap-1.5 text-sm font-bold text-white/60 hover:text-cyan-300 transition';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="section-rule mx-auto mt-4"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface-card overflow-hidden hover:border-blue-400/40 transition group flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition leading-snug">
              End-to-End E-Commerce Customer & Sales Analytics
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className={tagClass}>SQL Server</span>
              <span className={tagClass}>Python</span>
              <span className={tagClass}>Streamlit</span>
            </div>
            <ul className="text-white/70 text-sm mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              <li>{t.projects.p1b1}</li>
              <li>{t.projects.p1b2}</li>
              <li>{t.projects.p1b3}</li>
            </ul>
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/10">
              <a href="https://github.com/LeThanhTin4081/SQL-ECommerce-Analytics-With-Machine-Learning" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Github size={18} /> GitHub
              </a>
              <a href="https://ecommerce-annual-report-2018.streamlit.app/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <ExternalLink size={18} /> Streamlit Dashboard
              </a>
            </div>
          </div>
        </div>

        <div className="surface-card overflow-hidden hover:border-blue-400/40 transition group flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition leading-snug">
              Ho Chi Minh City Housing Market Analysis 2021 – 2025
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className={tagClass}>Python (Selenium, BeautifulSoup)</span>
              <span className={tagClass}>Power BI</span>
            </div>
            <ul className="text-white/70 text-sm mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              <li>{t.projects.p2b1}</li>
              <li>{t.projects.p2b2}</li>
              <li>{t.projects.p2b3}</li>
            </ul>
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/10">
              <a href="https://github.com/LeThanhTin4081/hochiminh-city-house-price-analysis" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Github size={18} /> GitHub
              </a>
              <a href="https://app.powerbi.com/view?r=eyJrIjoiYTE3OWVkZWMtYzMzZi00N2IwLWE4MDMtOTdhNTQzNzM4YWQ4IiwidCI6ImVkOGYxNjczLTM4OTAtNGRiNC1hM2YwLTk3YWQ5NDI3Yzc0ZiIsImMiOjEwfQ%3D%3D" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <ExternalLink size={18} /> Power BI Dashboard
              </a>
            </div>
          </div>
        </div>

        <div className="surface-card overflow-hidden hover:border-blue-400/40 transition group flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition leading-snug">
              Essential Commodity Price Analysis in Vietnam 2005 - 2025
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className={tagClass}>Excel (Power Query)</span>
              <span className={tagClass}>Python</span>
              <span className={tagClass}>Power BI</span>
            </div>
            <ul className="text-white/70 text-sm mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              <li>{t.projects.p3b1}</li>
              <li>{t.projects.p3b2}</li>
              <li>{t.projects.p3b3}</li>
            </ul>
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/10">
              <a href="https://github.com/LeThanhTin4081/phan-tich-bien-dong-gia-ca-vietnam-2005-2025" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Github size={18} /> GitHub
              </a>
              <a href="https://app.powerbi.com/view?r=eyJrIjoiMDJlNjAwZTEtNTVjOS00Njc3LWJlMTItNGYxM2FmZmM3YjhkIiwidCI6ImVkOGYxNjczLTM4OTAtNGRiNC1hM2YwLTk3YWQ5NDI3Yzc0ZiIsImMiOjEwfQ%3D%3D" target="_blank" rel="noopener noreferrer" className={linkClass}>
                <ExternalLink size={18} /> Power BI Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
