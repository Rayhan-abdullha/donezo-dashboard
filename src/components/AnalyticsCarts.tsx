import { useEffect, useState } from "react";
import axios from "axios";

interface AnalyticsItem {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

// Friday removed → 6 days only
const weekDays = ["S", "M", "T", "W", "T", "S"];

const AnalyticsChart = () => {
  const [data, setData] = useState<AnalyticsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/analytics"
        );
        setData(res.data);
      } catch (err) {
        console.error("Analytics fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 h-full shadow-sm animate-pulse">
        <div className="h-6 w-40 bg-gray-200 rounded mb-8"></div>
        <div className="flex items-end justify-between h-52 gap-3 px-2">
          {weekDays.map((_, i) => (
            <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
              <div className="w-full max-w-[45px] bg-gray-200 rounded-full h-24"></div>
              <div className="mt-4 h-3 w-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const maxViews = Math.max(...data.map((item) => item.views));

  const chartData = weekDays.map((day, index) => {
    const apiItem = data[index];

    if (!apiItem) {
      return {
        day,
        value: 20,
        type: "pending",
        label: "2%",
      };
    }

    const heightPercent = (apiItem.views / maxViews) * 100;

    // conversion rate → like 2%
  const conversionRate =
  apiItem.clicks > 0
    ? Math.round((apiItem.conversions / apiItem.clicks) * 100)
    : 0;

    let type: "pending" | "completed" | "current" | "active" = "pending";

    if (index === data.length - 1) type = "active";
    else if (index === 1) type = "completed";
    else if (index === 2) type = "current";

    return {
      day,
      value: heightPercent,
      type,
      label: `${conversionRate}%`,
    };
  });

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 h-full shadow-sm">
      <h3 className="text-lg font-bold text-[#111827] mb-8">
        Project Analytics
      </h3>

      <div className="flex items-end justify-between h-52 gap-3 px-2">
        {chartData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 group h-full justify-end"
          >
            <div
              style={{
                height: `${item.value}%`,
                backgroundImage:
                  item.type === "pending"
                    ? "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 8px)"
                    : "none",
              }}
              className={`w-full max-w-[45px] rounded-full transition-all duration-500 relative flex flex-col items-center ${
                item.type === "active"
                  ? "bg-[#064E3B]"
                  : item.type === "completed"
                  ? "bg-[#15803d]"
                  : item.type === "current"
                  ? "bg-[#6EE7B7]"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {item.label && (
                <div className="absolute -top-10 flex flex-col items-center">
                  <div className="bg-white shadow-xl text-[10px] font-bold px-2 py-1 rounded-lg border border-gray-100 text-[#059669]">
                    {item.label}
                  </div>
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