import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Eye } from "lucide-react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  type: "Buy" | "Sell";
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  onView: (id: string) => void;
  onContact: (id: string) => void;
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  area,
  onView,
  onContact
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all">
      <div className="relative aspect-[4/3]">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <Badge 
          className="absolute top-3 right-3"
          variant={type === "Buy" ? "default" : "secondary"}
          data-testid={`badge-type-${id}`}
        >
          {type}
        </Badge>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-base line-clamp-1" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
            {price}
          </span>
        </div>

        {(bedrooms || bathrooms || area) && (
          <div className="flex gap-3 text-xs text-muted-foreground">
            {bedrooms && <span>{bedrooms} beds</span>}
            {bathrooms && <span>{bathrooms} baths</span>}
            {area && <span>{area}</span>}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => onView(id)}
            data-testid={`button-view-${id}`}
          >
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={() => onContact(id)}
            data-testid={`button-contact-${id}`}
          >
            <Phone className="h-4 w-4 mr-1" />
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
