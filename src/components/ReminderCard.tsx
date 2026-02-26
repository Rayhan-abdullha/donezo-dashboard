import React from 'react';
import { Video, ArrowRight } from 'lucide-react';

const ReminderCard = () => {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col h-full min-h-[200px]">
      {/* Label */}
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-400">Reminders</span>
      </div>

      {/* Meeting Title & Details */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#111827] leading-tight mb-2">
          Meeting with Arc Company
        </h3>
        <p className="text-sm text-gray-400 font-medium">
          Time: <span className="text-gray-600">02:00 pm - 04:00 pm</span>
        </p>
      </div>

      {/* CTA Button */}
      <button className="mt-6 w-full bg-gradient-to-br from-[#064E3B] to-[#15803d] hover:bg-[#043d2e] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
        <Video size={18} className="text-[#34D399]" />
        <span>Start Meeting</span>
        <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
      </button>
    </div>
  );
};

export default ReminderCard;