import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

interface ChartData {
  name: string;
  enquiries: number;
  followUps: number;
  conversions: number;
}

interface ProductivityChartProps {
  data: ChartData[];
  type?: "bar" | "line";
}

export default function ProductivityChart({ data, type = "bar" }: ProductivityChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Legend />
              <Bar dataKey="enquiries" fill="hsl(var(--chart-1))" name="Enquiries" />
              <Bar dataKey="followUps" fill="hsl(var(--chart-2))" name="Follow-ups" />
              <Bar dataKey="conversions" fill="hsl(var(--chart-3))" name="Conversions" />
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="enquiries" stroke="hsl(var(--chart-1))" name="Enquiries" />
              <Line type="monotone" dataKey="followUps" stroke="hsl(var(--chart-2))" name="Follow-ups" />
              <Line type="monotone" dataKey="conversions" stroke="hsl(var(--chart-3))" name="Conversions" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
