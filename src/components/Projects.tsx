import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wide">Dự Án Nổi Bật</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Dự án 1: E-Commerce Customer & Sales Analytics */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition group flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition leading-snug">
              End-to-End E-Commerce Customer & Sales Analytics
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-100 transition-all duration-300">
                 SQL Server
               </span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-all duration-300">
                 Python
               </span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-orange-50 group-hover:text-orange-700 group-hover:border-orange-100 transition-all duration-300">
                 Streamlit
               </span>
            </div>
            <ul className="text-slate-600 text-sm mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              <li>Phân tích và phát hiện <strong>điểm nghẽn logistics</strong> kéo dài trung bình <strong>5.25 ngày</strong> bằng cách thiết kế đường ống dẫn dữ liệu ELT, xử lý 51.290 bản ghi thô vào cơ sở dữ liệu chuẩn hóa 3NF sử dụng <strong>T-SQL nâng cao</strong> (CTEs, Window Functions).</li>
              <li>Đề xuất 3 chiến lược tiếp thị cá nhân hóa giúp tối ưu hóa chi phí quảng cáo và giảm tỷ lệ khách hàng rời bỏ bằng cách huấn luyện mô hình <strong>K-Means</strong> để phân khúc 38.995 khách hàng dựa trên hành vi <strong>RFM</strong>.</li>
              <li>Cung cấp cho stakeholders các thông tin chuyên sâu theo thời gian thực về doanh thu <strong>7.81 triệu USD</strong> và biên lợi nhuận <strong>46.22%</strong> thông qua dashboard <strong>Streamlit</strong> tương tác đa trang được xây dựng bằng Plotly.</li>
            </ul>
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-slate-100">
              <a href="https://github.com/LeThanhTin4081/SQL-ECommerce-Analytics-With-Machine-Learning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                <Github size={18} /> GitHub
              </a>
              <a href="https://ecommerce-annual-report-2018.streamlit.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition">
                <ExternalLink size={18} /> Streamlit Dashboard
              </a>
            </div>
          </div>
        </div>

        {/* Dự án 2 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition group flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition leading-snug">
              Ho Chi Minh City Housing Market Analysis 2021 – 2025
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-all duration-300">
                 Python (Selenium, BeautifulSoup)
               </span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-yellow-50 group-hover:text-yellow-700 group-hover:border-yellow-100 transition-all duration-300">
                 Power BI
               </span>
            </div>
            <ul className="text-slate-600 text-sm mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              <li>Xây dựng hệ thống web-crawling tự động bằng Python thu thập hơn <strong>163.000 tin đăng</strong> từ 4 nền tảng lớn, giảm 90% thời gian so với phương pháp thủ công.</li>
              <li>Tối ưu hóa chất lượng dữ liệu thông qua làm sạch nghiêm ngặt và <strong>EDA</strong> trên tập dữ liệu lớn nhằm xác định phân khúc thị trường và phân bổ giá theo từng khu vực.</li>
              <li>Phát triển Power BI dashboard hiệu suất cao, tích hợp bộ lọc động (dynamic filters) và các hàm <strong>DAX</strong> để trực quan hóa xu hướng tài sản cho stakeholders.</li>
            </ul>
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-slate-100">
              <a href="https://github.com/LeThanhTin4081/hochiminh-city-house-price-analysis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                <Github size={18} /> GitHub
              </a>
              <a href="https://app.powerbi.com/view?r=eyJrIjoiYTE3OWVkZWMtYzMzZi00N2IwLWE4MDMtOTdhNTQzNzM4YWQ4IiwidCI6ImVkOGYxNjczLTM4OTAtNGRiNC1hM2YwLTk3YWQ5NDI3Yzc0ZiIsImMiOjEwfQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition">
                <ExternalLink size={18} /> Power BI Dashboard
              </a>
            </div>
          </div>
        </div>

        {/* Dự án 3 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition group flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition leading-snug">
              Essential Commodity Price Analysis in Vietnam 2005 - 2025
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-100 transition-all duration-300">
                 Excel (Power Query)
               </span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-all duration-300">
                 Python
               </span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 group-hover:bg-yellow-50 group-hover:text-yellow-700 group-hover:border-yellow-100 transition-all duration-300">
                 Power BI
               </span>
            </div>
            <ul className="text-slate-600 text-sm mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              <li>Tổng hợp dữ liệu giá lịch sử trong 20 năm của 7 mặt hàng thiết yếu, chuẩn hóa các tập dữ liệu từ nhiều nguồn thông qua <strong>Power Query</strong> để đảm bảo tính nhất quán 100%.</li>
              <li>Thiết kế các biểu đồ trực quan hóa dữ liệu chuyên sâu bằng <strong>DAX</strong> để tìm ra sự tương quan giữa biến động giá dài hạn với các sự kiện kinh tế lớn (VD: COVID-19, Khủng hoảng tài chính 2008).</li>
              <li>Cung cấp các insight thực tiễn (actionable insights) có giá trị về mức độ biến động và rủi ro của thị trường.</li>
            </ul>
            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-slate-100">
              <a href="https://github.com/LeThanhTin4081/phan-tich-bien-dong-gia-ca-vietnam-2005-2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                <Github size={18} /> GitHub
              </a>
              <a href="https://app.powerbi.com/view?r=eyJrIjoiMDJlNjAwZTEtNTVjOS00Njc3LWJlMTItNGYxM2FmZmM3YjhkIiwidCI6ImVkOGYxNjczLTM4OTAtNGRiNC1hM2YwLTk3YWQ5NDI3Yzc0ZiIsImMiOjEwfQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition">
                <ExternalLink size={18} /> Power BI Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;