import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { HiOutlineBuildingOffice, HiOutlineLockClosed, HiOutlineChartBar } from 'react-icons/hi2';
import { GiPineTree } from 'react-icons/gi';

function Home() {
  const stats = [
    { label: 'پروژه‌های تکمیل شده', value: '۱۲+' },
    { label: 'تکنولوژی‌ها', value: '۸+' },
    { label: 'ساعت یادگیری', value: '۲۰۰+' },
  ];

  const featuredProjects = [
    { id: 1, title: 'باشگاه مشتریان', desc: 'صفحه خدمات با کارت‌های گرادینت', icon: HiOutlineBuildingOffice },
    { id: 2, title: 'فرم لاگین', desc: 'اعتبارسنجی و انیمیشن', icon: HiOutlineLockClosed },
    { id: 3, title: 'داشبورد مدیریت', desc: 'با ری‌اکت و تیلویند', icon: HiOutlineChartBar },
  ];

  return (
    <div className="min-h-screen">
      {/* بخش Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <GiPineTree className="text-7xl text-accent animate-pulse" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="text-accent">Green</span>Learn
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              مخزن یادگیری من — جایی برای ثبت تمام پروژه‌ها، تجربه‌ها و مسیر یادگیری ری‌اکت
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" onClick={() => window.location.href = '/projects'}>
                مشاهده پروژه‌ها
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/about'}>
                درباره من
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* بخش آمار */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش پروژه‌های ویژه */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            پروژه‌های ویژه
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="text-5xl text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{project.desc}</p>
                  <div className="flex justify-center">
                    <Link 
                      to="/projects" 
                      className="text-accent hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      بیشتر بدانید
                      <span>←</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;