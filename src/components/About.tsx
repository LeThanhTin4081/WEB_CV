const About = () => {
  return (
    <section className="scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Cột Ảnh */}
        <div className="md:col-span-1">
          <div className="relative">
             {/* BẠN NHỚ CHÉP ẢNH avatar.jpg VÀO THƯ MỤC PUBLIC NHÉ */}
            <img 
              src="/avatar.jpg" 
              alt="Pham Thao My" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full -z-10 opacity-20"></div>
          </div>
        </div>

        {/* Cột Nội dung */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Giới Thiệu</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-700">Tóm Tắt Chuyên Môn</h3>
          <p className="text-slate-600 leading-relaxed text-justify">
            Cử nhân Quản trị Kinh doanh với 5 năm kinh nghiệm học tập và giảng dạy thống kê. 
            Có nền tảng vững chắc về kinh tế học và phân tích dữ liệu kinh doanh. 
            Thành thạo các kỹ năng EDA, làm sạch dữ liệu, trực quan hóa và xây dựng KPI để hỗ trợ ra quyết định. 
            Tôi hào hứng tham gia vào doanh nghiệp để đóng góp những insights giá trị từ dữ liệu.
          </p>

          {/* Box Đại học (Giống ảnh mẫu) */}
          <div className="bg-white p-5 border-l-4 border-blue-600 shadow-md rounded-r-lg mt-6">
            <h4 className="font-bold text-lg text-slate-900">Đại Học Sài Gòn (SGU)</h4>
            <p className="text-sm text-slate-500 mb-2">2020 - 09/2024</p>
            <p className="text-blue-700 font-medium">Cử nhân Quản trị Kinh doanh</p>
            <p className="text-sm text-slate-600 mt-2">
              <strong>GPA các môn chuyên ngành:</strong> 4.0/4.0 (Tập trung vào Phân tích dữ liệu & Business Intelligence)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;