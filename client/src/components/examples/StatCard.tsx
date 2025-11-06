import StatCard from "../StatCard";
import { Users, Bell, TrendingUp, Home } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-6 space-y-4 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Enquiries"
          value="156"
          icon={Users}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <StatCard
          title="Pending Reminders"
          value="8"
          icon={Bell}
        />
        <StatCard
          title="Properties Listed"
          value="42"
          icon={Home}
          trend={{ value: "5% from last month", isPositive: true }}
        />
        <StatCard
          title="Conversions"
          value="23"
          icon={TrendingUp}
          trend={{ value: "3% from last month", isPositive: false }}
        />
      </div>
    </div>
  );
}
