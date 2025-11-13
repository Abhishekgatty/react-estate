// import StatCard from "@/components/StatCard";
// import QuickActionCard from "@/components/QuickActionCard";
// import { Users, Bell, Home, TrendingUp, PlusCircle, BarChart3 } from "lucide-react";
// import { useLocation } from "wouter";
// import { useEffect } from "react";
// import { supabase } from "../supabaseClient";

// export default function Dashboard() {
//   const [, setLocation] = useLocation();

//   useEffect(() => {
//     async function fetchUser() {
//       const { data: { session }, error } = await supabase.auth.getSession();
//       if (error) {
//         console.error("Error fetching session:", error.message);
//       } else if (session?.user) {
//         console.log("User UID:", session.user.id); // <-- UID
//         console.log("User Email:", session.user.email);
//       } else {
//         console.log("No active session");
//       }
//     }

//     fetchUser();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-2xl md:text-3xl font-bold text-primary">Dashboard</h2>
//         <p className="text-muted-foreground">Welcome back! Here's your overview</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <StatCard
//           title="Total Enquiriese"
//           value="156"
//           icon={Users}
//           trend={{ value: "12% from last month", isPositive: true }}
//         />
//         <StatCard
//           title="Pending Reminders"
//           value="8"
//           icon={Bell}
//         />
//         <StatCard
//           title="Properties Listed"
//           value="42"
//           icon={Home}
//           trend={{ value: "5% from last month", isPositive: true }}
//         />
//         <StatCard
//           title="Conversions"
//           value="23"
//           icon={TrendingUp}
//           trend={{ value: "3% from last month", isPositive: false }}
//         />
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <QuickActionCard
//             title="Browse Properties"
//             description="View available properties for sale"
//             icon={Home}
//             onClick={() => setLocation("/properties")}
//           />
//           <QuickActionCard
//             title="Add Enquiry"
//             description="Create a new lead or enquiry"
//             icon={Users}
//             onClick={() => setLocation("/enquiries")}
//           />
//           <QuickActionCard
//             title="Set Reminder"
//             description="Schedule a follow-up reminder"
//             icon={Bell}
//             onClick={() => setLocation("/reminders")}
//           />
//           <QuickActionCard
//             title="List Property"
//             description="Add a new property listing"
//             icon={PlusCircle}
//             onClick={() => setLocation("/properties")}
//           />
//           <QuickActionCard
//             title="View Reports"
//             description="Check productivity analytics"
//             icon={BarChart3}
//             onClick={() => setLocation("/reports")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { useLocation } from "wouter";
// import StatCard from "@/components/StatCard";
// import QuickActionCard from "@/components/QuickActionCard";
// import {
//   Users,
//   Bell,
//   Home,
//   TrendingUp,
//   PlusCircle,
//   BarChart3,
// } from "lucide-react";
// import { supabase } from "../supabaseClient";

// interface Stat {
//   title: string;
//   value: number | string;
//   icon: React.ElementType;
//   trend?: { value: string; isPositive: boolean };
// }

// export default function Dashboard() {
//   const [, setLocation] = useLocation();
//   const [stats, setStats] = useState<Stat[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchUser() {
//       const {
//         data: { session },
//         error,
//       } = await supabase.auth.getSession();
//       if (error) {
//         console.error("Error fetching session:", error.message);
//       } else if (!session?.user) {
//         // No active session → redirect to login
//         setLocation("/login");
//       } else {
//         console.log("User UID:", session.user.id);
//         console.log("User Email:", session.user.email);
//       }
//     }

//     fetchUser();
//   }, [setLocation]);

//   useEffect(() => {
//     async function fetchStats() {
//       setLoading(true);

//       const { count: enquiriesCount } = await supabase
//         .from("enquiries")
//         .select("*", { count: "exact" });

//       const { count: pendingReminders } = await supabase
//         .from("reminders")
//         .select("*", { count: "exact" })
//         .eq("status", "pending");

//       const { count: propertiesCount } = await supabase
//         .from("properties")
//         .select("*", { count: "exact" });

//       const { count: conversionsCount } = await supabase
//         .from("conversions")
//         .select("*", { count: "exact" });

//       setStats([
//         {
//           title: "Total Enquiries",
//           value: enquiriesCount || 0,
//           icon: Users,
//           // trend: { value: "12% from last month", isPositive: true },
//         },
//         {
//           title: "Pending Reminders",
//           value: pendingReminders || 0,
//           icon: Bell,
//         },
//         {
//           title: "Properties Listed",
//           value: propertiesCount || 0,
//           icon: Home,
//           // trend: { value: "5% from last month", isPositive: true },
//         },
//         {
//           title: "Conversions",
//           value: conversionsCount || 0,
//           icon: TrendingUp,
//           // trend: { value: "3% from last month", isPositive: false },
//         },
//       ]);

//       setLoading(false);
//     }

//     fetchStats();
//   }, []);

//   if (loading) return <p className="p-4">Loading stats...</p>;

//   return (
//     <div className="space-y-6 p-4">
//       <div>
//         <h2 className="text-2xl md:text-3xl font-bold text-primary">
//           Dashboard
//         </h2>
//         <p className="text-muted-foreground">
//           Welcome back! Here's your overview
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat, index) => (
//           <StatCard
//             key={index}
//             title={stat.title}
//             value={stat.value}
//             icon={stat.icon}
//             trend={stat.trend}
//           />
//         ))}
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <QuickActionCard
//             title="Browse Properties"
//             description="View available properties for sale"
//             icon={Home}
//             onClick={() => setLocation("/properties")}
//           />
//           <QuickActionCard
//             title="Add Enquiry"
//             description="Create a new lead or enquiry"
//             icon={Users}
//             onClick={() => setLocation("/enquiries")}
//           />
//           <QuickActionCard
//             title="Set Reminder"
//             description="Schedule a follow-up reminder"
//             icon={Bell}
//             onClick={() => setLocation("/reminders")}
//           />
//           <QuickActionCard
//             title="List Property"
//             description="Add a new property listing"
//             icon={PlusCircle}
//             onClick={() => setLocation("/properties")}
//           />
//           <QuickActionCard
//             title="View Reports"
//             description="Check productivity analytics"
//             icon={BarChart3}
//             onClick={() => setLocation("/reports")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import StatCard from "@/components/StatCard";
import QuickActionCard from "@/components/QuickActionCard";
import {
  Users,
  Bell,
  Home,
  TrendingUp,
  PlusCircle,
  BarChart3,
} from "lucide-react";
import { supabase } from "../supabaseClient";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

interface Stat {
  title: string;
  value: number | string;
  icon: React.ElementType;
}

interface ChartData {
  month: string;
  enquiries: number;
  properties: number;
  conversions: number;
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
 const [stats, setStats] = useState<Stat[]>([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  // 🔹 1. Fetch user session (redirect if not logged in)
  useEffect(() => {
    async function fetchUser() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) console.error("Error fetching session:", error.message);
      if (!session?.user) setLocation("/login");
    }
    fetchUser();
  }, [setLocation]);

  // 🔹 2. Fetch totals for stat cards
  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      const { count: enquiriesCount } = await supabase
        .from("enquiries")
        .select("*", { count: "exact" });
      const { count: remindersCount } = await supabase
        .from("reminders")
        .select("*", { count: "exact" })
        .eq("status", "pending");
      const { count: propertiesCount } = await supabase
        .from("properties")
        .select("*", { count: "exact" });
      const { count: conversionsCount } = await supabase
        .from("conversions")
        .select("*", { count: "exact" });

      setStats([
        { title: "Total Enquiries", value: enquiriesCount || 0, icon: Users },
        { title: "Pending Reminders", value: remindersCount || 0, icon: Bell },
        { title: "Properties Listed", value: propertiesCount || 0, icon: Home },
        { title: "Conversions", value: conversionsCount || 0, icon: TrendingUp },
      ]);
      setLoading(false);
    }
    fetchStats();
  }, []);

  // 🔹 3. Fetch monthly trend data from Supabase
  useEffect(() => {
    async function fetchMonthlyTrend() {
      // Helper: aggregate counts by month
      const countByMonth = (rows) => {
        const counts = new Array(12).fill(0);
        rows.forEach((r) => {
          if (!r.created_at) return;
          const month = new Date(r.created_at).getMonth();
          counts[month]++;
        });
        return counts;
      };

      const [enquiries, properties, conversions] = await Promise.all([
        supabase.from("enquiries").select("created_at"),
        supabase.from("properties").select("created_at"),
        supabase.from("conversions").select("created_at"),
      ]);

      const enquiryCounts = countByMonth(enquiries.data || []);
      const propertyCounts = countByMonth(properties.data || []);
      const conversionCounts = countByMonth(conversions.data || []);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const chartData = months.map((m, i) => ({
        month: m,
        Enquiries: enquiryCounts[i],
        Properties: propertyCounts[i],
        Conversions: conversionCounts[i],
      }));

      setMonthlyData(chartData);
    }

    fetchMonthlyTrend();
  }, []);

  if (loading) return <p className="p-4">Loading dashboard...</p>;

  // 🔹 4. Pie Chart — based on live stats
  const pieData = stats.map((s) => ({
    name: s.title,
    value: typeof s.value === "number" ? s.value : 0,
  }));
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="space-y-8 p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">Dashboard</h2>
      <p className="text-muted-foreground mb-4">Welcome back! Here's your overview</p>

      {/* 🟩 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      {/* 🟦 CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PIE CHART */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold mb-4 text-center">Overall Summary</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* LINE CHART (Dynamic Monthly Trend) */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-center">Monthly Trends</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Enquiries" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="Properties" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="Conversions" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
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
