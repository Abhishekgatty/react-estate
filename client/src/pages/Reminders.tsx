import { useState } from "react";
import { Button } from "@/components/ui/button";
import ReminderCalendar from "@/components/ReminderCalendar";
import ReminderCard from "@/components/ReminderCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

const mockReminders = [
  {
    id: "1",
    title: "Follow up on property viewing for Downtown Apartment",
    clientName: "John Smith",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    status: "pending" as const
  },
  {
    id: "2",
    title: "Send contract documents",
    clientName: "Sarah Johnson",
    date: "Nov 14, 2025",
    time: "2:00 PM",
    status: "overdue" as const
  },
  {
    id: "3",
    title: "Client meeting scheduled",
    clientName: "Mike Davis",
    date: "Nov 12, 2025",
    time: "11:00 AM",
    status: "completed" as const
  },
  {
    id: "4",
    title: "Property showing at Beverly Hills",
    clientName: "Emma Wilson",
    date: "Nov 16, 2025",
    time: "3:00 PM",
    status: "pending" as const
  }
];

const calendarReminders = [
  { id: "1", date: "2025-11-15", title: "Follow up with John", time: "10:00 AM" },
  { id: "2", date: "2025-11-15", title: "Property viewing", time: "2:00 PM" },
  { id: "3", date: "2025-11-20", title: "Client meeting", time: "11:00 AM" },
];

export default function Reminders() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    clientName: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reminder added:", formData);
    setShowAddForm(false);
    setFormData({ title: "", clientName: "", date: "", time: "", notes: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Reminders</h2>
          <p className="text-muted-foreground">Track your follow-ups and appointments</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} data-testid="button-add-reminder">
          <Plus className="h-4 w-4 mr-2" />
          Add Reminder
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ReminderCalendar
            reminders={calendarReminders}
            onAddReminder={() => setShowAddForm(true)}
            onSelectDate={(date) => console.log("Selected date:", date)}
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Upcoming Reminders</h3>
          {mockReminders
            .filter(r => r.status !== "completed")
            .map(reminder => (
              <ReminderCard
                key={reminder.id}
                {...reminder}
                onComplete={(id) => console.log("Complete:", id)}
                onEdit={(id) => console.log("Edit:", id)}
                onDelete={(id) => console.log("Delete:", id)}
              />
            ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">All Reminders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockReminders.map(reminder => (
            <ReminderCard
              key={reminder.id}
              {...reminder}
              onComplete={(id) => console.log("Complete:", id)}
              onEdit={(id) => console.log("Edit:", id)}
              onDelete={(id) => console.log("Delete:", id)}
            />
          ))}
        </div>
      </div>

      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Reminder</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddReminder} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                data-testid="input-title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name *</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                required
                data-testid="input-client-name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  data-testid="input-date"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time *</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  data-testid="input-time"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                data-testid="input-notes"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowAddForm(false)}
                className="flex-1"
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1" data-testid="button-submit">
                Add Reminder
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
