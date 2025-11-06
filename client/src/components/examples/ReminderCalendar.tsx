import ReminderCalendar from "../ReminderCalendar";

const mockReminders = [
  { id: "1", date: "2025-11-15", title: "Follow up with John", time: "10:00 AM" },
  { id: "2", date: "2025-11-15", title: "Property viewing", time: "2:00 PM" },
  { id: "3", date: "2025-11-20", title: "Client meeting", time: "11:00 AM" },
];

export default function ReminderCalendarExample() {
  return (
    <div className="p-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <ReminderCalendar
          reminders={mockReminders}
          onAddReminder={() => console.log("Add reminder clicked")}
          onSelectDate={(date) => console.log("Selected date:", date)}
        />
      </div>
    </div>
  );
}
