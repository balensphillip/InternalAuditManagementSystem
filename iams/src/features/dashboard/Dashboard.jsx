import {FolderOpen, AlertTriangle, TrendingUp, Calendar} from "lucide-react";
import Badge from "../../components/ui/Badge.jsx";
import StatCard from "../../components/ui/StatCard.jsx";
import BarChart from "../../components/graphs/Bar.jsx";  
import PieChart from "../../components/graphs/Pie.jsx";
import LineChart from "../../components/graphs/Line.jsx";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Heading*/}
       <h1 className="font-bold text-xl">Audit Summary</h1>

      {/* Period filters */}
      <div className="flex gap-3">
        <Badge active>Q1 2025</Badge>
        <Badge>FY 2025/2026</Badge>
        <Badge>All Time</Badge>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
        <StatCard
          title="Incoming"
          value="8"         
          icon={<FolderOpen size={14} />}
          iconBg="bg-purple-500/20"
          iconColor="text-purple-400"
        />

        <StatCard
          title="In-progress"
          value="12"
          icon={<FolderOpen size={14} />}
          iconBg="bg-blue-500/20"
          iconColor="text-blue-400"
        />

        <StatCard
          title="Closed"
          value="27"
          icon={<FolderOpen size={14} />}
          iconBg="bg-green-500/20"
          iconColor="text-green-400"
        />

        <StatCard
          title="Overdue"
          value="5"
          icon={<AlertTriangle size={14} />}
          iconBg="bg-amber-500/20"
          iconColor="text-amber-400"
        />

        <StatCard
          title="Execution Rate"
          value="85%"
          icon={<TrendingUp size={14} />}
          iconBg="bg-emerald-500/20"
          iconColor="text-emerald-400"
        />

        <StatCard
          title="Deadlines"
          value="3"
          icon={<Calendar size={14} />}
          iconBg="bg-indigo-500/20"
          iconColor="text-indigo-400"
        />

      </div>
      {/* Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">  
      <div className="bg-[rgb(var(--dashboard-card-bg))] p-4 rounded-lg shadow h-70">
        <BarChart />
      </div>
      
      <div className="bg-[rgb(var(--dashboard-card-bg))] p-4 rounded-lg shadow h-70">
        <PieChart /> 
      </div>

      <div className="bg-[rgb(var(--dashboard-card-bg))] p-4 rounded-lg shadow h-70">
        <LineChart /> 
      </div>
      </div>
    </div>
  );
}




