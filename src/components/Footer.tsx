import { MailGlyph, LinkedinGlyph, GithubGlyph, OrcidGlyph } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-transparent text-white/70 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">{t.name}</h3>
          <p className="text-sm leading-relaxed text-white/50">{t.footer.blurb}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">{t.footer.quickLinks}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-cyan-300 transition">{t.nav.home}</a></li>
            <li><a href="#about" className="hover:text-cyan-300 transition">{t.nav.about}</a></li>
            <li><a href="#experience" className="hover:text-cyan-300 transition">{t.nav.experience}</a></li>
            <li><a href="#projects" className="hover:text-cyan-300 transition">{t.nav.projects}</a></li>
            <li><a href="#skills" className="hover:text-cyan-300 transition">{t.nav.skills}</a></li>
            <li><a href="#contact" className="hover:text-cyan-300 transition">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">{t.footer.connect}</h3>
          <div className="flex gap-3">
            <a href="mailto:lethanhtin.cv@gmail.com" className="icon-circle" aria-label="Email">
              <MailGlyph size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lethanhtin4081" target="_blank" rel="noreferrer" className="icon-circle" aria-label="LinkedIn">
              <LinkedinGlyph size={20} />
            </a>
            <a href="https://github.com/LeThanhTin4081" target="_blank" rel="noreferrer" className="icon-circle" aria-label="GitHub">
              <GithubGlyph size={20} />
            </a>
            <a
              href="https://orcid.org/0009-0006-8775-2812"
              target="_blank"
              rel="noreferrer"
              className="icon-circle"
              title="ORCID"
              aria-label="ORCID"
            >
              <OrcidGlyph size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10">
        <div className="flex justify-center">
          <div className="text-sm text-white/50 bg-slate-900/50 px-5 py-2 rounded-full border border-white/10 hover:border-white/20 transition cursor-default">
            © 2025 {t.name}. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
