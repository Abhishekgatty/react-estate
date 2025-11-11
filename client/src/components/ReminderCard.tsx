import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Check, Pencil, Trash2 } from "lucide-react";
import { supabase } from "../supabaseClient";
interface ReminderCardProps {
  id: string;
  title: string;
  clientName: string;
  date: string;
  time: string;
  status: "pending" | "completed" | "overdue";
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ReminderCard({
  id,
  title,
  clientName,
  date,
  time,
  status,
  onComplete,
  onEdit,
  onDelete
}: ReminderCardProps) {
  const statusColors = {
    pending: "default",
    completed: "secondary",
    overdue: "destructive"
  } as const;




  return (
    <Card className={status === "completed" ? "opacity-60" : ""}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-start gap-2">
              <h3 className="font-semibold text-base line-clamp-2" data-testid={`reminder-title-${id}`}>
                {title}
              </h3>
              <Badge variant={statusColors[status]} className="shrink-0">
                {status}
              </Badge>
            </div>
            
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-3 w-3" />
                <span>{clientName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>{date} at {time}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 shrink-0">
            {status !== "completed" && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onComplete(id)}
                data-testid={`button-complete-${id}`}
              >
                <Check className="h-4 w-4" />
              </Button>
            )}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onEdit(id)}
              data-testid={`button-edit-${id}`}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(id)}
              data-testid={`button-delete-${id}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
