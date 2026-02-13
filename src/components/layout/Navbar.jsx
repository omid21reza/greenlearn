import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'خانه', path: '/', icon: '🏠' },
    { name: 'پروژه‌ها', path: '/projects', icon: '📁' },
    { name: 'درباره من', path: '/about', icon: '👤' },
    { name: 'تماس', path: '/contact', icon: '📬' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* لوگو */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold group">
            <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">
              🌲
            </span>
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              GreenLearn
            </span>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 rounded-lg transition-all duration-300
                  flex items-center gap-2 text-sm font-medium
                  ${isActive(item.path) 
                    ? 'bg-accent text-primary-dark shadow-md scale-105' 
                    : 'hover:bg-primary-light hover:scale-105'
                  }
                `}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* دکمه منوی موبایل */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-primary-light rounded-lg hover:bg-accent transition-colors"
          >
            <span className="text-2xl">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* منوی موبایل (بازشونده) */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-light animate-fadeIn">
            {navItems.map((item) => (
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
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* استایل انیمیشن */}
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