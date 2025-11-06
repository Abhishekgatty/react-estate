import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Properties from "@/pages/Properties";
import Enquiries from "@/pages/Enquiries";
import Reminders from "@/pages/Reminders";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";

import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </Route>
      <Route path="/properties">
        <AppLayout>
          <Properties />
        </AppLayout>
      </Route>
      <Route path="/enquiries">
        <AppLayout>
          <Enquiries />
        </AppLayout>
      </Route>
      <Route path="/reminders">
        <AppLayout>
          <Reminders />
        </AppLayout>
      </Route>
      <Route path="/reports">
        <AppLayout>
          <Reports />
        </AppLayout>
      </Route>
      <Route path="/settings">
        <AppLayout>
          <Settings />
        </AppLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppHeader
        title="Real Estate CRM"
        notificationCount={3}
        onNotificationClick={() => console.log("Notifications clicked")}
        onProfileClick={() => window.location.href = "/settings"}
      />
      <main className="flex-1 overflow-auto pb-20 md:pb-6">
        <div className="container mx-auto p-4 md:p-6">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
