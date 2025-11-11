import StatCard from "@/components/StatCard";
import ProductivityChart from "@/components/ProductivityChart";
import { Users, CheckCircle, TrendingUp, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockChartData = [
  { name: "Jan", enquiries: 45, followUps: 38, conversions: 12 },
  { name: "Feb", enquiries: 52, followUps: 45, conversions: 15 },
  { name: "Mar", enquiries: 61, followUps: 52, conversions: 18 },
  { name: "Apr", enquiries: 48, followUps: 41, conversions: 14 },
  { name: "May", enquiries: 70, followUps: 60, conversions: 22 },
  { name: "Jun", enquiries: 65, followUps: 55, conversions: 20 },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Productivity Reports</h2>
          <p className="text-muted-foreground">Track your performance and analytics</p>
        </div>
        <Select defaultValue="6months">
          <SelectTrigger className="w-40" data-testid="select-period">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">Last Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="1year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Leads"
          value="341"
          icon={Users}
          trend={{ value: "18% from last period", isPositive: true }}
        />
        <StatCard
          title="Follow-ups"
          value="291"
          icon={Phone}
          trend={{ value: "15% from last period", isPositive: true }}
        />
        <StatCard
          title="Conversions"
          value="101"
          icon={CheckCircle}
          trend={{ value: "8% from last period", isPositive: true }}
        />
        <StatCard
          title="Conversion Rate"
          value="29.6%"
          icon={TrendingUp}
          trend={{ value: "2.3% from last period", isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductivityChart data={mockChartData} type="bar" />
        <ProductivityChart data={mockChartData} type="line" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-md bg-muted/50">
              <div>
                <p className="font-medium">Best Performing Month</p>
                <p className="text-sm text-muted-foreground">Highest conversion rate</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">May 2025</p>
                <p className="text-sm text-green-600">31.4% conversion</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-md bg-muted/50">
              <div>
                <p className="font-medium">Most Active Period</p>
                <p className="text-sm text-muted-foreground">Highest enquiry volume</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">May 2025</p>
                <p className="text-sm text-primary">70 enquiries</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-md bg-muted/50">
              <div>
                <p className="font-medium">Average Response Time</p>
                <p className="text-sm text-muted-foreground">Time to first follow-up</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">2.4 hours</p>
                <p className="text-sm text-green-600">↓ 0.6 hrs improved</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
