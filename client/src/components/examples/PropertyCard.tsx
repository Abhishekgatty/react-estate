import PropertyCard from "../PropertyCard";
import villa from "@assets/generated_images/Modern_luxury_villa_exterior_68d0642c.png";
import apartment from "@assets/generated_images/Modern_apartment_interior_cc358818.png";
import house from "@assets/generated_images/Family_house_exterior_82ca1fe0.png";

export default function PropertyCardExample() {
  return (
    <div className="p-6 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PropertyCard
          id="1"
          image={villa}
          title="Modern Luxury Villa"
          location="Beverly Hills, CA"
          price="$2,450,000"
          type="Buy"
          bedrooms={5}
          bathrooms={4}
          area="4,200 sq ft"
          onView={(id) => console.log("View property:", id)}
          onContact={(id) => console.log("Contact for property:", id)}
        />
        <PropertyCard
          id="2"
          image={apartment}
          title="Spacious Downtown Apartment"
          location="Manhattan, NY"
          price="$850,000"
          type="Buy"
          bedrooms={3}
          bathrooms={2}
          area="1,800 sq ft"
          onView={(id) => console.log("View property:", id)}
          onContact={(id) => console.log("Contact for property:", id)}
        />
        <PropertyCard
          id="3"
          image={house}
          title="Cozy Family House"
          location="Austin, TX"
          price="$625,000"
          type="Sell"
          bedrooms={4}
          bathrooms={3}
          area="2,500 sq ft"
          onView={(id) => console.log("View property:", id)}
          onContact={(id) => console.log("Contact for property:", id)}
        />
      </div>
    </div>
  );
}
