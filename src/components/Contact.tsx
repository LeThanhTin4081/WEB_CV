import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Loader2, Link } from 'lucide-react';
import { MailGlyph, PhoneGlyph, LinkedinGlyph, MapPinGlyph } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';

const shakeClass = 'animate-[shake_0.25s_ease-in-out]';

const inputBase =
  'w-full px-4 py-2.5 border rounded-lg bg-slate-900/60 text-white placeholder:text-white/30 focus:ring-2 focus:ring-cyan-500 outline-none transition shadow-sm text-sm';

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const validate = () => {
    const name = form.current?.user_name.value.trim();
    const email = form.current?.user_email.value.trim();
    const message = form.current?.message.value.trim();

    const newErrors = { user_name: '', user_email: '', message: '' };
    let ok = true;

    if (!name) {
      newErrors.user_name = t.contact.nameError;
      ok = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.user_email = t.contact.emailRequired;
      ok = false;
    } else if (!emailRegex.test(email)) {
      newErrors.user_email = t.contact.emailInvalid;
      ok = false;
    }

    if (!message) {
      newErrors.message = t.contact.messageError;
      ok = false;
    }

    setErrors(newErrors);
    return ok;
  };

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
        emailjs.sendForm(serviceId, templateReply, form.current, publicKey),
      ]);
      setSuccess(true);
      form.current.reset();
    } catch (error: any) {
      console.error(error);
      alert(t.contact.sendError + error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="scroll-mt-24">
      <div className="surface-card overflow-hidden grid md:grid-cols-2 max-w-5xl mx-auto">
        <div className="p-8 bg-gradient-to-br from-blue-600/30 to-cyan-700/20 border-b md:border-b-0 md:border-r border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2 text-center">
            {t.contact.title} <span className="animate-pulse">👋</span>
          </h2>

          <p className="text-white/70 mb-5 text-sm leading-relaxed text-justify">
            {t.contact.intro}
          </p>

          <div className="space-y-4">
            <a href="mailto:lethanhtin.cv@gmail.com" className="flex items-center gap-3 group">
              <div className="icon-circle">
                <MailGlyph size={18} />
              </div>
              <div>
                <p className="text-xs text-white/50 font-semibold tracking-wider">Email</p>
                <p className="font-medium text-white text-sm group-hover:underline">lethanhtin.cv@gmail.com</p>
              </div>
            </a>

            <a href="tel:+84349249103" className="flex items-center gap-3 group">
              <div className="icon-circle">
                <PhoneGlyph size={18} />
              </div>
              <div>
                <p className="text-xs text-white/50 font-semibold tracking-wider">{t.contact.phone}</p>
                <p className="font-medium text-white text-sm group-hover:underline">(+84) 349 249 103</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/lethanhtin4081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="icon-circle">
                <LinkedinGlyph size={18} />
              </div>
              <div>
                <p className="text-xs text-white/50 font-semibold tracking-wider">LinkedIn</p>
                <p className="font-medium text-white text-sm group-hover:underline">linkedin.com/in/lethanhtin4081</p>
              </div>
            </a>

            <div className="flex items-center gap-3 group">
              <div className="icon-circle">
                <MapPinGlyph size={18} />
              </div>
              <div>
                <p className="text-xs text-white/50 font-semibold tracking-wider">{t.contact.locationLabel}</p>
                <p className="font-medium text-white text-sm">{t.contact.locationValue}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 relative bg-slate-950/40">
          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-white/50 mb-1">{t.contact.nameLabel}</label>
              <input
                type="text"
                name="user_name"
                className={`${inputBase} ${
                  errors.user_name ? `border-red-500 bg-red-500/10 ${shakeClass}` : 'border-white/10'
                }`}
                placeholder={t.contact.namePlaceholder}
              />
              {errors.user_name && <p className="text-red-400 text-xs mt-1">{errors.user_name}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-white/50 mb-1">{t.contact.emailLabel}</label>
              <input
                type="email"
                name="user_email"
                className={`${inputBase} ${
                  errors.user_email ? `border-red-500 bg-red-500/10 ${shakeClass}` : 'border-white/10'
                }`}
                placeholder={t.contact.emailPlaceholder}
              />
              {errors.user_email && <p className="text-red-400 text-xs mt-1">{errors.user_email}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-white/50 mb-1 flex items-center gap-1">
                {t.contact.linkLabel} <Link size={12} className="text-cyan-400" />
              </label>
              <input
                type="url"
                name="link_tai_lieu"
                className={`${inputBase} border-white/10`}
                placeholder={t.contact.linkPlaceholder}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/50 mb-1">{t.contact.messageLabel}</label>
              <textarea
                name="message"
                rows={3}
                className={`${inputBase} resize-none ${
                  errors.message ? `border-red-500 bg-red-500/10 ${shakeClass}` : 'border-white/10'
                }`}
                placeholder={t.contact.messagePlaceholder}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-bold py-2.5 rounded-full transition-all duration-300 flex justify-center items-center gap-2 text-white shadow-md text-sm tracking-wide ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> {t.contact.sending}
                </>
              ) : (
                <>
                  {t.contact.send} <Send size={16} />
                </>
              )}
            </button>

            {success && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md rounded-2xl z-20 border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mb-3 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{t.contact.successTitle}</h3>
                <p className="text-white/60 text-center max-w-xs mb-5 text-sm px-4">
                  {t.contact.successBody}
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2 bg-white/10 text-white/80 font-bold rounded-lg hover:bg-white/20 transition text-sm"
                >
                  {t.contact.close}
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
