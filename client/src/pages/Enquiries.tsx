// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import EnquiryCard from "@/components/EnquiryCard";
// import EnquiryForm from "@/components/EnquiryForm";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Plus } from "lucide-react";
// import { supabase } from "@/supabaseClient";

// interface Enquiry {
//   id: string;
//   user_id?: string;
//   name: string;
//   mobile: string;
//   location: string;
//   type: "buy" | "sell";
//   budget?: string;
//   selling_rate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
// }

// const mockEnquiries = [
//   {
//     id: "1",
//     name: "John Smith",
//     mobile: "+1 (555) 123-4567",
//     location: "Beverly Hills, CA",
//     type: "buy" as const,
//     budget: "$1,500,000",
//     date: "Nov 10, 2025",
//     referredBy: "Sarah Johnson",
//     remarks: "Looking for a luxury villa with pool"
//   },
//   {
//     id: "2",
//     name: "Mike Davis",
//     mobile: "+1 (555) 987-6543",
//     location: "Manhattan, NY",
//     type: "sell" as const,
//     sellingRate: "$850,000",
//     date: "Nov 12, 2025",
//     remarks: "Downtown apartment, urgent sale"
//   },
//   {
//     id: "3",
//     name: "Emma Wilson",
//     mobile: "+1 (555) 456-7890",
//     location: "Austin, TX",
//     type: "buy" as const,
//     budget: "$600,000 - $700,000",
//     date: "Nov 14, 2025",
//     referredBy: "Tom Anderson",
//     remarks: "Family house with garden"
//   },
//   {
//     id: "4",
//     name: "Robert Brown",
//     mobile: "+1 (555) 234-5678",
//     location: "Miami, FL",
//     type: "sell" as const,
//     sellingRate: "$1,200,000",
//     date: "Nov 13, 2025",
//     remarks: "Beachfront condo"
//   }
// ];

// export default function Enquiries() {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [activeTab, setActiveTab] = useState("all");

//   const handleAddEnquiry = (data: any) => {
//     console.log("Enquiry added:", data);
//     setShowAddForm(false);
//   };

//   const buyEnquiries = mockEnquiries.filter(e => e.type === "buy");
//   const sellEnquiries = mockEnquiries.filter(e => e.type === "sell");

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between gap-4 flex-wrap">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-primary">Enquiries</h2>
//           <p className="text-muted-foreground">Manage your leads and enquiries</p>
//         </div>
//         <Button onClick={() => setShowAddForm(true)} data-testid="button-add-enquiry">
//           <Plus className="h-4 w-4 mr-2" />
//           Add Enquiry
//         </Button>
//       </div>

//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-3 max-w-md">
//           <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
//           <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
//           <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
//         </TabsList>

//         <TabsContent value="all" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {mockEnquiries.map(enquiry => (
//               <EnquiryCard
//                 key={enquiry.id}
//                 {...enquiry}
//                 onEdit={(id) => console.log("Edit enquiry:", id)}
//                 onDelete={(id) => console.log("Delete enquiry:", id)}
//                 onCall={(mobile) => console.log("Call:", mobile)}
//               />
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="buy" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {buyEnquiries.map(enquiry => (
//               <EnquiryCard
//                 key={enquiry.id}
//                 {...enquiry}
//                 onEdit={(id) => console.log("Edit enquiry:", id)}
//                 onDelete={(id) => console.log("Delete enquiry:", id)}
//                 onCall={(mobile) => console.log("Call:", mobile)}
//               />
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="sell" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {sellEnquiries.map(enquiry => (
//               <EnquiryCard
//                 key={enquiry.id}
//                 {...enquiry}
//                 onEdit={(id) => console.log("Edit enquiry:", id)}
//                 onDelete={(id) => console.log("Delete enquiry:", id)}
//                 onCall={(mobile) => console.log("Call:", mobile)}
//               />
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>

//       <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
//         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Add New Enquiry</DialogTitle>
//           </DialogHeader>
//           <EnquiryForm
//             onSubmit={handleAddEnquiry}
//             onCancel={() => setShowAddForm(false)}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// after connect supabase




import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EnquiryCard from "@/components/EnquiryCard";
import EnquiryForm from "@/components/EnquiryForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { supabase } from "@/supabaseClient";

interface Enquiry {
  id: string;
  user_id?: string;
  name: string;
  mobile_number: string;
  listing_type: string;
  location: string;
  type: "buy" | "sell";
  budget?: string;
  selling_rate?: string;
  date: string;
  referred_by?: string;
  remarks?: string;
}





export default function Enquiries() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
const [showEditForm, setShowEditForm] = useState(false);
const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);


    const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching enquiries:", error.message);
      } else if (data) {
        setEnquiries(data as Enquiry[]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

   const handleAddEnquiry = (newEnquiry: any) => {
    console.log("Enquiry added:", newEnquiry);
    // Re-fetch enquiries to include the new one
    fetchEnquiries();
    setShowAddForm(false);
  };

const handleEdit = (id: string) => {
  console.log("Editing enquiry ID:", id);
  console.log("Available enquiry IDs:", enquiries.map(e => e.id));

  const enquiry = enquiries.find((e) => e.id === id);
  console.log("Matched enquiry:", enquiry);

  if (enquiry) {
    setSelectedEnquiry(enquiry);
    setShowEditForm(true);
  } else {
    console.warn("No enquiry found for this ID!");
  }
};





const handleDelete = async (id: string) => {
  const confirmDelete = confirm("Are you sure you want to delete this enquiry?");
  if (!confirmDelete) {
    console.log("Deletion cancelled by user");
    return;
  }

  console.log("Attempting to delete enquiry with ID:", id);

  const { error } = await supabase.from("enquiries").delete().eq("id", id);

  if (error) {
    console.error("Failed to delete enquiry:", error.message);
  } else {
    setEnquiries(prev => prev.filter(e => e.id !== id));
    console.log("Enquiry deleted successfully!");
  }
};


const handleUpdateEnquiry = async (updatedData: any) => {
  if (!selectedEnquiry) return;

  const { error } = await supabase
    .from("enquiries")
    .update(updatedData)
    .eq("id", selectedEnquiry.id);

  if (error) {
    alert("Failed to update enquiry: " + error.message);
  } else {
    alert("Enquiry updated successfully!");
    fetchEnquiries();
    setShowEditForm(false);
  }
};


const filteredBuyEnquiries = enquiries.filter(e => e.listing_type === "buy");
const filteredSellEnquiries = enquiries.filter(e => e.listing_type === "sell");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Enquiries</h2>
          <p className="text-muted-foreground">Manage your leads and enquiries</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} data-testid="button-add-enquiry">
          <Plus className="h-4 w-4 mr-2" />
          Add Enquiry
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
          <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
          <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enquiries.map(enquiry => (
              <EnquiryCard
                key={enquiry.id}
                {...enquiry}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onCall={(mobile) => console.log("Call:", mobile)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="buy" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBuyEnquiries.map(enquiry => (
              <EnquiryCard
                key={enquiry.id}
                {...enquiry}
                onEdit={handleEdit}
               onDelete={handleDelete}
                onCall={(mobile) => console.log("Call:", mobile)}
              />
            ))}
          </div>
        </TabsContent>

      <TabsContent value="sell" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSellEnquiries.map(enquiry => (
              <EnquiryCard
                key={enquiry.id}
                {...enquiry}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onCall={(mobile) => console.log("Call", mobile)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Enquiry</DialogTitle>
          </DialogHeader>
          <EnquiryForm
            onSubmit={handleAddEnquiry}
            onCancel={() => setShowAddForm(false)}
          />
        </DialogContent>
      </Dialog>

<Dialog open={showEditForm} onOpenChange={setShowEditForm}>
  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Edit Enquiry</DialogTitle>
    </DialogHeader>
    {selectedEnquiry && (
      <EnquiryForm
        defaultValues={selectedEnquiry}
        onSubmit={handleUpdateEnquiry}
        onCancel={() => setShowEditForm(false)}
      />
    )}
  </DialogContent>
</Dialog>


    </div>
  );
}
