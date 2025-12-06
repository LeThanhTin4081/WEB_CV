import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Lấy key từ file .env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
            setLoading(false);
            form.current?.reset();
        }, (error) => {
            console.log(error.text);
            setLoading(false);
            alert("Lỗi gửi mail: " + error.text);
        });
    }
  };

  return (
    <section className="scroll-mt-24 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100" id="contact">
      <div className="grid md:grid-cols-2">
        {/* Cột Trái: Thông tin liên hệ */}
        <div className="p-8 bg-blue-900 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            Liên Hệ <span className="animate-pulse">👋</span>
          </h2>
          
          {/* 👇 ĐOẠN VĂN KẾT HỢP CẢ 2 Ý BẠN MUỐN */}
          <p className="text-blue-100 mb-8 leading-relaxed text-justify opacity-90">
            Tôi luôn sẵn sàng thảo luận về cơ hội nghề nghiệp, dự án data analysis hoặc hợp tác. 
            Đây là email cá nhân chính chủ, mọi tin nhắn đều được <strong>chuyển thẳng đến thiết bị</strong> của tôi nên tôi sẽ phản hồi bạn sớm nhất có thể!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-200">Email</p>
                <p className="font-medium">thanhtin.student@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-200">Điện thoại</p>
                <p className="font-medium">(+84) 349 249 103</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-200">Khu vực làm việc</p>
                <p className="font-medium">TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cột Phải: Form nhập liệu */}
        <div className="p-8 relative">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 focus:bg-white" 
                placeholder="Nhập tên của bạn" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email nhận phản hồi</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 focus:bg-white" 
                placeholder="email@cua-ban.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tin nhắn</label>
              <textarea 
                name="message" 
                rows={4} 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 focus:bg-white" 
                placeholder="Bạn muốn trao đổi về dự án hay cơ hội việc làm?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full font-bold py-3 rounded-lg transition flex justify-center items-center gap-2 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Đang gửi...
                </>
              ) : (
                <>
                  Gửi Tin Nhắn <Send size={18} />
                </>
              )}
            </button>
            
            {/* Giao diện Thông báo Thành công XỊN SÒ */}
            {success && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-2xl z-20 animate-in fade-in duration-300">
                <div className="bg-green-100 p-4 rounded-full mb-4 animate-bounce">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Đã gửi thành công!</h3>
                <p className="text-gray-600 text-center max-w-xs mb-6 px-4">
                  Cảm ơn bạn đã nhắn tin. Tin đã nhận được thông báo và sẽ phản hồi sớm nhé!
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;