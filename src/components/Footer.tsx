import { Mail, Linkedin, Github } from 'lucide-react';

const OrcidIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.738-1.359 3.738-3.722 0-2.206-1.406-3.722-3.776-3.722h-2.259z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Lê Thành Tin</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Data Science với đam mê ứng dụng những tiến bộ mới nhất trong nghiên cứu trí tuệ nhân tạo và dữ liệu để giải quyết các vấn đề thực tế. 
            Luôn tìm kiếm cơ hội để học hỏi và phát triển trong lĩnh vực Data Science.
          </p>
        </div>

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

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Kết Nối</h3>
          <div className="flex gap-3">
            <a href="mailto:lethanhtin.cv@gmail.com" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lethanhtin4081" target="_blank" rel="noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-700 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/LeThanhTin4081" target="_blank" rel="noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-gray-600 hover:text-white transition">
              <Github size={20} />
            </a>
            <a
              href="https://orcid.org/0009-0006-8775-2812"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-2.5 rounded-lg hover:bg-[#A6CE39] hover:text-white transition"
              title="ORCID"
            >
              <OrcidIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Phần chân trang */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800">
        <div className="flex justify-center">
            <div className="text-sm text-slate-400 bg-slate-800/50 px-5 py-2 rounded-full border border-slate-700 shadow-sm hover:border-slate-500 transition cursor-default">
                © 2025 Le Thanh Tin. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;