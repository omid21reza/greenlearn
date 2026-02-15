import { useState } from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import projectsData from '../data/projects.json';
import { HiOutlineSearch } from 'react-icons/hi';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('همه');

  // استخراج همه تگ‌ها
  const allTags = ['همه', ...new Set(projectsData.flatMap(p => p.tags))];

  // فیلتر پروژه‌ها بر اساس جستجو و تگ
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'همه' || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* عنوان */}
        <h1 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
          <span className="text-4xl">📁</span>
          پروژه‌ها
        </h1>

        {/* نوار جستجو و فیلتر */}
        <div className="mb-8 space-y-4">
          {/* باکس جستجو */}
          <div className="relative max-w-md">
            <HiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="جستجوی پروژه..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* فیلتر تگ‌ها */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedTag === tag 
                    ? 'bg-accent text-primary-dark shadow-md scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* نمایش تعداد پروژه‌ها */}
        <p className="text-gray-600 mb-6">
          {filteredProjects.length} پروژه یافت شد
        </p>

        {/* گرید پروژه‌ها */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">پروژه‌ای با این مشخصات یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;