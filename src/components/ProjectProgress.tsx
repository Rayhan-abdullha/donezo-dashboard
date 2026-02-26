import React from 'react';

const ProjectProgress = () => {
  const percentage = 41;
  
  return (
    <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-bold text-[#111827] mb-4">Project Progress</h3>

      <div className="relative flex flex-col items-center justify-center flex-1 py-8">
        <svg
          viewBox="0 0 220 120"
          className="w-full max-w-[240px]"
        >
          {/* Define the Hatching Pattern for the Pending state */}
          <defs>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="4" stroke="#9ca3af" strokeWidth="1.5" />
            </pattern>
          </defs>

          {/* 1. Gray/Pending Background Track with Hatching */}
          <path
            d="M 20 100 A 80 80 0 0 1 200 100"
            fill="none"
            stroke="url(#hatch)"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* 2. Completed (Dark Forest Green) */}
          {/* Note: strokeDasharray calculation based on approx semi-circle length (~251) */}
          <path
            d="M 20 100 A 80 80 0 0 1 200 100"
            fill="none"
            stroke="#064E3B"
            strokeWidth="28"
            strokeLinecap="round"
            strokeDasharray="251.3"
            strokeDashoffset={251.3 - (251.3 * (percentage / 100))}
            className="transition-all duration-1000 ease-out"
          />

          {/* 3. In Progress (Medium Green) - Positioned at the end of the completed path */}
          <path
            d="M 20 100 A 80 80 0 0 1 200 100"
            fill="none"
            stroke="#065F46"
            strokeWidth="28"
            strokeLinecap="round"
            strokeDasharray="251.3"
            strokeDashoffset={251.3 - (251.3 * (percentage / 100))}
            // This mask-like effect creates the overlapping darker segment seen in the image
            style={{ opacity: 0.4 }}
          />
        </svg>

        {/* Center Text Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 flex flex-col items-center">
          <span className="text-5xl font-bold text-[#111827] leading-none">{percentage}%</span>
          <span className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-tight">Project Ended</span>
        </div>
      </div>

      {/* Legend / Labels */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-[12px] font-semibold text-gray-600">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#064E3B]" />
          <span className="text-[12px] font-semibold text-gray-600">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-3 h-3 overflow-hidden rounded-full bg-gray-100 border border-gray-300">
             <div className="w-full h-full" style={{ background: 'url(#hatch)' }}></div>
          </div>
          <span className="text-[12px] font-semibold text-gray-600">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;