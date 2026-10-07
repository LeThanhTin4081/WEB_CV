import { MailGlyph, PhoneGlyph, LinkedinGlyph, GithubGlyph, OrcidGlyph } from './BrandIcons';
import HeroScene from './HeroScene';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative text-white pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden flex flex-col justify-center min-h-[640px] sm:min-h-[700px]">
      <HeroScene />
      <div className="hero-enter max-w-4xl mx-auto text-center px-4 relative z-10">
        <div>
          <h1 className="hero-title text-5xl font-bold tracking-tight sm:text-7xl mb-4">
            {t.nameUpper}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <p className="text-sm sm:text-base text-cyan-100 font-medium tracking-wide text-center drop-shadow-[0_2px_10px_rgba(2,6,23,0.95)]">
            {t.hero.tagline}
          </p>
          <span className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm font-medium">
          <a href="mailto:lethanhtin.cv@gmail.com" className="chip-glass">
            <span className="chip-icon"><MailGlyph size={16} /></span>
            lethanhtin.cv@gmail.com
          </a>
          <a href="tel:+84349249103" className="chip-glass">
            <span className="chip-icon"><PhoneGlyph size={16} /></span>
            (+84) 349 249 103
          </a>
          <a href="https://www.linkedin.com/in/lethanhtin4081" target="_blank" rel="noreferrer" className="chip-glass">
            <span className="chip-icon"><LinkedinGlyph size={16} /></span>
            LinkedIn
          </a>
          <a href="https://github.com/LeThanhTin4081" target="_blank" rel="noreferrer" className="chip-glass">
            <span className="chip-icon"><GithubGlyph size={16} /></span>
            GitHub
          </a>
          <a href="https://orcid.org/0009-0006-8775-2812" target="_blank" rel="noreferrer" className="chip-glass">
            <span className="chip-icon"><OrcidGlyph size={16} /></span>
            ORCID
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="#projects" className="btn-shimmer btn-accent hover:-translate-y-1">
            {t.hero.cta}
          </a>
          <a href="#contact" className="btn-ghost hover:-translate-y-1">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
