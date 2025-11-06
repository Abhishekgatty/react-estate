import ReminderCard from "../ReminderCard";

export default function ReminderCardExample() {
  return (
    <div className="p-6 bg-background space-y-4">
      <div className="max-w-2xl mx-auto space-y-4">
        <ReminderCard
          id="1"
          title="Follow up on property viewing for Downtown Apartment"
          clientName="John Smith"
          date="Nov 15, 2025"
          time="10:00 AM"
          status="pending"
          onComplete={(id) => console.log("Complete:", id)}
          onEdit={(id) => console.log("Edit:", id)}
          onDelete={(id) => console.log("Delete:", id)}
        />
        <ReminderCard
          id="2"
          title="Send contract documents"
          clientName="Sarah Johnson"
          date="Nov 14, 2025"
          time="2:00 PM"
          status="overdue"
          onComplete={(id) => console.log("Complete:", id)}
          onEdit={(id) => console.log("Edit:", id)}
          onDelete={(id) => console.log("Delete:", id)}
        />
        <ReminderCard
          id="3"
          title="Client meeting scheduled"
          clientName="Mike Davis"
          date="Nov 12, 2025"
          time="11:00 AM"
          status="completed"
          onComplete={(id) => console.log("Complete:", id)}
          onEdit={(id) => console.log("Edit:", id)}
          onDelete={(id) => console.log("Delete:", id)}
        />
      </div>
    </div>
  );
}
