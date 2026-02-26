import { Menu, Search, Mail, Bell, Command } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Menu - Only visible on small screens */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar - Hidden on very small mobile, flexible width on desktop */}
        <div className="relative hidden sm:block w-48 md:w-80 lg:w-96">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search task"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/10 transition-all"
          />
          <div className="absolute inset-y-0 right-3 hidden lg:flex items-center gap-1 text-gray-400">
            <Command size={14} />
            <span className="text-xs font-bold">F</span>
          </div>
        </div>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Icon Group */}
        <div className="flex items-center gap-1 md:gap-4 text-gray-500 border-r border-gray-100 pr-3 md:pr-6">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
            <Mail size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
        </div>

        {/* User Profile Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-[#111827] leading-tight">Totok Michael</p>
            <p className="text-xs text-gray-400 truncate max-w-[120px]">
              {user?.email || 'tmichael20@mail.com'}
            </p>
          </div>
          <div className="relative group cursor-pointer">
            <img 
              src="https://ui-avatars.com/api/?name=Totok+Michael&background=064E3B&color=fff" 
              alt="Profile" 
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-gray-100 object-cover"
            />
            {/* Status Indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;