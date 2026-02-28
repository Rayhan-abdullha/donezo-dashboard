import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  trendValue?: number; // e.g. 23.5
  trendText?: string;
  variant?: "primary" | "secondary";
  isPending?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trendValue,
  trendText,
  variant = "secondary",
  isPending = false,
}) => {
  const isPrimary = variant === "primary";
  const isPositive = trendValue !== undefined && trendValue >= 0;

  // Format number if it's numeric
  const formattedValue =
    typeof value === "number" ? value.toLocaleString() : value;

  return (
    <div
      className={`
      relative p-6 h-[185px] flex flex-col justify-between transition-all duration-300 cursor-pointer
      hover:translate-y-[-4px] hover:shadow-xl
      rounded-[2rem] border
      ${
        isPrimary
          ? "bg-gradient-to-bl from-[#064E3B] to-[#15803d] border-transparent text-white shadow-lg shadow-[#064E3B]/20"
          : "bg-white border-gray-100 text-[#111827] shadow-sm"
      }
    `}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <span
          className={`text-sm font-medium ${
            isPrimary ? "text-gray-300" : "text-gray-400"
          }`}
        >
          {title}
        </span>

        <div
          className={`
          p-2 rounded-full border transition-colors
          ${
            isPrimary
              ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
              : "border-gray-200 text-gray-900 hover:bg-gray-50"
          }
        `}
        >
          {isPositive ? (
            <ArrowUpRight size={16} strokeWidth={2.5} />
          ) : (
            <ArrowDownRight size={16} strokeWidth={2.5} />
          )}
        </div>
      </div>

      {/* Value */}
      <div className="mt-2">
        <h2 className="text-4xl font-bold tracking-tight">
          {formattedValue}
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center">
        {isPending ? (
          <span className="text-xs font-semibold text-gray-400">
            On Discuss
          </span>
        ) : trendValue !== undefined ? (
          <div className="flex items-center gap-2">
            <div
              className={`
              flex items-center gap-1.5 px-2 py-1 rounded-lg text-[11px] font-semibold
              ${
                isPrimary
                  ? "bg-white/10 text-white"
                  : "bg-gray-50 border border-gray-100"
              }
            `}
            >
              <span
                className={`
                px-1.5 py-0.5 rounded text-[10px] font-bold
                ${
                  isPositive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
              >
                {isPositive ? "+" : ""}
                {trendValue}%
              </span>
              {trendText || "Compared to last month"}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StatCard;