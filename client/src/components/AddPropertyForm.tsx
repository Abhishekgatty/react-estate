// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Upload } from "lucide-react";
// import { supabase } from "@/supabaseClient";

// interface AddPropertyFormProps {
//   onSubmit: (data: any) => void;
//   onCancel?: () => void;
// }

// export default function AddPropertyForm({ onSubmit, onCancel }: AddPropertyFormProps) {
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     price: "",
//     propertyType: "",
//     bedrooms: "",
//     bathrooms: "",
//     area: "",
//     description: "",
//     contactName: "",
//     contactPhone: "",
//     listingType: "sell"
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const updateField = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Add New Property</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="listingType">Listing Type *</Label>
//             <Select
//               value={formData.listingType}
//               onValueChange={(value) => updateField("listingType", value)}
//             >
//               <SelectTrigger id="listingType" data-testid="select-listing-type">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="sell">For Sale</SelectItem>
//                 <SelectItem value="rent">For Rent</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="title">Property Title *</Label>
//             <Input
//               id="title"
//               value={formData.title}
//               onChange={(e) => updateField("title", e.target.value)}
//               placeholder="e.g., Modern Luxury Villa"
//               required
//               data-testid="input-title"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="location">Location *</Label>
//               <Input
//                 id="location"
//                 value={formData.location}
//                 onChange={(e) => updateField("location", e.target.value)}
//                 placeholder="City, State"
//                 required
//                 data-testid="input-location"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="price">Price *</Label>
//               <Input
//                 id="price"
//                 value={formData.price}
//                 onChange={(e) => updateField("price", e.target.value)}
//                 placeholder="$500,000"
//                 required
//                 data-testid="input-price"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="propertyType">Property Type *</Label>
//               <Select
//                 value={formData.propertyType}
//                 onValueChange={(value) => updateField("propertyType", value)}
//               >
//                 <SelectTrigger id="propertyType" data-testid="select-property-type">
//                   <SelectValue placeholder="Select type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="house">House</SelectItem>
//                   <SelectItem value="apartment">Apartment</SelectItem>
//                   <SelectItem value="villa">Villa</SelectItem>
//                   <SelectItem value="condo">Condo</SelectItem>
//                   <SelectItem value="commercial">Commercial</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="area">Area (sq ft)</Label>
//               <Input
//                 id="area"
//                 value={formData.area}
//                 onChange={(e) => updateField("area", e.target.value)}
//                 placeholder="2,500"
//                 data-testid="input-area"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="bedrooms">Bedrooms</Label>
//               <Input
//                 id="bedrooms"
//                 type="number"
//                 value={formData.bedrooms}
//                 onChange={(e) => updateField("bedrooms", e.target.value)}
//                 placeholder="3"
//                 data-testid="input-bedrooms"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="bathrooms">Bathrooms</Label>
//               <Input
//                 id="bathrooms"
//                 type="number"
//                 value={formData.bathrooms}
//                 onChange={(e) => updateField("bathrooms", e.target.value)}
//                 placeholder="2"
//                 data-testid="input-bathrooms"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               value={formData.description}
//               onChange={(e) => updateField("description", e.target.value)}
//               rows={4}
//               placeholder="Enter property details..."
//               data-testid="input-description"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label>Property Images</Label>
//             <div className="border-2 border-dashed border-border rounded-md p-8 text-center hover-elevate active-elevate-2 cursor-pointer">
//               <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
//               <p className="text-sm text-muted-foreground">Click to upload images</p>
//               <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
//             </div>
//           </div>

//           <div className="border-t pt-4 mt-4">
//             <h3 className="font-semibold mb-4">Contact Information</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="contactName">Contact Name *</Label>
//                 <Input
//                   id="contactName"
//                   value={formData.contactName}
//                   onChange={(e) => updateField("contactName", e.target.value)}
//                   required
//                   data-testid="input-contact-name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="contactPhone">Contact Phone *</Label>
//                 <Input
//                   id="contactPhone"
//                   type="tel"
//                   value={formData.contactPhone}
//                   onChange={(e) => updateField("contactPhone", e.target.value)}
//                   required
//                   data-testid="input-contact-phone"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-2 pt-4">
//             {onCancel && (
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={onCancel}
//                 className="flex-1"
//                 data-testid="button-cancel"
//               >
//                 Cancel
//               </Button>
//             )}
//             <Button type="submit" className="flex-1" data-testid="button-submit">
//               Add Property
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }





import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import { supabase } from "@/supabaseClient";


interface Property {
  id: string;
  user_id: string;
  listing_type: string;
  title: string;
  location: string;
  price: number;
  property_type: string;
  area_sqft: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  contact_name: string;
  contact_phone: string;
  images: string[]; // array of public URLs
}
interface AddPropertyFormProps {
  onSubmit: (data: any) => void;
  onCancel?: () => void;
}

export default function AddPropertyForm({
  onSubmit,
  onCancel,
}: AddPropertyFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    contactName: "",
    contactPhone: "",
    listingType: "sell",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     setIsSubmitting(true);

    try {
      // Await the user object
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user:", userError);
        alert("❌ Failed to get authenticated user: " + userError.message);
        return;
      }

      if (!user) {
        console.error("No authenticated user found.");
        alert("⚠️ You must be logged in to add a property.");
        return;
      }

      const uploadedImageUrls: string[] = [];

    for (const file of images) {
      const filePath = `${user.id}/${Date.now()}_${file.name}`; // unique path
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("propertie_images")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Error uploading image:", uploadError.message);
        alert("❌ Failed to upload image: " + uploadError.message);
        return;
      }

      // Get public URL
      const { data: publicData } = supabase.storage
        .from("propertie_images")
        .getPublicUrl(filePath);

      uploadedImageUrls.push(publicData.publicUrl);
    }

      // Insert property with the current user's ID
      const { data, error } = await supabase.from("properties").insert([
        {
          user_id: user.id, // ✅ user ID from supabase
          listing_type: formData.listingType,
          title: formData.title,
          location: formData.location,
          price: parseFloat(formData.price),
          property_type: formData.propertyType,
          area_sqft: parseFloat(formData.area),
          bedrooms: parseInt(formData.bedrooms),
          bathrooms: parseInt(formData.bathrooms),
          description: formData.description,
          contact_name: formData.contactName,
          contact_phone: formData.contactPhone,
           images: uploadedImageUrls,
        },
      ]);

      if (error) {
        console.error("Error adding property:", error.message);
        alert("❌ Failed to add property: " + error.message);
      } else {
        alert("✅ Property added successfully!");
        console.log("Inserted:", data);

        onSubmit(formData);

        // Optionally reset the form
        setFormData({
          title: "",
          location: "",
          price: "",
          propertyType: "",
          bedrooms: "",
          bathrooms: "",
          area: "",
          description: "",
          contactName: "",
          contactPhone: "",
          listingType: "sell",
        });
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Unexpected error occurred.");
    }
    finally {
    setIsSubmitting(false); // Re-enable button after operation
  }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Property</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="listingType">Listing Type *</Label>
            <Select
              value={formData.listingType}
              onValueChange={(value) => updateField("listingType", value)}
            >
              <SelectTrigger id="listingType" data-testid="select-listing-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sell">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Property Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="e.g., Modern Luxury Villa"
              required
              data-testid="input-title"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="City, State"
                required
                data-testid="input-location"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => updateField("price", e.target.value)}
                placeholder="$500,000"
                required
                data-testid="input-price"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type *</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => updateField("propertyType", value)}
              >
                <SelectTrigger
                  id="propertyType"
                  data-testid="select-property-type"
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Area (sq ft)</Label>
              <Input
                id="area"
                value={formData.area}
                onChange={(e) => updateField("area", e.target.value)}
                placeholder="2,500"
                data-testid="input-area"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input
                id="bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={(e) => updateField("bedrooms", e.target.value)}
                placeholder="3"
                data-testid="input-bedrooms"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input
                id="bathrooms"
                type="number"
                value={formData.bathrooms}
                onChange={(e) => updateField("bathrooms", e.target.value)}
                placeholder="2"
                data-testid="input-bathrooms"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={4}
              placeholder="Enter property details..."
              data-testid="input-description"
            />
          </div>

          <div className="space-y-2">
            <Label>Property Images</Label>

            <div
              className="border-2 border-dashed border-border rounded-md p-8 text-center hover-elevate active-elevate-2 cursor-pointer"
              onClick={handleUploadClick} // trigger file input
            >
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Click to upload images
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG up to 10MB
              </p>
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleFiles}
            />

            {/* Optional: Preview uploaded images */}
            <div className="flex flex-wrap gap-2 mt-2">
              {images.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="h-24 w-24 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Name *</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => updateField("contactName", e.target.value)}
                  required
                  data-testid="input-contact-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone *</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => updateField("contactPhone", e.target.value)}
                  required
                  data-testid="input-contact-phone"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="flex-1"
                data-testid="button-cancel"
              >
                Cancel
              </Button>
            )}
         <Button
  type="submit"
  className="flex-1"
  data-testid="button-submit"
  disabled={isSubmitting} // ✅ Disable while submitting
>
  {isSubmitting ? "Adding..." : "Add Property"}
</Button>

          </div>
        </form>
      </CardContent>
    </Card>
  );
}
