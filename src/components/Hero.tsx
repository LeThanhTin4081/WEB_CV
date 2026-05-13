import { Mail, Linkedin, Phone, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-animated-gradient text-white py-24 sm:py-32 overflow-hidden flex flex-col justify-center min-h-[600px]">
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 drop-shadow-lg uppercase">
          LÊ THÀNH TIN
        </h1>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-blue-300/60"></span>
          <p className="text-sm sm:text-base text-blue-100 font-medium tracking-widest uppercase drop-shadow-md text-center">
            Data Science Student <span className="mx-2 text-blue-300/50">|</span> Get to know me!
          </p>
          <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-blue-300/60"></span>
        </div>
        
        {/* Thông tin liên hệ nhanh */}
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
        </div>

        {/* Nút Gradient (giống nút Subscribe ảnh 2) + Hiệu ứng Shimmer */}
        <a href="#projects" className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold px-10 py-3.5 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1">
          Xem Dự Án Của Tôi
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 rounded-t-[50%] scale-110 z-10"></div>
    </section>
  );
};

export default Hero;