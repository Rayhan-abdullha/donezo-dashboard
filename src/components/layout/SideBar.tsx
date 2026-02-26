import { X, LayoutDashboard, CheckSquare, Calendar, BarChart2, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import MobileAppCTA from '../MobileAppCTA';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { logout } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: CheckSquare, label: 'Tasks', badge: '12+' },
    { icon: Calendar, label: 'Calendar' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Users, label: 'Team' },
  ];

  const generalItems = [
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 z-[40] transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <aside className={`fixed inset-y-0 left-0 z-[50] w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex flex-col p-6 h-full`}>
        <button onClick={onClose} className="lg:hidden absolute top-5 right-4 text-gray-400 p-1 cursor-pointer">
          <X size={20} />
        </button>
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-[#064E3B] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <span className="text-xl font-bold text-[#111827]">Donezo</span>
        </div>
        <nav className="flex-1 space-y-8 overflow-y-auto custom-scrollbar">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Menu</p>
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center justify-between w-full p-2 rounded-xl mb-1 transition-colors ${
                  item.active ? 'bg-[#064E3B] text-white' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && <span className="text-[10px] bg-[#064E3B] text-white px-1.5 py-0.5 rounded-md border border-white/20">{item.badge}</span>}
              </button>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">General</p>
            {generalItems.map((item) => (
              <button key={item.label} className="flex items-center gap-3 w-full p-2 text-gray-500 hover:bg-gray-50 rounded-xl mb-1 transition-colors">
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <button 
              onClick={logout}
              className="flex items-center gap-3 w-full p-2 text-red-500 hover:bg-red-50 rounded-xl mt-4 transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
        <MobileAppCTA/>
      </aside>
    </>
  );
};

export default Sidebar;