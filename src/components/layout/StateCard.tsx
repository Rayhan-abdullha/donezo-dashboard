import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  trendText?: string;
  variant?: 'primary' | 'secondary';
  isPending?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  trendText, 
  variant = 'secondary', 
  isPending = false 
}) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={`
      relative p-6 h-[185px] flex flex-col justify-between transition-all duration-300 cursor-pointer
      hover:translate-y-[-4px] hover:shadow-xl
      rounded-[2rem] border
      ${isPrimary 
      // bg gredient with subtle shadow for primary variant, solid white with light shadow for secondary
        ? 'bg-gradient-to-bl from-[#064E3B] to-[#15803d] border-transparent text-white shadow-lg shadow-[#064E3B]/20' 
        : 'bg-white border-gray-100 text-[#111827] shadow-sm'
      }
    `}>
      {/* Top Row: Title and Arrow Icon */}
      <div className="flex justify-between items-start">
        <span className={`text-sm font-medium ${isPrimary ? 'text-gray-300' : 'text-gray-400'}`}>
          {title}
        </span>
        <div className={`
          p-2 rounded-full border transition-colors
          ${isPrimary 
            ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' 
            : 'border-gray-200 text-gray-900 hover:bg-gray-50'
          }
        `}>
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
      </div>

      {/* Middle Row: The Value */}
      <div className="mt-2">
        <h2 className="text-4xl font-bold tracking-tight">{value}</h2>
      </div>

      {/* Bottom Row: Trend or Discussion Status */}
      <div className="mt-auto flex items-center">
        {isPending ? (
          <span className="text-xs font-semibold text-gray-400">On Discuss</span>
        ) : (
          <div className="flex items-center gap-2">
            {/* Trend Badge */}
            <div className={`
              flex items-center gap-1.5 px-1.5 py-1 rounded-lg text-[10px] font-bold
              ${isPrimary ? 'bg-white/10 text-white' : 'bg-gray-50 border border-gray-100 text-gray-500'}
            `}>
              <span className="bg-[#34D399] text-[#064E3B] px-1 rounded-sm text-[9px]">5</span>
              {trendText || "Increased from last month"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;