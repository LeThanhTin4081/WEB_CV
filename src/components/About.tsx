const About = () => {
  return (
    <section className="scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Cột Ảnh */}
        <div className="md:col-span-1">
          <div className="relative">
             {/* Nhớ chép ảnh thẻ của Tin vào public/avatar.jpg nhé */}
            <img 
              src="/avatar.jpg" 
              alt="Lê Thành Tin" 
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
            Xin chào, tôi là <strong>Lê Thành Tin</strong>, hiện là sinh viên chuyên ngành <strong>Khoa học Dữ liệu</strong>. 
            Với niềm đam mê khám phá insights từ các con số, tôi đã trang bị nền tảng vững chắc về Công nghệ thông tin và các công cụ phân tích dữ liệu.
            <br/><br/>
            Dù đang ngồi trên ghế nhà trường, tôi luôn chủ động trau dồi kỹ năng thực tế qua các dự án cá nhân về Excel, SQL, Python và Power BI. 
            Tôi đang tìm kiếm cơ hội thực tập để áp dụng kiến thức học thuật vào môi trường doanh nghiệp thực tế.
          </p>

          {/* Box Học vấn */}
          <div className="bg-white p-5 border-l-4 border-blue-600 shadow-md rounded-r-lg mt-6">
            <h4 className="font-bold text-lg text-slate-900">Trường Đại học Giao thông Vận tải TP.HCM (UTH)</h4>
            <p className="text-sm text-slate-500 mb-2">09/2023 - Hiện tại (Đang học)</p>
            
            <div className="space-y-1">
              <p className="text-blue-700 font-medium">
                Chuyên ngành: Khoa học dữ liệu
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-sm text-slate-700">
                <strong>GPA tích lũy:</strong> <span className="font-bold text-blue-600">3.2/4.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;