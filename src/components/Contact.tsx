import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Link } from 'lucide-react';

// Animation rung lắc khi lỗi
const shakeClass = "animate-[shake_0.25s_ease-in-out]";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  // VALIDATION
  const validate = () => {
    const name = form.current?.user_name.value.trim();
    const email = form.current?.user_email.value.trim();
    const message = form.current?.message.value.trim();

    const newErrors = { user_name: "", user_email: "", message: "" };
    let ok = true;

    if (!name) {
      newErrors.user_name = "Vui lòng nhập họ tên";
      ok = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.user_email = "Vui lòng nhập email";
      ok = false;
    } else if (!emailRegex.test(email)) {
      newErrors.user_email = "Email không hợp lệ";
      ok = false;
    }

    if (!message) {
      newErrors.message = "Vui lòng nhập nội dung tin nhắn";
      ok = false;
    }

    setErrors(newErrors);
    return ok;
  };

  // GỬI EMAIL
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateContact = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
    const templateReply = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!form.current) return;

    try {
      await Promise.all([
        emailjs.sendForm(serviceId, templateContact, form.current, publicKey),
        emailjs.sendForm(serviceId, templateReply, form.current, publicKey)
      ]);
      setSuccess(true);
      form.current.reset();
    } catch (error: any) {
      console.error(error);
      alert("Lỗi gửi mail: " + error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact"
      className="scroll-mt-24 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 max-w-5xl mx-auto" // Giới hạn chiều rộng tối đa (max-w-5xl) cho gọn
    >
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            50% { transform: translateX(3px); }
            75% { transform: translateX(-3px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <div className="grid md:grid-cols-2">

        {/* CỘT TRÁI: Đã chỉnh màu sáng hơn & Giảm padding */}
        <div className="p-8 bg-gradient-to-br from-blue-700 to-blue-600 text-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            Liên Hệ <span className="animate-pulse">👋</span>
          </h2>

          <p className="text-blue-50 mb-8 text-sm leading-relaxed text-justify opacity-95">
            Nếu bạn quan tâm đến cơ hội hợp tác, dự án phân tích dữ liệu hoặc đang tìm một ứng viên phù hợp, 
            tôi luôn sẵn sàng trao đổi. 
            Mọi thông tin sẽ được chuyển trực tiếp đến email cá nhân của tôi để phản hồi sớm nhất.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3 group">
              <div className="bg-white/20 p-2.5 rounded-lg group-hover:bg-white/30 transition-all shadow-sm">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-100 uppercase font-semibold tracking-wider">Email</p>
                <p className="font-medium text-white text-sm">lethanhtin.cv@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="bg-white/20 p-2.5 rounded-lg group-hover:bg-white/30 transition-all shadow-sm">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-100 uppercase font-semibold tracking-wider">Điện thoại</p>
                <p className="font-medium text-white text-sm">(+84) 349 249 103</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="bg-white/20 p-2.5 rounded-lg group-hover:bg-white/30 transition-all shadow-sm">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-100 uppercase font-semibold tracking-wider">Khu vực làm việc</p>
                <p className="font-medium text-white text-sm">TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: Form nhập liệu (Giảm padding) */}
        <div className="p-8 relative bg-slate-50/50">
          <form ref={form} onSubmit={sendEmail} className="space-y-3">

            {/* HỌ TÊN */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Họ và tên</label>
              <input 
                type="text" 
                name="user_name" 
                className={`w-full px-4 py-2.5 border rounded-lg bg-white 
                  focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm text-sm
                  ${errors.user_name ? `border-red-500 bg-red-50 ${shakeClass}` : "border-slate-200"}`}
                placeholder="Nhập tên của bạn"
              />
              {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email nhận phản hồi</label>
              <input 
                type="email" 
                name="user_email"
                className={`w-full px-4 py-2.5 border rounded-lg bg-white 
                  focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm text-sm
                  ${errors.user_email ? `border-red-500 bg-red-50 ${shakeClass}` : "border-slate-200"}`}
                placeholder="email@cua-ban.com"
              />
              {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}
            </div>

            {/* LINK TÀI LIỆU */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1">
                Link tài liệu / JD <Link size={12} className="text-blue-500"/>
              </label>
              <input 
                type="url" 
                name="link_tai_lieu" 
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white 
                  focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm text-sm"
                placeholder="Dán link Google Drive, Dropbox... (Nếu có)"
              />
            </div>

            {/* TIN NHẮN */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tin nhắn</label>
              <textarea 
                name="message"
                rows={3}
                className={`w-full px-4 py-2.5 border rounded-lg bg-white resize-none
                  focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm text-sm
                  ${errors.message ? `border-red-500 bg-red-50 ${shakeClass}` : "border-slate-200"}`}
                placeholder="Bạn muốn trao đổi về điều gì?"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* NÚT GỬI */}
            <button 
              type="submit"
              disabled={loading}
              className={`w-full font-bold py-2.5 rounded-lg transition-all duration-300 flex justify-center items-center gap-2 text-white shadow-md text-sm uppercase tracking-wide
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5'}`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Đang gửi...
                </>
              ) : (
                <>
                  Gửi Tin Nhắn <Send size={16} />
                </>
              )}
            </button>

            {/* SUCCESS POPUP */}
            {success && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-2xl z-20 animate-fade-in border border-green-100">
                <div className="bg-green-100 p-3 rounded-full mb-3 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Đã gửi thành công!</h3>
                <p className="text-gray-500 text-center max-w-xs mb-5 text-sm px-4">
                  Cảm ơn bạn đã nhắn tin. Tin sẽ phản hồi sớm nhé!
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2 bg-slate-100 text-slate-600 font-bold rounded-lg hover:bg-slate-200 transition text-sm"
                >
                  Đóng
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