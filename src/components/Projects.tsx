const Projects = () => {
  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Dự Án Nổi Bật</h2>
        <p className="text-slate-500 mt-2">Các dự án thực tế áp dụng Machine Learning & Visualization</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Dự án 1 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition group">
          <div className="h-48 bg-slate-200 overflow-hidden relative">
            {/* Chỗ này để ảnh dự án 1 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
               <span className="text-white font-bold text-lg">Dự đoán giá nhà (Housing Price)</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">Ames House Pricing Prediction</h3>
            <div className="flex gap-2 mb-4">
               <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Python</span>
               <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">BigQuery ML</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Thực hiện EDA và tiền xử lý trên 50,000+ bản ghi. Xây dựng mô hình Boosted Tree Regression dự đoán giá bất động sản với độ chính xác cao (Correlation 98%).
            </p>
          </div>
        </div>

        {/* Dự án 2 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition group">
          <div className="h-48 bg-slate-200 overflow-hidden relative">
             {/* Chỗ này để ảnh dự án 2 */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
               <span className="text-white font-bold text-lg">Phân tích doanh số ABC Toys</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">Sales Insights & Visualization</h3>
            <div className="flex gap-2 mb-4">
               <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Tableau</span>
               <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Data Viz</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Thiết kế Dashboard tương tác để hiển thị hiệu suất bán hàng và phân khúc khách hàng. Phát hiện sự mất cân bằng tồn kho giữa các khu vực.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;