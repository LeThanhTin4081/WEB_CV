import { Mail, Linkedin, Phone, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 drop-shadow-lg uppercase">
          LÊ THÀNH TIN
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 font-light mb-8">
          Thực Tập Sinh Phân Tích Dữ Liệu (Data Analyst Intern)
        </p>
        
        {/* Thông tin liên hệ nhanh */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium text-blue-100">
          
          {/* Sửa: Hiện thẳng email ra cho dễ copy */}
          <a href="mailto:thanhtin.student@gmail.com" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Mail size={18} /> thanhtin.student@gmail.com
          </a>

          <a href="tel:+84349249103" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Phone size={18} /> (+84) 349 249 103
          </a>

          <a href="https://www.linkedin.com/in/lethanhtin41" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a href="https://github.com/LeThanhTin4081" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
            <Github size={18} /> GitHub
          </a>
        </div>

        <a href="#projects" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
          Xem Dự Án Của Tôi
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 rounded-t-[50%] scale-110"></div>
    </section>
  );
};

export default Hero;