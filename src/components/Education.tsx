const Education = () => {
  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Chứng Chỉ</h2>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mt-2">
          Data Analytics Certificate - 10/2025
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4">
           <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">SQL</div>
           <div>
             <h4 className="font-bold text-slate-800">SQL in BigQuery</h4>
             <p className="text-xs text-slate-500">ERD modeling, window functions, query optimization</p>
           </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4">
           <div className="bg-green-100 p-3 rounded-lg text-green-600 font-bold">Py</div>
           <div>
             <h4 className="font-bold text-slate-800">Python for Analysis</h4>
             <p className="text-xs text-slate-500">EDA & Data-preprocessing với Pandas & NumPy</p>
           </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4">
           <div className="bg-purple-100 p-3 rounded-lg text-purple-600 font-bold">Viz</div>
           <div>
             <h4 className="font-bold text-slate-800">Data Visualization</h4>
             <p className="text-xs text-slate-500">Dashboards với Matplotlib, Seaborn, Tableau</p>
           </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-start gap-4">
           <div className="bg-orange-100 p-3 rounded-lg text-orange-600 font-bold">ML</div>
           <div>
             <h4 className="font-bold text-slate-800">Machine Learning</h4>
             <p className="text-xs text-slate-500">Mô hình dự đoán với BigQuery ML</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Education;