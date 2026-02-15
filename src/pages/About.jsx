import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineBriefcase } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
          <HiOutlineBriefcase className="text-accent" />
          درباره من
        </h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-md">
          {/* پروفایل */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mb-4">
              <span className="text-5xl text-white">👤</span>
            </div>
            <h2 className="text-2xl font-bold text-primary">امیدرضا</h2>
            <p className="text-gray-600">برنامه‌نویس ری‌اکت</p>
          </div>

          {/* اطلاعات */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <HiOutlineMail className="text-accent text-xl" />
              <span>omidreza@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <HiOutlineLocationMarker className="text-accent text-xl" />
              <span>ایران</span>
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <FaGithub className="text-3xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;