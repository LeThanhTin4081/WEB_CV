import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppShell() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);

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
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      <div
        className="fixed top-0 left-0 h-1 bg-slate-400 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent cursor-pointer shrink-0">
            {t.name}
          </span>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden md:flex items-center gap-1">
              <a href="#hero" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
                {t.nav.home}
              </a>
              <a href="#about" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
                {t.nav.about}
              </a>
              <a href="#experience" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
                {t.nav.experience}
              </a>
              <a href="#projects" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
                {t.nav.projects}
              </a>
              <a href="#skills" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
                {t.nav.skills}
              </a>
              <a href="#contact" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
                {t.nav.contact}
              </a>
            </div>

            <div
              className="ml-1 flex items-center gap-0.5 rounded-full bg-slate-50 p-0.5"
              role="group"
              aria-label="Language"
            >
              <Globe className="ml-1.5 h-3.5 w-3.5 text-slate-400 shrink-0" strokeWidth={2} aria-hidden />
              <button
                type="button"
                onClick={() => setLang('vi')}
                aria-pressed={lang === 'vi'}
                className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'vi'
                    ? 'bg-white text-blue-700'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'en'
                    ? 'bg-white text-blue-700'
                    : 'text-slate-400 hover:text-slate-600'
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
