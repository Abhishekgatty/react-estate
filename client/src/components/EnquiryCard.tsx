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

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { supabase } from "@/supabaseClient";
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
//   user_id?: string | null;
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
//   user_id,
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

//   // top of component
// const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

// useEffect(() => {
//   const loadUser = async () => {
//     const { data } = await supabase.auth.getUser();
//     setLoggedInUserId(data?.user?.id ?? null);
//   };
//   loadUser();
// }, []);

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
//                 <Badge variant={type === "buy" ? "default" : "default"}>
//                   {(type || listing_type)?.toUpperCase()}
//                 </Badge>
//               </div>
//             </div>
//            <div className="flex gap-1 shrink-0">
//   {loggedInUserId && loggedInUserId === user_id ? (
//     <>
//       <Button
//         size="icon"
//         variant="ghost"
//         onClick={() => onEdit(id)}
//         data-testid={`button-edit-${id}`}
//       >
//         <Pencil className="h-4 w-4" />
//       </Button>
//       <Button
//         size="icon"
//         variant="ghost"
//         onClick={() => onDelete(id)}
//       >
//         <Trash2 className="h-4 w-4" />
//       </Button>
//     </>
//   ) : null}
// </div>

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




// import { Button } from "@/components/ui/button";
// import { supabase } from "@/supabaseClient";
// import { useState, useEffect } from "react";
// import { Phone, Pencil, Trash2 } from "lucide-react";

// interface EnquiryRowProps {
//   id: string;
//   user_id?: string | null;
//   name: string;
//   listing_type: string;
//   mobile_number: string;
//   location: string;
//   budget?: string;
//   type: "buy" | "sell";
//   selling_rate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
//   onCall: (mobile: string) => void;
// }

// export default function EnquiryRow({
//   id,
//   user_id,
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
// }: EnquiryRowProps) {
//   const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const loadUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       setLoggedInUserId(data?.user?.id ?? null);
//     };
//     loadUser();
//   }, []);

//   return (
//     <div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-300 text-sm">
//       {/* Name */}
//       <div className="col-span-2 font-medium truncate border-r border-gray-300 px-2">
//         {name}
//       </div>

//       {/* Type / Listing */}
//       <div className="col-span-1 truncate border-r border-gray-300 px-2">
//         {(type || listing_type).toUpperCase()}
//       </div>

//       {/* Mobile */}
//       <div className="col-span-2 truncate border-r border-gray-300 px-2">
//         {mobile_number}
//       </div>

//       {/* Location */}
//       <div className="col-span-2 truncate border-r border-gray-300 px-2">
//         {location}
//       </div>

//       {/* Budget / Selling Rate */}
//       <div className="col-span-1 truncate border-r border-gray-300 px-2">
//         {listing_type === "buy" ? budget || "-" : selling_rate || "-"}
//       </div>

//       {/* Date */}
//       <div className="col-span-2 truncate border-r border-gray-300 px-2">
//         {date}
//       </div>

//       {/* Referred By */}
//       <div className="col-span-1 truncate border-r border-gray-300 px-2">
//         {referred_by || "-"}
//       </div>

//       {/* Actions */}
//       <div className="col-span-1 flex gap-1 justify-end px-2">
//         {loggedInUserId && loggedInUserId === user_id && (
//           <>
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={() => onEdit(id)}
//               title="Edit"
//             >
//               <Pencil className="h-4 w-4" />
//             </Button>
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={() => onDelete(id)}
//               title="Delete"
//             >
//               <Trash2 className="h-4 w-4" />
//             </Button>
//           </>
//         )}
//         <Button
//           size="icon"
//           variant="outline"
//           onClick={() => onCall(mobile_number)}
//           title="Call"
//         >
//           <Phone className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }




import { Button } from "@/components/ui/button";
import { supabase } from "@/supabaseClient";
import { useState, useEffect } from "react";
import { Phone, Pencil, Trash2 } from "lucide-react";

interface EnquiryRowProps {
  id: string;
  user_id?: string | null;
  name: string;
  listing_type: string;
  mobile_number: string;
  location: string;
  budget?: string;
  type: "buy" | "sell";
  selling_rate?: string;
  date: string;
  referred_by?: string;
  remarks?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCall: (mobile: string) => void;
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
  remarks,
  onEdit,
  onDelete,
  onCall,
}: EnquiryRowProps) {
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      setLoggedInUserId(data?.user?.id ?? null);
    };
    loadUser();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-300 text-sm">
      {/* Name */}
      <div className="col-span-2 font-medium truncate border-r border-gray-300 px-2">
        {name}
      </div>

      {/* Type / Listing */}
      <div className="col-span-1 truncate border-r border-gray-300 px-2">
        {(type || listing_type).toUpperCase()}
      </div>

      {/* Mobile */}
      <div className="col-span-2 truncate border-r border-gray-300 px-2">
        {mobile_number}
      </div>

      {/* Location */}
      <div className="col-span-2 truncate border-r border-gray-300 px-2">
        {location}
      </div>

      {/* Budget / Selling Rate */}
      <div className="col-span-1 truncate border-r border-gray-300 px-2">
        {listing_type === "buy" ? budget || "-" : selling_rate || "-"}
      </div>

      {/* Date */}
      <div className="col-span-2 truncate border-r border-gray-300 px-2">
        {date}
      </div>

      {/* Referred By */}
      <div className="col-span-1 truncate border-r border-gray-300 px-2">
        {referred_by || "-"}
      </div>

      {/* Actions */}
      <div className="col-span-1 flex gap-1 justify-end px-2">
        {loggedInUserId && loggedInUserId === user_id && (
          <>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onEdit(id)}
              title="Edit"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(id)}
              title="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button
          size="icon"
          variant="outline"
          onClick={() => onCall(mobile_number)}
          title="Call"
        >
          <Phone className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}


// import { useState, useEffect, useRef } from "react";
// import { supabase } from "@/supabaseClient";
// import EnquiryRow from "./EnquiryRow";

// export default function EnquiriesPage() {
//   const [enquiries, setEnquiries] = useState<any[]>([]);
//   const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
//   const fetchedRef = useRef(false); // ✅ prevent multiple fetches
  


//     useEffect(() => {
//     const loadUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       setLoggedInUserId(data?.user?.id ?? null);
//     };
//     loadUser();
//   }, []); 

//   useEffect(() => {
//     if (fetchedRef.current) return;
//     fetchedRef.current = true;

//     const fetchEnquiries = async () => {
//       try {
//         const { data: userData } = await supabase.auth.getUser();
//         const userId = userData?.user?.id ?? null;
//         setLoggedInUserId(userId);

//         if (!userId) return;

//         const { data, error } = await supabase
//           .from("enquiries")
//           .select("*")
//           .eq("user_id", userId)
//           .order("created_at", { ascending: false });

//         if (error) console.error(error);
//         else setEnquiries(data || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchEnquiries();
//   }, [loggedInUserId]); // ✅ empty dependency ensures runs only once

//   const handleEdit = (id: string) => console.log("Edit", id);
//   const handleDelete = (id: string) => console.log("Delete", id);
//   const handleCall = (mobile: string) => console.log("Call", mobile);

//   return (
//     <div className="border border-gray-300 rounded-md overflow-hidden">
//       <div className="grid grid-cols-12 gap-2 items-center py-2 bg-gray-100 text-sm font-semibold border-b border-gray-300 sticky top-0 z-10">
//         <div className="col-span-2 px-2 border-r border-gray-300">Name</div>
//         <div className="col-span-1 px-2 border-r border-gray-300">Type / Listing</div>
//         <div className="col-span-2 px-2 border-r border-gray-300">Mobile</div>
//         <div className="col-span-2 px-2 border-r border-gray-300">Location</div>
//         <div className="col-span-1 px-2 border-r border-gray-300">Budget / Rate</div>
//         <div className="col-span-2 px-2 border-r border-gray-300">Date</div>
//         <div className="col-span-1 px-2 border-r border-gray-300">Referred By</div>
//         <div className="col-span-1 px-2 text-right">Actions</div>
//       </div>

//       {enquiries.map((enquiry) => (
//         <EnquiryRow
//           key={enquiry.id}
//           {...enquiry}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onCall={handleCall}
//           loggedInUserId={loggedInUserId}
//         />
//       ))}
//     </div>
//   );
// }
