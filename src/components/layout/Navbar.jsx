import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiHome, HiFolder, HiUser, HiMail } from 'react-icons/hi';
import { GiPineTree } from 'react-icons/gi';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'خانه', path: '/', icon: HiHome },
    { name: 'پروژه‌ها', path: '/projects', icon: HiFolder },
    { name: 'درباره من', path: '/about', icon: HiUser },
    { name: 'تماس', path: '/contact', icon: HiMail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* لوگو وسط و بزرگتر - فقط دسکتاپ */}
        <div className="hidden md:flex justify-center py-4">
          <Link to="/" className="flex flex-col items-center group">
            <GiPineTree className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-accent" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mt-2">
              GreenLearn
            </span>
          </Link>
        </div>

        {/* هدر موبایل */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <GiPineTree className="text-3xl text-accent" />
            <span className="text-lg font-bold">GreenLearn</span>
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center bg-primary-light rounded-lg hover:bg-accent transition-colors"
          >
            <span className="text-2xl">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* منوی دسکتاپ با آیکون‌های زیبا */}
        <div className="hidden md:flex justify-center items-center gap-4 pb-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-5 py-2 rounded-lg transition-all duration-300
                  flex flex-col items-center gap-1 text-sm font-medium
                  ${isActive(item.path) 
                    ? 'bg-accent text-primary-dark shadow-md scale-105' 
                    : 'hover:bg-primary-light hover:scale-105'
                  }
                `}
              >
                <Icon className="text-2xl" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* منوی موبایل */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-light animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-300
                    flex items-center gap-3 text-base font-medium mb-1
                    ${isActive(item.path) 
                      ? 'bg-accent text-primary-dark' 
                      : 'hover:bg-primary-light'
                    }
                  `}
                >
                  <Icon className="text-xl" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;