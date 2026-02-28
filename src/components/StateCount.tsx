import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "./layout/StateCard";

const StateCount = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    revenue: 0,
    growth: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/overview"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching overview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  // ✅ Skeleton UI (Same height as StatCard)
  if (loading) {
    return (
      <>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="relative p-6 h-[185px] flex flex-col justify-between rounded-[2rem] border border-gray-100 bg-white shadow-sm animate-pulse"
          >
            <div className="flex justify-between items-start">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>

            <div className="mt-2">
              <div className="h-10 w-24 bg-gray-200 rounded"></div>
            </div>

            <div className="mt-auto">
              <div className="h-5 w-36 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <StatCard
        title="Total Projects"
        value={data.totalUsers.toLocaleString()}
        trendText="Increased from last month"
        trendValue={12.5}
        variant="primary"
      />

      <StatCard
        title="Ended Projects"
        value={data.activeUsers.toLocaleString()}
        trendValue={12.5}
        trendText="Increased from last month"
      />

      <StatCard
        title="Revenue"
        value={`$${data.revenue.toLocaleString()}`}
        trendValue={8.3}
        trendText="Increased from last month"
      />

      <StatCard
        title="Growth Rate"
        value={`${data.growth}%`}
        trendText="On Discuss"
        isPending
      />
    </>
  );
};

export default StateCount;