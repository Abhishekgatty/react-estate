import StatCard from "@/components/StatCard";
import QuickActionCard from "@/components/QuickActionCard";
import { Users, Bell, Home, TrendingUp, PlusCircle, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's your overview</p>
      </div>

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

      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickActionCard
            title="Browse Properties"
            description="View available properties for sale"
            icon={Home}
            onClick={() => setLocation("/properties")}
          />
          <QuickActionCard
            title="Add Enquiry"
            description="Create a new lead or enquiry"
            icon={Users}
            onClick={() => setLocation("/enquiries")}
          />
          <QuickActionCard
            title="Set Reminder"
            description="Schedule a follow-up reminder"
            icon={Bell}
            onClick={() => setLocation("/reminders")}
          />
          <QuickActionCard
            title="List Property"
            description="Add a new property listing"
            icon={PlusCircle}
            onClick={() => setLocation("/properties")}
          />
          <QuickActionCard
            title="View Reports"
            description="Check productivity analytics"
            icon={BarChart3}
            onClick={() => setLocation("/reports")}
          />
        </div>
      </div>
    </div>
  );
}
