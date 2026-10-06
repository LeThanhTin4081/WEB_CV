import { useEffect, useState } from 'react';
import AmbientLayers from './components/AmbientLayers';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

const navLinkClass =
  'px-4 py-2 rounded-full text-white/70 font-medium hover:bg-white/10 hover:text-white transition-all';

function AppShell() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollProgress(windowHeight > 0 ? totalScroll / windowHeight : 0);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-transparent text-white font-sans">
      <AmbientLayers />

      <div className="app-content">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-end gap-3">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden md:flex items-center gap-1">
              <a href="#hero" className={navLinkClass}>{t.nav.home}</a>
              <a href="#about" className={navLinkClass}>{t.nav.about}</a>
              <a href="#experience" className={navLinkClass}>{t.nav.experience}</a>
              <a href="#projects" className={navLinkClass}>{t.nav.projects}</a>
              <a href="#skills" className={navLinkClass}>{t.nav.skills}</a>
              <a href="#contact" className={navLinkClass}>{t.nav.contact}</a>
            </div>

            <div
              className="ml-1 flex items-center gap-0.5 rounded-full bg-white/5 border border-white/10 p-0.5"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLang('vi')}
                aria-pressed={lang === 'vi'}
                className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'vi' ? 'bg-white/15 text-cyan-300' : 'text-white/40 hover:text-white/70'
                }`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'en' ? 'bg-white/15 text-cyan-300' : 'text-white/40 hover:text-white/70'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div id="hero" className="scroll-mt-24"><Hero /></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        <div id="about" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><About /></div>
        <div id="experience" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Experience /></div>
        <div id="projects" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Projects /></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div id="skills" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Skills /></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-12 pt-6">
        <div id="contact" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Contact /></div>
      </div>

      <Footer />
      </div>
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;
