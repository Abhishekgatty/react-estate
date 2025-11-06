import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilter from "@/components/PropertyFilter";
import AddPropertyForm from "@/components/AddPropertyForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

import villa from "@assets/generated_images/Modern_luxury_villa_exterior_68d0642c.png";
import apartment from "@assets/generated_images/Modern_apartment_interior_cc358818.png";
import house from "@assets/generated_images/Family_house_exterior_82ca1fe0.png";
import condo from "@assets/generated_images/Luxury_condo_building_2cca3e4b.png";
import cottage from "@assets/generated_images/Cozy_cottage_exterior_644fce70.png";
import commercial from "@assets/generated_images/Commercial_office_building_d56401ae.png";

const mockProperties = [
  {
    id: "1",
    image: villa,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,450,000",
    type: "Buy" as const,
    bedrooms: 5,
    bathrooms: 4,
    area: "4,200 sq ft"
  },
  {
    id: "2",
    image: apartment,
    title: "Spacious Downtown Apartment",
    location: "Manhattan, NY",
    price: "$850,000",
    type: "Buy" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft"
  },
  {
    id: "3",
    image: house,
    title: "Cozy Family House",
    location: "Austin, TX",
    price: "$625,000",
    type: "Sell" as const,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft"
  },
  {
    id: "4",
    image: condo,
    title: "Luxury High-Rise Condo",
    location: "Miami, FL",
    price: "$1,200,000",
    type: "Buy" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: "2,100 sq ft"
  },
  {
    id: "5",
    image: cottage,
    title: "Charming Cottage",
    location: "Portland, OR",
    price: "$485,000",
    type: "Sell" as const,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,400 sq ft"
  },
  {
    id: "6",
    image: commercial,
    title: "Commercial Office Space",
    location: "San Francisco, CA",
    price: "$3,800,000",
    type: "Buy" as const,
    area: "8,500 sq ft"
  }
];

export default function Properties() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const handleFilter = (filters: any) => {
    console.log("Filters applied:", filters);
  };

  const handleAddProperty = (data: any) => {
    console.log("Property added:", data);
    setShowAddForm(false);
  };

  const buyProperties = mockProperties.filter(p => p.type === "Buy");
  const sellProperties = mockProperties.filter(p => p.type === "Sell");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Properties</h2>
          <p className="text-muted-foreground">Browse and manage property listings</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} data-testid="button-add-property">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <PropertyFilter onFilter={handleFilter} />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
          <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
          <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProperties.map(property => (
              <PropertyCard
                key={property.id}
                {...property}
                onView={(id) => console.log("View property:", id)}
                onContact={(id) => console.log("Contact for property:", id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="buy" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyProperties.map(property => (
              <PropertyCard
                key={property.id}
                {...property}
                onView={(id) => console.log("View property:", id)}
                onContact={(id) => console.log("Contact for property:", id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sell" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellProperties.map(property => (
              <PropertyCard
                key={property.id}
                {...property}
                onView={(id) => console.log("View property:", id)}
                onContact={(id) => console.log("Contact for property:", id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Property</DialogTitle>
          </DialogHeader>
          <AddPropertyForm
            onSubmit={handleAddProperty}
            onCancel={() => setShowAddForm(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
