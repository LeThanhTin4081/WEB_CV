import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* NAVBAR (Sắp xếp theo đúng ảnh bạn gửi) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent cursor-pointer">
            Pham Thao My
          </span>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#hero" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Trang chủ
            </a>
            <a href="#about" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Giới thiệu
            </a>
            <a href="#experience" className="px-4 py-2 rounded-full text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all">
              Kinh nghiệm
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

      {/* NỘI DUNG CHÍNH (Cũng sắp xếp lại thứ tự các khối cho khớp với menu) */}
      
      {/* 1. Trang chủ */}
      <div id="hero"><Hero /></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        {/* 2. Giới thiệu */}
        <div id="about"><About /></div>

        {/* 3. Kinh nghiệm (Đưa lên trên) */}
        <div id="experience"><Experience /></div>

        {/* 4. Dự án (Đưa lên giữa) */}
        <div id="projects"><Projects /></div>

        {/* 5. Kỹ năng (Đưa xuống dưới) */}
        <div id="skills"><Skills /></div>
        
        {/* Phần học vấn (Mình để kèm sau Kỹ năng cho hợp lý) */}
        <div id="education"><Education /></div>

        {/* 6. Liên hệ */}
        <div id="contact"><Contact /></div>
      </div>

      <Footer />
    </main>
  );
}

export default App;