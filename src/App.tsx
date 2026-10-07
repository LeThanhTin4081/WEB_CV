import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  'px-4 py-2 rounded-full font-medium transition-all';

const mobileNavLinkClass =
  'block w-full rounded-xl px-4 py-3 text-base font-medium transition-colors';

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'] as const;
type SectionId = (typeof SECTION_IDS)[number];

function navLinkActiveClass(active: boolean, mobile = false) {
  if (mobile) {
    return active
      ? `${mobileNavLinkClass} bg-cyan-500/15 text-cyan-200`
      : `${mobileNavLinkClass} text-white/80 hover:bg-white/10 hover:text-white`;
  }
  return active
    ? `${navLinkClass} bg-white/15 text-cyan-300`
    : `${navLinkClass} text-white/70 hover:bg-white/10 hover:text-white`;
}

function AppShell() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { href: '#hero', id: 'hero' as const, label: t.nav.home },
    { href: '#about', id: 'about' as const, label: t.nav.about },
    { href: '#experience', id: 'experience' as const, label: t.nav.experience },
    { href: '#projects', id: 'projects' as const, label: t.nav.projects },
    { href: '#skills', id: 'skills' as const, label: t.nav.skills },
    { href: '#contact', id: 'contact' as const, label: t.nav.contact },
  ];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    let ticking = false;

    const updateFromScroll = () => {
      const totalScroll =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const windowHeight = docHeight - window.innerHeight;
      setScrollProgress(windowHeight > 0 ? Math.min(1, totalScroll / windowHeight) : 0);
      setScrolled(totalScroll > 24);

      // Activate a section once its top crosses ~40% down the viewport
      // (so Skills highlights while the section is on screen, not only when near the nav).
      const marker = totalScroll + window.innerHeight * 0.4;
      let current: SectionId = 'hero';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + totalScroll;
        if (top <= marker) current = id;
      }
      // Near page bottom: force Contact so the last link can activate.
      if (windowHeight > 0 && totalScroll >= windowHeight - 8) {
        current = 'contact';
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateFromScroll();
        ticking = false;
      });
    };

    updateFromScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'is-visible');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
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

      <div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden
      />

      <div className="app-content">
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent backdrop-blur-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
          {/* Spacer — same visual weight as right controls so menu stays centered */}
          <div className="justify-self-start w-[5.25rem] md:w-[5.25rem]" aria-hidden />

          <div className="hidden md:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={navLinkActiveClass(activeSection === item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end justify-self-end gap-2">
            <div
              className="grid grid-cols-3 gap-0.5 rounded-full bg-white/5 border border-white/10 p-0.5 w-[7.5rem] shrink-0"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLang('vi')}
                aria-pressed={lang === 'vi'}
                className={`inline-flex h-8 w-full items-center justify-center rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'vi' ? 'bg-white/15 text-cyan-300' : 'text-white/40 hover:text-white/70'
                }`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`inline-flex h-8 w-full items-center justify-center rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'en' ? 'bg-white/15 text-cyan-300' : 'text-white/40 hover:text-white/70'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('zh')}
                aria-pressed={lang === 'zh'}
                className={`inline-flex h-8 w-full items-center justify-center rounded-full text-xs font-bold tracking-wide transition-all outline-none focus:outline-none ${
                  lang === 'zh' ? 'bg-white/15 text-cyan-300' : 'text-white/40 hover:text-white/70'
                }`}
              >
                CN
              </button>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-panel"
          className={`md:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={navLinkActiveClass(activeSection === item.id, true)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <button
          type="button"
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div id="hero" className="-mt-20 scroll-mt-24"><Hero /></div>

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
