const Contact = () => {
  return (
    <section className="scroll-mt-24 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="grid md:grid-cols-2">
        <div className="p-8 bg-blue-900 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Liên Hệ</h2>
          <p className="text-blue-200 mb-8">
            Tôi luôn sẵn sàng thảo luận về cơ hội nghề nghiệp, dự án data analysis hoặc hợp tác.
          </p>
          <div className="space-y-4">
            <p>📧 pthaomy3112002@gmail.com</p>
            <p>📱 +84 907 292 413</p>
            <p>📍 Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
        
        <div className="p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nhập tên của bạn" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tin nhắn</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nhập tin nhắn..."></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition">
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;