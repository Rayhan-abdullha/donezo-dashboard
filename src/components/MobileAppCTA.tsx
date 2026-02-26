const MobileAppCTA = () => {
  return (
    <div className="mt-auto bg-[#052C22] rounded-[2rem] p-5 text-white relative overflow-hidden shrink-0 shadow-lg">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150">
          <path 
            fill="none" 
            stroke="#34D399" 
            strokeWidth="0.5" 
            d="M0 100 Q 50 50 100 100 T 200 100 M0 110 Q 50 60 100 110 T 200 110"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20">
          <div className="w-4 h-4 rounded-full border-2 border-white" />
        </div>
        <h4 className="text-lg font-bold leading-tight mb-1">
          Download our <br /> Mobile App
        </h4>
        <p className="text-[11px] text-gray-400 font-medium mb-5">
          Get easy in another way
        </p>
        <button className="bg-[#064E3B] hover:bg-[#043d2e] text-[#34D399] text-sm font-bold py-3 px-4 rounded-full w-full border border-white/10 transition-all shadow-md">
          Download
        </button>
      </div>
    </div>
  );
};

export default MobileAppCTA;