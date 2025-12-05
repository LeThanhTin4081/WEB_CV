const Experience = () => {
  return (
    <section className="scroll-mt-24 space-y-8">
      <h2 className="text-3xl font-bold text-slate-800 text-center">Kinh Nghiệm Làm Việc</h2>
      
      {/* Job 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-blue-700">Gia Sư Thống Kê (Freelance)</h3>
            <p className="text-slate-500 text-sm">2021 - Hiện tại</p>
          </div>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold self-start mt-2 sm:mt-0">Freelance</div>
        </div>
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Cung cấp gia sư cho sinh viên đại học/sau đại học về Xác suất thống kê & SPSS.</li>
          <li>Đạt tỷ lệ đậu khóa học trên 87% trong số các sinh viên được hướng dẫn.</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-blue-700">Chuyên Viên Phân Tích & Marketing BĐS</h3>
            <p className="text-slate-500 text-sm">2023 - 11/2024</p>
          </div>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold self-start mt-2 sm:mt-0">Full-time</div>
        </div>
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Chuẩn hóa dữ liệu cho hơn 300 căn hộ trên nhiều dự án, giảm 30% thời gian tra cứu.</li>
          <li>Hợp tác với team Marketing & Vận hành để tài liệu hóa quy trình dữ liệu và cung cấp insights cải thiện hiệu quả.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;