import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {/* Cột 1: Giới thiệu (Vẫn giữ Tiếng Việt cho khớp với nội dung web) */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Pham Thao My</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Data Analyst Intern với đam mê phân tích dữ liệu, visualization và machine learning. 
            Luôn tìm kiếm cơ hội để học hỏi và phát triển trong lĩnh vực data science.
          </p>
        </div>

        {/* Cột 2: Liên kết */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Liên Kết Nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-blue-400 transition">Trang chủ</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">Giới thiệu</a></li>
            <li><a href="#experience" className="hover:text-blue-400 transition">Kinh nghiệm</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Dự án</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Kỹ năng</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Kết Nối</h3>
          <div className="flex gap-3">
            <a href="mailto:pthaomy3112002@gmail.com" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/phamthaomy" target="_blank" rel="noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-700 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/phamthaomy" target="_blank" rel="noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-gray-600 hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="https://facebook.com/phamthaomy" target="_blank" rel="noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/phamthaomy" target="_blank" rel="noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-pink-600 hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* PHẦN CHÂN TRANG (ĐÃ ĐỒNG BỘ TIẾNG ANH CẢ 2 BÊN) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Bên trái: Copyright (English) */}
            <div className="text-sm text-slate-400 bg-slate-800/50 px-5 py-2 rounded-full border border-slate-700 shadow-sm hover:border-slate-500 transition cursor-default">
                © 2025 Pham Thao My. All rights reserved.
            </div>
            
            {/* Bên phải: Tech Stack (English) */}
            <div className="text-sm text-slate-400 bg-slate-800/50 px-5 py-2 rounded-full border border-slate-700 shadow-sm flex items-center gap-2 hover:border-blue-500/50 transition cursor-default">
                <span>Built with</span>
                <span className="font-bold text-[#61DAFB]">ReactJS</span>
                <span className="text-slate-600">|</span>
                <span className="font-bold text-[#38BDF8]">Tailwind</span>
                <span className="text-slate-600">|</span>
                <span className="font-bold text-[#FFC107]">Vite</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;