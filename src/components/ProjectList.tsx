import React from 'react';
import { Plus, Code2, RefreshCcw, Layout, Zap, Globe } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  dueDate: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
}

const projects: ProjectItem[] = [
  { 
    id: 1, 
    title: 'Develop API Endpoints', 
    dueDate: 'Nov 26, 2024', 
    icon: Code2, 
    iconColor: '#3B82F6', 
    bgColor: '#EFF6FF' 
  },
  { 
    id: 2, 
    title: 'Onboarding Flow', 
    dueDate: 'Nov 28, 2024', 
    icon: RefreshCcw, 
    iconColor: '#0D9488', 
    bgColor: '#F0FDFA' 
  },
  { 
    id: 3, 
    title: 'Build Dashboard', 
    dueDate: 'Nov 30, 2024', 
    icon: Layout, 
    iconColor: '#F59E0B', 
    bgColor: '#FFFBEB' 
  },
  { 
    id: 4, 
    title: 'Optimize Page Load', 
    dueDate: 'Dec 5, 2024', 
    icon: Zap, 
    iconColor: '#EA580C', 
    bgColor: '#FFF7ED' 
  },
  { 
    id: 5, 
    title: 'Cross-Browser Testing', 
    dueDate: 'Dec 6, 2024', 
    icon: Globe, 
    iconColor: '#6366F1', 
    bgColor: '#EEF2FF' 
  },
];

const ProjectList = () => {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#111827]">Project</h3>
        <button className="flex items-center gap-1 px-3 py-1 border border-gray-200 rounded-xl text-[11px] font-bold text-gray-600 hover:bg-gray-50 transition-colors">
          <Plus size={14} />
          New
        </button>
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center gap-4 group cursor-pointer">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: project.bgColor }}
            >
              <project.icon size={20} style={{ color: project.iconColor }} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#111827] leading-tight group-hover:text-[#064E3B] transition-colors">
                {project.title}
              </span>
              <span className="text-[11px] text-gray-400 mt-0.5">
                Due date: <span className="font-medium">{project.dueDate}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;