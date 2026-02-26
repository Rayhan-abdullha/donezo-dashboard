const AnalyticsChart = () => {
  const data = [
    { day: 'S', value: 65, type: 'pending' },
    { day: 'M', value: 85, type: 'completed' },
    { day: 'T', value: 60, type: 'current', label: '74%' },
    { day: 'W', value: 100, type: 'active' },
    { day: 'T', value: 80, type: 'pending' },
    { day: 'F', value: 55, type: 'pending' },
    { day: 'S', value: 75, type: 'pending' },
  ];

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 h-full shadow-sm">
      <h3 className="text-lg font-bold text-[#111827] mb-8">Project Analytics</h3>
      
      <div className="flex items-end justify-between h-52 gap-3 px-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1 group h-full justify-end">
            <div 
              style={{ 
                height: `${item.value}%`,
                // Custom CSS for the diagonal stripes pattern
                backgroundImage: item.type === 'pending' 
                  ? 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 8px)' 
                  : 'none'
              }}
              className={`w-full max-w-[45px] rounded-full transition-all duration-500 relative flex flex-col items-center ${
                item.type === 'active' ? 'bg-[#064E3B]' : 
                item.type === 'completed' ? 'bg-[#15803d]' : // Deep Mint/Green
                item.type === 'current' ? 'bg-[#6EE7B7]' : 
                'bg-gray-50 border border-gray-200' // Pending background
              }`}
            >
              {/* The "74%" Tooltip specific to Tuesday */}
              {item.label && (
                <div className="absolute -top-10 flex flex-col items-center">
                  <div className="bg-white shadow-xl text-[10px] font-bold px-2 py-1 rounded-lg border border-gray-100 text-[#059669]">
                    {item.label}
                  </div>
                  {/* Small circle indicator on the bar */}
                  <div className="w-2 h-2 bg-white border-2 border-[#6EE7B7] rounded-full mt-1"></div>
                </div>
              )}
            </div>
            
            <span className="mt-4 text-[13px] font-bold text-gray-400 uppercase tracking-tight">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsChart;