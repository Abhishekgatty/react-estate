import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Check, Pencil, Trash2, RotateCw } from "lucide-react";

interface ReminderCardProps {
  id: string;
  title: string;
  client_name: string;
  date: string;
  time: string;
  status: "pending" | "completed" | "overdue";
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  updatingId?: string | null; // ✅ added to handle loading state
}

export default function ReminderCard({
  id,
  title,
  client_name,
  date,
  time,
  status,
  onComplete,
  onEdit,
  onDelete,
  updatingId,
}: ReminderCardProps) {
  const statusColors = {
    pending: "default",
    completed: "secondary",
    overdue: "destructive",
  } as const;

  const isUpdating = updatingId === id;

function convertTimeToIST(time: string) {
  if (!time) return "—";

  // Accept both "HH:mm" and "HH:mm:ss"
  const [h, m] = time.split(":");

  if (!h || !m) return "—";

  let hours = parseInt(h, 10);
  let minutes = parseInt(m, 10);

  if (isNaN(hours) || isNaN(minutes)) return "—";

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}





  return (
    <Card className={status === "completed" ? "opacity-70" : ""}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          {/* Info Section */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-start gap-2">
              <h3
                className="font-semibold text-base line-clamp-2"
                data-testid={`reminder-title-${id}`}
              >
                {title}
              </h3>
              <Badge variant={statusColors[status]} className="shrink-0">
                {status}
              </Badge>
            </div>

            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-3 w-3" />
                <span>{client_name}</span>
              </div>
  <div className="flex items-center gap-2">
  <Clock className="h-3 w-3" />
  <span>
    {(() => {
      const converted = convertTimeToIST(time);
      console.log("Converted Time =", converted);
      console.log("Original Time =", time);
      return `${date} at ${converted}`;
    })()}
  </span>
</div>



            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1 shrink-0">
            {/* ✅ Status Toggle Button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onComplete(id)}
              disabled={isUpdating}
              title={
                status === "completed" ? "Mark as Pending" : "Mark as Completed"
              }
              data-testid={`button-complete-${id}`}
            >
              {isUpdating ? (
                <RotateCw className="h-4 w-4 animate-spin" />
              ) : status === "completed" ? (
                <RotateCw className="h-4 w-4 text-blue-500" />
              ) : (
                <Check className="h-4 w-4 text-green-600" />
              )}
            </Button>

            {/* Edit */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onEdit(id)}
              data-testid={`button-edit-${id}`}
            >
              <Pencil className="h-4 w-4" />
            </Button>

            {/* Delete */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(id)}
              data-testid={`button-delete-${id}`}
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
