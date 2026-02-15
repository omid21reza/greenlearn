import { Link } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineLockClosed, HiOutlineChartBar, HiOutlineCloud, HiOutlineCheckCircle, HiOutlinePencil } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';  // ✅ جایگزین HiOutlineGithub

function ProjectCard({ project }) {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'building': return HiOutlineBuildingOffice;
      case 'lock': return HiOutlineLockClosed;
      case 'chart': return HiOutlineChartBar;
      case 'weather': return HiOutlineCloud;
      case 'todo': return HiOutlineCheckCircle;
      case 'blog': return HiOutlinePencil;
      default: return HiOutlineBuildingOffice;
    }
  };

  const Icon = getIcon(project.icon);
  const statusColor = project.status === 'تکمیل شده' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* هدر کارت */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-accent/10 rounded-xl">
          <Icon className="text-3xl text-accent" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-all"
              title="مخزن گیت‌هاب"
            >
              <FiGithub className="text-xl" />  {/* ✅ اصلاح شد */}
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-all"
              title="نمایش زنده"
            >
              <HiOutlineExternalLink className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* عنوان و توضیحات */}
      <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

      {/* وضعیت */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
          {project.status}
        </span>
      </div>

      {/* تگ‌ها */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags?.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* دکمه مشاهده جزئیات */}
      <Link 
        to={`/project/${project.id}`} 
        className="text-accent hover:text-primary transition-colors inline-flex items-center gap-2 font-medium"
      >
        مشاهده جزئیات
        <span>←</span>
      </Link>
    </div>
  );
}

export default ProjectCard;