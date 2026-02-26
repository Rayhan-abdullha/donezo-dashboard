import { Pause, Square } from 'lucide-react';

const TimeTracker = () => {
  return (
    <div className="relative bg-[#052C22] rounded-[2rem] p-6 text-white overflow-hidden shadow-lg shadow-[#064E3B]/20 min-h-[220px] flex flex-col justify-between group">
    
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150 origin-center opacity-40 transition-transform duration-700 group-hover:scale-[1.6]">
           <path 
             fill="#064E3B" 
             d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.2,-0.8C83.5,14.1,76.7,28.2,67.8,40.4C58.8,52.6,47.7,63,34.7,70.1C21.7,77.2,6.8,81.1,-8.5,79.5C-23.8,78,-39.6,71.1,-52.1,60.8C-64.6,50.5,-73.9,36.8,-79.1,21.7C-84.3,6.6,-85.4,-10,-79.9,-24.8C-74.4,-39.6,-62.3,-52.6,-48.3,-60.1C-34.3,-67.6,-18.4,-69.6,-2,-66.2C14.4,-62.7,28.8,-53.9,44.7,-76.4Z" 
             transform="translate(100 100)" 
           />
           <path 
             stroke="#34D399" 
             strokeWidth="0.2" 
             fill="none" 
             d="M0,0 C50,100 150,0 200,100" 
             className="animate-pulse"
           />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#052C22] via-transparent to-transparent opacity-60" />
      </div>
      <div className="relative z-10">
        <p className="text-sm font-medium text-gray-300 mb-2">Time Tracker</p>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center my-2">
        <span className="text-5xl font-bold tracking-tight drop-shadow-md">
          01:24:08
        </span>
      </div>
      <div className="relative z-10 flex items-center justify-center gap-4 mt-2">
        <button className="w-12 h-12 bg-white text-[#052C22] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
          <Pause size={24} fill="currentColor" />
        </button>
        <button className="w-12 h-12 bg-[#EF4444] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
          <Square size={20} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;