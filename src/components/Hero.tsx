import { Mail, Linkedin, Phone, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const OrcidIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.738-1.359 3.738-3.722 0-2.206-1.406-3.722-3.776-3.722h-2.259z" />
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-animated-gradient text-white py-24 sm:py-32 overflow-hidden flex flex-col justify-center min-h-[600px]">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 drop-shadow-lg uppercase">
          {t.nameUpper}
        </h1>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-blue-300/60"></span>
          <p className="text-sm sm:text-base text-blue-100 font-medium tracking-widest uppercase drop-shadow-md text-center">
            {t.hero.tagline}
          </p>
          <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-blue-300/60"></span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-medium text-blue-100">
          <a href="mailto:lethanhtin.cv@gmail.com" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Mail size={18} /> lethanhtin.cv@gmail.com
          </a>
          <a href="tel:+84349249103" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Phone size={18} /> (+84) 349 249 103
          </a>
          <a href="https://www.linkedin.com/in/lethanhtin4081" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/LeThanhTin4081" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Github size={18} /> GitHub
          </a>
          <a href="https://orcid.org/0009-0006-8775-2812" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <OrcidIcon size={18} /> ORCID
          </a>
        </div>

        <a href="#projects" className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold px-10 py-3.5 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1">
          {t.hero.cta}
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 rounded-t-[50%] scale-110 z-10"></div>
    </section>
  );
};

export default Hero;
