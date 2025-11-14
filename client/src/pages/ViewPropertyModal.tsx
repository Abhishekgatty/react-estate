

// import { useParams } from "wouter"; // Wouter's hook
// import { useEffect, useState } from "react";
// import { supabase } from "@/supabaseClient";

// export default function ViewPropertyPage() {
//   const { id } = useParams();
//   const [property, setProperty] = useState<any>(null);

//   useEffect(() => {
//     if (!id) return;

//     const fetchProperty = async () => {
//       const { data, error } = await supabase
//         .from("properties")
//         .select("*")
//         .eq("id", id)
//         .single();
//       if (error) console.error(error);
//       else setProperty(data);
//     };

//     fetchProperty();
//   }, [id]);

//   if (!property) return <p className="text-center mt-20 text-gray-500">Loading property details...</p>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{property.title}</h1>
//       <p className="text-gray-500 mb-4">{property.location}</p>

//       {/* Hero Image */}
//       {property.images && property.images.length > 0 && (
//         <img
//           src={property.images[0]}
//           alt={property.title}
//           className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
//         />
//       )}

//       {/* Thumbnails */}
//       {property.images && property.images.length > 1 && (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
//           {property.images.slice(1).map((img: string, idx: number) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Property ${idx + 2}`}
//               className="w-full h-40 object-cover rounded shadow-sm"
//             />
//           ))}
//         </div>
//       )}

//       {/* Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="space-y-2">
//           <p className="text-gray-700 font-medium">Price:</p>
//           <p className="text-lg font-semibold">₹ {property.price?.toLocaleString()}</p>
//         </div>
//         <div className="space-y-2">
//           <p className="text-gray-700 font-medium">Type:</p>
//           <p className="text-lg">{property.listing_type}</p>
//         </div>
//         <div className="space-y-2">
//           <p className="text-gray-700 font-medium">Bedrooms:</p>
//           <p>{property.bedrooms}</p>
//         </div>
//         <div className="space-y-2">
//           <p className="text-gray-700 font-medium">Bathrooms:</p>
//           <p>{property.bathrooms}</p>
//         </div>
//         <div className="space-y-2">
//           <p className="text-gray-700 font-medium">Area:</p>
//           <p>{property.area_sqft ? `${property.area_sqft} sqft` : "-"}</p>
//         </div>
//       </div>

//       {/* Description */}
//       {property.description && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Description</h2>
//           <p className="text-gray-700">{property.description}</p>
//         </div>
//       )}

//       {/* Back Button */}
//       <button
//         onClick={() => window.history.back()}
//         className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
//       >
//         Back
//       </button>
//     </div>
//   );
// }


import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

export default function ViewPropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.error(error);
      else {
        setProperty(data);
        setMainImage(data.images?.[0] || null);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property)
    return (
      <p className="text-center mt-20 text-gray-500">Loading property...</p>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Main Image + Thumbnails */}
        <div className="space-y-4">
          {mainImage ? (
            <img
              src={mainImage}
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}

          {property.images && property.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto mt-2">
              {property.images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right: Property Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-500">{property.location}</p>
          <p className="text-2xl font-semibold text-blue-600">
            ₹ {property.price?.toLocaleString()}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-1">
              <p className="text-gray-600 font-medium">Type</p>
              <p className="text-gray-800">{property.listing_type}</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600 font-medium">Bedrooms</p>
              <p className="text-gray-800">{property.bedrooms}</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600 font-medium">Bathrooms</p>
              <p className="text-gray-800">{property.bathrooms}</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600 font-medium">Area</p>
              <p className="text-gray-800">
                {property.area_sqft ? `${property.area_sqft} sqft` : "-"}
              </p>
            </div>
          </div>

          {property.description && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>
          )}

          <button
            onClick={() => window.history.back()}
            className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
