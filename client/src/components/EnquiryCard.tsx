// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Phone,
//   MapPin,
//   DollarSign,
//   Calendar,
//   User,
//   Pencil,
//   Trash2,
// } from "lucide-react";

// interface EnquiryCardProps {
//   id: string;
//   name: string;
//   listing_type: string;
//   mobile_number: string;
//   location: string;
//   budget?: string;
//   type: "buy" | "sell";
//   selling_rate?: string;
//   sellingRate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
//   onCall: (mobile: string) => void;
// }

// export default function EnquiryCard({
//   id,
//   name,
//   mobile_number,
//   location,
//   type,
//   budget,
//   selling_rate,
//   date,
//   referred_by,
//   listing_type,
//   remarks,
//   onEdit,
//   onDelete,
//   onCall,
// }: EnquiryCardProps) {
//   return (
//     <Card>
//       <CardContent className="p-4">
//         <div className="space-y-3">
//           <div className="flex items-start justify-between gap-4">
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center gap-2 mb-2">
//                 <h3
//                   className="font-semibold text-base"
//                   data-testid={`enquiry-name-${id}`}
//                 >
//                   {name}
//                 </h3>
//                 <Badge variant={type === "buy" ? "default" : "secondary"}>
//                   {(type || listing_type)?.toUpperCase()}
//                 </Badge>
//               </div>
//             </div>
//             <div className="flex gap-1 shrink-0">
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => onEdit(id)}
//                 data-testid={`button-edit-${id}`}
//               >
//                 <Pencil className="h-4 w-4" />
//               </Button>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => onDelete(id)}
//                 data-testid={`button-delete-${id}`}
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Phone className="h-3 w-3 shrink-0" />
//               <span className="truncate">{mobile_number}</span>
//             </div>
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <MapPin className="h-3 w-3 shrink-0" />
//               <span className="truncate">{location}</span>
//             </div>
//             {(budget || selling_rate) && (
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <DollarSign className="h-3 w-3 shrink-0" />
//                 <span className="truncate">
//                   {type === "buy" ? budget : selling_rate}
//                 </span>
//               </div>
//             )}

//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Calendar className="h-3 w-3 shrink-0" />
//               <span>{date}</span>
//             </div>
//             {referred_by && (
//               <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
//                 <User className="h-3 w-3 shrink-0" />
//                 <span className="truncate">Referred by {referred_by}</span>
//               </div>
//             )}
//           </div>

//           {remarks && (
//             <p className="text-sm text-muted-foreground line-clamp-2">
//               {remarks}
//             </p>
//           )}

//           <Button
//             onClick={() => onCall(mobile_number)}
//             className="w-full"
//             size="sm"
//             data-testid={`button-call-${id}`}
//           >
//             <Phone className="h-4 w-4 mr-2" />
//             Call Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }





import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  User,
  Pencil,
  Trash2,
} from "lucide-react";

interface EnquiryCardProps {
  id: string;
  name: string;
  listing_type: string;
  mobile_number: string;
  location: string;
  budget?: string;
  type: "buy" | "sell";
  selling_rate?: string;
  sellingRate?: string;
  date: string;
  referred_by?: string;
  remarks?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCall: (mobile: string) => void;
}

export default function EnquiryCard({
  id,
  name,
  mobile_number,
  location,
  type,
  budget,
  selling_rate,
  date,
  referred_by,
  listing_type,
  remarks,
  onEdit,
  onDelete,
  onCall,
}: EnquiryCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3
                  className="font-semibold text-base"
                  data-testid={`enquiry-name-${id}`}
                >
                  {name}
                </h3>
                <Badge variant={type === "buy" ? "default" : "default"}>
                  {(type || listing_type)?.toUpperCase()}
                </Badge>
              </div>
            </div>
            <div className="flex gap-1 shrink-0">
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
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-3 w-3 shrink-0" />
              <span className="truncate">{mobile_number}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            {(budget || selling_rate) && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-3 w-3 shrink-0" />
                <span className="truncate">
                  {type === "buy" ? budget : selling_rate}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-3 w-3 shrink-0" />
              <span>{date}</span>
            </div>
            {referred_by && (
              <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
                <User className="h-3 w-3 shrink-0" />
                <span className="truncate">Referred by {referred_by}</span>
              </div>
            )}
          </div>

          {remarks && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {remarks}
            </p>
          )}

          <Button
            onClick={() => onCall(mobile_number)}
            className="w-full"
            size="sm"
            data-testid={`button-call-${id}`}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
