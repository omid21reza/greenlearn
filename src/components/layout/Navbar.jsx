import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiHome, HiFolder, HiUser, HiMail, HiOutlineViewGrid } from 'react-icons/hi';
import { GiPineTree } from 'react-icons/gi';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'خانه', path: '/', icon: HiHome },
    { name: 'پروژه‌ها', path: '/projects', icon: HiFolder },
    { name: 'درباره من', path: '/about', icon: HiUser },
    { name: 'تماس', path: '/contact', icon: HiMail },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* لوگو دسکتاپ */}
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

        {/* منوی دسکتاپ */}
        <div className="hidden md:flex flex-col items-center pb-3">
          {/* آیتم‌های منو + لینک داشبورد */}
          <div className="flex justify-center items-center gap-4 mb-3">
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

            {/* لینک داشبورد - فقط وقتی لاگین هستی */}
            {token && (
              <Link
                to="/dashboard"
                className={`
                  px-5 py-2 rounded-lg transition-all duration-300
                  flex flex-col items-center gap-1 text-sm font-medium
                  ${isActive('/dashboard') 
                    ? 'bg-accent text-primary-dark shadow-md scale-105' 
                    : 'hover:bg-primary-light hover:scale-105'
                  }
                `}
              >
                <HiOutlineViewGrid className="text-2xl" />
                <span>داشبورد</span>
              </Link>
            )}
          </div>

          {/* دکمه‌های ورود/ثبت‌نام یا خروج */}
          <div className="flex gap-3">
            {token ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
              >
                خروج
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-accent text-primary-dark rounded-lg hover:bg-opacity-90 transition-colors text-sm"
                >
                  ورود
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-primary-dark transition-colors text-sm"
                >
                  ثبت‌نام
                </Link>
              </>
            )}
          </div>
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

            {/* لینک داشبورد در موبایل */}
            {token && (
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg transition-all duration-300
                  flex items-center gap-3 text-base font-medium mb-1
                  ${isActive('/dashboard') 
                    ? 'bg-accent text-primary-dark' 
                    : 'hover:bg-primary-light'
                  }
                `}
              >
                <HiOutlineViewGrid className="text-xl" />
                <span>داشبورد</span>
              </Link>
            )}

            {/* دکمه‌های موبایل */}
            <div className="mt-4 space-y-2">
              {token ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-red-500 text-white rounded-lg"
                >
                  خروج
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 bg-accent text-primary-dark rounded-lg text-center"
                  >
                    ورود
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 border border-accent text-accent rounded-lg text-center"
                  >
                    ثبت‌نام
                  </Link>
                </>
              )}
            </div>
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