import BottomNav from "../BottomNav";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function BottomNavExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-background pb-16">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Bottom Navigation Example</h1>
          <p className="text-muted-foreground">Click the navigation items at the bottom</p>
        </div>
        <BottomNav />
      </div>
    </QueryClientProvider>
  );
}
