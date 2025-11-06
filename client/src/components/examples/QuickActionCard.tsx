import QuickActionCard from "../QuickActionCard";
import { Home, Users, Bell, PlusCircle, BarChart3, Settings } from "lucide-react";

export default function QuickActionCardExample() {
  return (
    <div className="p-6 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <QuickActionCard
          title="Browse Properties"
          description="View available properties for sale"
          icon={Home}
          onClick={() => console.log("Browse Properties clicked")}
        />
        <QuickActionCard
          title="Add Enquiry"
          description="Create a new lead or enquiry"
          icon={Users}
          onClick={() => console.log("Add Enquiry clicked")}
        />
        <QuickActionCard
          title="Set Reminder"
          description="Schedule a follow-up reminder"
          icon={Bell}
          onClick={() => console.log("Set Reminder clicked")}
        />
        <QuickActionCard
          title="List Property"
          description="Add a new property listing"
          icon={PlusCircle}
          onClick={() => console.log("List Property clicked")}
        />
        <QuickActionCard
          title="View Reports"
          description="Check productivity analytics"
          icon={BarChart3}
          onClick={() => console.log("View Reports clicked")}
        />
        <QuickActionCard
          title="Settings"
          description="Manage your account preferences"
          icon={Settings}
          onClick={() => console.log("Settings clicked")}
        />
      </div>
    </div>
  );
}
