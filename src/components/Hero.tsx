import { Mail, Linkedin, Phone, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 drop-shadow-lg">
          PHẠM THẢO MY
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 font-light mb-8">
          Thực Tập Sinh Phân Tích Dữ Liệu (Data Analyst Intern)
        </p>
        
        {/* Thông tin liên hệ nhanh */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium text-blue-100">
          
          {/* Email: Dùng thẻ 'a' với 'mailto:' để bấm là gửi thư */}
          <a href="mailto:pthaomy3112002@gmail.com" className="flex items-center gap-2 hover:text-white transition cursor-pointer hover:underline">
            <Mail size={18} /> pthaomy3112002@gmail.com
          </a>

          {/* SĐT: Dùng 'tel:' để bấm là gọi (trên điện thoại) */}
          <a href="tel:+84907292413" className="flex items-center gap-2 hover:text-white transition cursor-pointer hover:underline">
            <Phone size={18} /> +84 907 292 413
          </a>

          <a href="https://linkedin.com/in/phamthaomy" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition cursor-pointer hover:underline">
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition cursor-pointer hover:underline">
            <Github size={18} /> GitHub
          </a>
        </div>

        {/* Nút bấm */}
        <a href="#projects" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
          Xem Dự Án Của Tôi
        </a>
      </div>

      {/* Trang trí nền (Curve) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 rounded-t-[50%] scale-110"></div>
    </section>
  );
};

export default Hero;