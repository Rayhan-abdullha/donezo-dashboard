import { Plus } from "lucide-react";
import StatCard from "./layout/StateCard";
import ReminderCard from "./ReminderCard";
import TeamCollaboration from "./TeamCollabration";
import AnalyticsChart from "./AnalyticsCarts";
import ProjectProgress from "./ProjectProgress";
import ProjectList from "./ProjectList";
import TimeTracker from "./TimeTracker";
import StateCount from "./StateCount";

const DashboardBody = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#111827] tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1 font-medium">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-gradient-to-bl from-[#064E3B] to-[#15803d] hover:bg-[#043d2e] text-white px-6 py-3 rounded-full font-bold text-sm transition-all">
            <Plus size={18} /> Add Project
          </button>
          <button className="bg-white border border-gray-200 text-[#064E3B] px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
            Import Data
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StateCount/>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <AnalyticsChart />
            </div>
            <div className="md:col-span-2">
              <ReminderCard />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <TeamCollaboration />
            </div>
            <div className="md:col-span-2">
              <ProjectProgress />
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 flex flex-col gap-4">
          <div className="flex-1">
            <ProjectList />
          </div>
          <div className="h-fit">
            <TimeTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;