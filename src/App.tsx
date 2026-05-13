import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Theo dõi thanh tiến trình cuộn (Scroll Progress)
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Hiệu ứng mờ dần & trượt lên khi cuộn tới (Scroll Reveal)
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
      
      {/* Thanh Tiến Trình (Scroll Progress Bar) */}
      <div 
        className="fixed top-0 left-0 h-1 bg-slate-400 z-[60] transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Tên Mới */}
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent cursor-pointer">
            Lê Thành Tin
          </span>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#hero" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Trang chủ
            </a>
            <a href="#about" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Giới thiệu
            </a>

            <a href="#projects" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Dự án
            </a>
            <a href="#skills" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Kỹ năng
            </a>
            <a href="#contact" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Liên hệ
            </a>
          </div>
        </div>
      </nav>

      {/* Nội dung chính */}
      <div id="hero" className="scroll-mt-24"><Hero /></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        <div id="about" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><About /></div>
        <div id="projects" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Projects /></div>
        <div id="skills" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Skills /></div>
        <div id="contact" className="scroll-mt-24 reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out"><Contact /></div>
      </div>

      <Footer />
    </main>
  );
}

export default App;