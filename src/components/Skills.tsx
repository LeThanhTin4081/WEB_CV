import { Database, Bot, Globe } from 'lucide-react';

const Skills = () => {
  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wide">Technical Skills</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Python */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h3 className="text-slate-800 font-bold text-lg mb-3 flex items-center gap-3">
             <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-6 h-6" />
             Python <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full ml-auto">Advanced</span>
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Chuyên sâu về phân tích dữ liệu (Pandas/NumPy), nắm vững nền tảng cơ bản về ML pipelines và có kinh nghiệm xây dựng automated data collection.
          </p>
        </div>

        {/* SQL */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h3 className="text-slate-800 font-bold text-lg mb-3 flex items-center gap-3">
             <Database className="w-6 h-6 text-blue-600" />
             SQL <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full ml-auto">Proficient</span>
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Thành thạo complex queries, sử dụng CTEs và Window Functions để trích xuất dữ liệu quy mô lớn (large-scale extraction).
          </p>
        </div>

        {/* Power BI */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h3 className="text-slate-800 font-bold text-lg mb-3 flex items-center gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
               <path d="M3 13.5h5v7.5H3v-7.5z" fill="#e6ad10"/>
               <path d="M9.5 8.5h5v12.5h-5V8.5z" fill="#f2c811"/>
               <path d="M16 3.5h5v17.5h-5V3.5z" fill="#f9e01e"/>
             </svg>
             Power BI <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full ml-auto">Advanced</span>
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Kỹ năng DAX nâng cao, thiết kế Data Modeling (Star Schema) và xây dựng interactive dashboard.
          </p>
        </div>

        {/* AI & Tools */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h3 className="text-slate-800 font-bold text-lg mb-3 flex items-center gap-3">
             <Bot className="w-6 h-6 text-purple-600" />
             AI & Tools
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ứng dụng Prompt Engineering, phát triển Agents Dev, quản lý mã nguồn với Git/GitHub và sử dụng Docker (Basic).
          </p>
        </div>

        {/* Web & Data */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition md:col-span-2 max-w-2xl mx-auto w-full">
          <h3 className="text-slate-800 font-bold text-lg mb-3 flex items-center gap-3">
             <Globe className="w-6 h-6 text-teal-600" />
             Web & Data
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Hỗ trợ hiển thị và xử lý dữ liệu với Node.js, D3.js (Custom Visualization), và Excel (VBA/Pivot).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;