import { Download, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section className="scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-12 items-stretch">
        {/* Cột Ảnh — cao bằng cột chữ trên desktop */}
        <div className="md:col-span-1 min-h-0">
          <div className="relative h-full min-h-[280px] md:min-h-0">
             {/* Nhớ chép ảnh thẻ của Tin vào public/avatar.jpg nhé */}
            <img 
              src="/avatar.jpg" 
              alt="Lê Thành Tin" 
              className="rounded-2xl shadow-2xl w-full h-full object-cover aspect-[3/4] md:aspect-auto border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full -z-10 opacity-20"></div>
          </div>
        </div>

        {/* Cột Nội dung */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wide mb-2">Giới Thiệu</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-700">Tóm Tắt Chuyên Môn</h3>
          <p className="text-slate-600 leading-relaxed text-justify">
            Tôi tốt nghiệp chuyên ngành <strong>Khoa học Dữ liệu</strong>, hiện tập trung vào <strong>Analytics Engineering</strong>, với sự quan tâm mạnh mẽ tới Công nghệ và AI.
            Tôi thích làm việc trực tiếp với dữ liệu — tổ chức, biến đổi dữ liệu, cải thiện quy trình và xây dựng các bộ dữ liệu ổn định, sẵn sàng cho phân tích.
            <br/><br/>
            Tôi cũng đang tìm hiểu cách AI hỗ trợ quy trình dữ liệu và tự động hóa, giúp các thao tác hiệu quả, dễ mở rộng và thực tế hơn.
            Tôi luôn sẵn sàng với những cơ hội mới, sự hợp tác và những kết nối ý nghĩa.
          </p>

          {/* Box Học vấn */}
          <div className="bg-white p-5 border-l-4 border-blue-600 shadow-md rounded-r-lg">
            <h4 className="font-bold text-lg text-slate-900">Trường Đại học Giao thông Vận tải TP.HCM (UTH)</h4>
            <p className="text-sm text-slate-500 mb-2">09/2023 - 12/2026</p>
            
            <div className="space-y-1">
              <p className="text-blue-700 font-medium">
                Chuyên ngành: Khoa học dữ liệu
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-sm text-slate-700">
                <strong>GPA tích lũy:</strong> <span className="font-bold text-blue-600">3.25/4.0</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Resume */}
      <div className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Resume</h2>
        <div className="bg-slate-100 px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-200 transition-colors">
          <a
            href="/TinLeThanh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            TinLeThanh_CV (pdf)
            <ExternalLink size={14} className="text-slate-400" />
          </a>
          <a 
            href="/TinLeThanh_CV.pdf" 
            download="TinLeThanh_CV.pdf"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm transition-colors shrink-0"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </div>

      {/* Phần About Me - 3 Cột (Experience, Skillset, Goals) */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Cột 1: My Experience */}
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full bg-slate-100 rounded-lg mb-6 shadow-sm overflow-hidden border border-slate-200">
              <img src="/My_Experience.jpg" alt="My Experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">My Experience</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Là sinh viên Khoa học Dữ liệu với nền tảng kỹ thuật vững chắc về SQL, Python và Power BI. Tôi có kinh nghiệm xây dựng các luồng dữ liệu tự động (automated data pipelines) và dashboard tương tác để thúc đẩy quyết định dựa trên dữ liệu. Tập trung vào việc tạo ra giá trị thực tế cho doanh nghiệp thông qua làm sạch dữ liệu, phân tích khám phá (EDA) và trực quan hóa.
            </p>
          </div>

          {/* Cột 2: My Skillset */}
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full bg-slate-100 rounded-lg mb-6 shadow-sm overflow-hidden border border-slate-200">
              <img src="/My_Skillset.jpg" alt="My Skillset" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">My Skillset</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Tôi chú trọng vào độ chính xác và tối ưu hóa dữ liệu. Kỹ năng chuyên môn bao gồm Python (Pandas/NumPy, thu thập dữ liệu tự động), SQL (truy vấn phức tạp, CTE, Window Functions cho dữ liệu lớn), và Power BI (DAX, Data Modeling, thiết kế dashboard). Ngoài ra, tôi còn ứng dụng Prompt Engineering, Git/GitHub và các công cụ Web (Node.js) để hỗ trợ công việc.
            </p>
          </div>

          {/* Cột 3: My Goals */}
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full bg-slate-100 rounded-lg mb-6 shadow-sm overflow-hidden border border-slate-200">
              <img src="/My_Goals.jpg" alt="My Goals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">My Goals</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Tôi đang tìm kiếm cơ hội làm việc trong môi trường thực tế để áp dụng chuyên môn vào dự án thực tiễn. Tôi mong muốn đồng hành cùng doanh nghiệp để tạo ra những thay đổi tích cực từ dữ liệu. Đồng thời, tôi luôn chủ động học hỏi những tiến bộ mới nhất trong lĩnh vực AI và Dữ liệu để sẵn sàng chinh phục các thử thách khó khăn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;