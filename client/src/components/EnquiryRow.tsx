import { Button } from "@/components/ui/button";
import { Phone, Pencil, Trash2 } from "lucide-react";

interface EnquiryRowProps {
  id: string;
  user_id?: string | null;
  name: string;
  listing_type?: string;
  type?: string;
  mobile_number?: string;
  location?: string;
  budget?: string;
  selling_rate?: string;
  date?: string;
  referred_by?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCall: (mobile: string) => void;
  loggedInUserId?: string | null;
}

export default function EnquiryRow({
  id,
  user_id,
  name,
  mobile_number,
  location,
  type,
  budget,
  selling_rate,
  date,
  referred_by,
  listing_type,
  onEdit,
  onDelete,
  onCall,
  loggedInUserId,
}: EnquiryRowProps) {
  return (
    <div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-300 text-sm">
      <div className="col-span-2 font-medium truncate border-r border-gray-300 px-2">{name}</div>
      <div className="col-span-1 truncate border-r border-gray-300 px-2">{(type || listing_type)?.toUpperCase()}</div>
      <div className="col-span-2 truncate border-r border-gray-300 px-2">{mobile_number}</div>
      <div className="col-span-2 truncate border-r border-gray-300 px-2">{location}</div>
      <div className="col-span-1 truncate border-r border-gray-300 px-2">{listing_type === "buy" ? budget || "-" : selling_rate || "-"}</div>
      <div className="col-span-2 truncate border-r border-gray-300 px-2">{date}</div>
      <div className="col-span-1 truncate border-r border-gray-300 px-2">{referred_by || "-"}</div>
      <div className="col-span-1 flex gap-1 justify-end px-2">
        {loggedInUserId && loggedInUserId === user_id && (
          <>
            <Button size="icon" variant="ghost" onClick={() => onEdit(id)} title="Edit">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => onDelete(id)} title="Delete">
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button size="icon" variant="outline" onClick={() => onCall(mobile_number!)} title="Call">
          <Phone className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
