import ProductivityChart from "../ProductivityChart";

const mockData = [
  { name: "Jan", enquiries: 45, followUps: 38, conversions: 12 },
  { name: "Feb", enquiries: 52, followUps: 45, conversions: 15 },
  { name: "Mar", enquiries: 61, followUps: 52, conversions: 18 },
  { name: "Apr", enquiries: 48, followUps: 41, conversions: 14 },
  { name: "May", enquiries: 70, followUps: 60, conversions: 22 },
  { name: "Jun", enquiries: 65, followUps: 55, conversions: 20 },
];

export default function ProductivityChartExample() {
  return (
    <div className="p-6 bg-background space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProductivityChart data={mockData} type="bar" />
        <ProductivityChart data={mockData} type="line" />
      </div>
    </div>
  );
}
