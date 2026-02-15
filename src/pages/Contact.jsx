import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌تونی منطق ارسال فرم رو اضافه کنی
    console.log('فرم ارسال شد:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-primary mb-8">📬 تماس با من</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* فرم تماس */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-bold text-primary mb-6">ارسال پیام</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">نام</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">ایمیل</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">پیام</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-primary-dark font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                ارسال پیام
              </button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-bold text-primary mb-6">راه‌های ارتباطی</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <HiOutlineMail className="text-accent text-2xl" />
                <span>omidreza@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <HiOutlinePhone className="text-accent text-2xl" />
                <span>+98 912 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <HiOutlineLocationMarker className="text-accent text-2xl" />
                <span>ایران، تهران</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4">شبکه‌های اجتماعی</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <FaTelegram className="text-3xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <FaWhatsapp className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;