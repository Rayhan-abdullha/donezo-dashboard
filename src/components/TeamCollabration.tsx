import React from 'react';
import { Plus } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  task: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  avatar: string;
}

const members: TeamMember[] = [
  { id: 1, name: 'Alexandra Deff', role: 'UI Designer', task: 'Github Project Repository', status: 'Completed', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { id: 2, name: 'Edwin Adenike', role: 'Frontend', task: 'Integrate User Authentication System', status: 'In Progress', avatar: 'https://i.pravatar.cc/150?u=edwin' },
  { id: 3, name: 'Isaac Oluwatemilorun', role: 'Backend', task: 'Develop Search and Filter Functionality', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=isaac' },
  { id: 4, name: 'David Oshodi', role: 'UI Designer', task: 'Responsive Layout for Homepage', status: 'In Progress', avatar: 'https://i.pravatar.cc/150?u=david' },
];

const TeamCollaboration = () => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-[#F0FDF4] text-[#22C55E] border-[#DCFCE7]';
      case 'In Progress':
        return 'bg-[#FFFBEB] text-[#F59E0B] border-[#FEF3C7]';
      case 'Pending':
        return 'bg-[#FEF2F2] text-[#EF4444] border-[#FEE2E2]';
      default:
        return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#111827]">Team Collaboration</h3>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
          <Plus size={14} />
          Add Member
        </button>
      </div>

      {/* Members List */}
      <div className="space-y-5">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between group transition-all">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-10 h-10 rounded-full object-cover border border-gray-100"
                />
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#111827] leading-tight group-hover:text-[#064E3B] transition-colors">
                  {member.name}
                </span>
                <p className="text-[11px] text-gray-400">
                  Working on <span className="font-semibold text-gray-600">{member.task}</span>
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <div className={`px-2 py-0.5 rounded-md text-[9px] font-bold border ${getStatusStyles(member.status)}`}>
              {member.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaboration;