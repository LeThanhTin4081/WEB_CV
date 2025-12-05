const Skills = () => {
  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Kỹ Năng & Năng Lực</h2>
        <p className="text-slate-500 mt-2">Công cụ và ngôn ngữ tôi sử dụng hàng ngày</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Kỹ năng kỹ thuật */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-blue-300 transition">
          <h3 className="text-blue-700 font-bold text-lg mb-4 flex items-center gap-2">
             🛠 Kỹ Năng Kỹ Thuật
          </h3>
          <div className="flex flex-wrap gap-2">
            {["SQL (BigQuery, PostgreSQL)", "Python (Pandas, Numpy)", "Tableau", "Machine Learning"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>

        {/* Kỹ năng phân tích */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-green-300 transition">
          <h3 className="text-green-700 font-bold text-lg mb-4 flex items-center gap-2">
             📈 Kỹ Năng Phân Tích
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Data Cleaning", "ETL Processes", "Kiểm định thống kê", "Phân tích tương quan", "ANOVA"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-green-50 text-green-800 rounded-md text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>

        {/* Kỹ năng mềm */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-purple-300 transition">
          <h3 className="text-purple-700 font-bold text-lg mb-4 flex items-center gap-2">
             🤝 Kỹ Năng Mềm
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Giao tiếp", "Giải quyết vấn đề", "Làm việc nhóm", "Thuyết trình", "Tự học"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-800 rounded-md text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>

        {/* Công cụ & Ngôn ngữ */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-orange-300 transition">
          <h3 className="text-orange-700 font-bold text-lg mb-4 flex items-center gap-2">
             🌍 Ngôn Ngữ & Office
          </h3>
          <div className="space-y-2 text-sm text-slate-700">
             <p><strong>Tiếng Anh:</strong> Thành thạo</p>
             <p><strong>Tiếng Việt:</strong> Bản ngữ</p>
             <div className="h-px bg-slate-100 my-2"></div>
             <p><strong>Office:</strong> Word, Excel, Canva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;