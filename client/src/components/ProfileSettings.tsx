// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { User, Bell, Mail, MessageSquare, LogOut } from "lucide-react";

// interface ProfileSettingsProps {
//   onLogout: () => void;
// }

// export default function ProfileSettings({ onLogout }: ProfileSettingsProps) {
//     const [notifications, setNotifications] = useState({
//     email: true,
//     whatsapp: false,
//     local: true
//   });

//   const [profile, setProfile] = useState({
//     name: "John Smith",
//     email: "john.smith@example.com",
//     phone: "+1 (555) 123-4567"
//   });

//   const handleSaveProfile = () => {
//     console.log("Profile saved:", profile);
//   };

//   return (
//     <div className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Profile Information</CardTitle>
//           <CardDescription>Update your personal details</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-20 w-20">
//               <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
//                 {profile.name.split(' ').map(n => n[0]).join('')}
//               </AvatarFallback>
//             </Avatar>
//             <div className="flex-1">
//               <h3 className="font-semibold text-lg">{profile.name}</h3>
//               <p className="text-sm text-muted-foreground">{profile.email}</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="name"
//                   value={profile.name}
//                   onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//                   className="pl-9"
//                   data-testid="input-name"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   value={profile.email}
//                   onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//                   className="pl-9"
//                   data-testid="input-email"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <div className="relative">
//                 <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="phone"
//                   type="tel"
//                   value={profile.phone}
//                   onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
//                   className="pl-9"
//                   data-testid="input-phone"
//                 />
//               </div>
//             </div>
//           </div>

//           <Button onClick={handleSaveProfile} className="w-full" data-testid="button-save-profile">
//             Save Changes
//           </Button>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Notification Preferences</CardTitle>
//           <CardDescription>Choose how you want to receive notifications</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="email-notifications">Email Notifications</Label>
//               <p className="text-sm text-muted-foreground">Receive updates via email</p>
//             </div>
//             <Switch
//               id="email-notifications"
//               checked={notifications.email}
//               onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
//               data-testid="switch-email"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="whatsapp-notifications">WhatsApp Alerts</Label>
//               <p className="text-sm text-muted-foreground">Get reminders on WhatsApp</p>
//             </div>
//             <Switch
//               id="whatsapp-notifications"
//               checked={notifications.whatsapp}
//               onCheckedChange={(checked) => setNotifications({ ...notifications, whatsapp: checked })}
//               data-testid="switch-whatsapp"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="local-notifications">Browser Notifications</Label>
//               <p className="text-sm text-muted-foreground">Show notifications in browser</p>
//             </div>
//             <Switch
//               id="local-notifications"
//               checked={notifications.local}
//               onCheckedChange={(checked) => setNotifications({ ...notifications, local: checked })}
//               data-testid="switch-local"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-6">
//           <Button
//             variant="destructive"
//             onClick={onLogout}
//             className="w-full"
//             data-testid="button-logout"
//           >
//             <LogOut className="h-4 w-4 mr-2" />
//             Logout
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { User, Bell, Mail, MessageSquare, LogOut } from "lucide-react";
// import { supabase } from "../supabaseClient";
// import { useRef } from "react";
// import { Camera } from "lucide-react";

// interface ProfileSettingsProps {
//   onLogout: () => void;
// }
// interface Profile {
//   name: string;
//   email: string;
//   phone: string;
//   image?: string;
//   imageFile?: File;
// }

// export default function ProfileSettings({ onLogout }: ProfileSettingsProps) {
//   const [notifications, setNotifications] = useState({
//     email: true,
//     whatsapp: false,
//     local: true,
//   });
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [profile, setProfile] = useState<Profile>({
//     name: "",
//     email: "",
//     phone: "",
//     image: "",
//     imageFile: undefined,
//   });

//   const uploadProfileImage = async (file: File, userId: string) => {
//     try {
//       const fileExt = file.name.split(".").pop();
//       const fileName = `${userId}.${fileExt}`;
//       const filePath = `${fileName}`;

//       // Upload to the storage bucket
//       const { data, error } = await supabase.storage
//         .from("profile-images")
//         .upload(filePath, file, { upsert: true });

//       if (error) {
//         console.error("Error uploading image:", error.message);
//         return null;
//       }

//       // Get the public URL of the uploaded image
//       const { data: urlData, error: urlError } = supabase.storage
//         .from("profile-images")
//         .getPublicUrl(filePath);

//       if (urlError) {
//         console.error("Error getting public URL:", urlError.message);
//         return null;
//       }
//       console.log("Public URL of uploaded image:", urlData.publicUrl);

//       return urlData.publicUrl;
//     } catch (err) {
//       console.error("Unexpected error uploading image:", err);
//       return null;
//     }
//   };

//   const handleSaveProfile = async () => {
//     try {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (!user) return;

//       const userId = user.id;
//       const email = user.email;
//       let imageUrl = profile.image;
//       if (profile.imageFile) {
//         const uploadedUrl = await uploadProfileImage(
//           profile.imageFile,
//           user.id
//         );
//         if (uploadedUrl) imageUrl = uploadedUrl;
//       }

//       const profileData = {
//         user_id: userId, // primary key / unique column
//         full_name: profile.name,
//         email: email,
//         phone: profile.phone,
//         avatar_url: imageUrl,
//       };

//       // Log the data to see exactly what you're sending
//       console.log("Data being sent to Supabase:", profileData);

//       const { data, error } = await supabase
//         .from("profiles")
//         .upsert(profileData, { onConflict: "user_id" }) // prevents duplicate rows
//         .select()
//         .maybeSingle();

//       if (error) {
//         console.error("Error saving profile:", error.message);
//       } else {
//         console.log("Profile saved:", data);
//         alert("Profile updated successfully!");
//       }
//     } catch (err) {
//       console.error("Unexpected error:", err);
//     }
//   };

//   useEffect(() => {
//     async function fetchProfile() {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (!user) return;

//       const { data: profileData, error } = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("user_id", user.id)
//         .maybeSingle();

//       if (error) return console.error("Error fetching profile:", error.message);

//       if (profileData) {
//         setProfile({
//           name: profileData.full_name || "",
//           email: profileData.email || "",
//           phone: profileData.phone || "",
//           image: profileData.avatar_url || "",
//         });
//       }
//     }

//     fetchProfile();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Profile Information</CardTitle>
//           <CardDescription>Update your personal details</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="flex items-center gap-4">
//             <div className="relative w-20 h-20">
//               <Avatar
//                 className="h-20 w-20 cursor-pointer"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 {profile.image ? (
//                   <img src={profile.image} alt={profile.name} />
//                 ) : (
//                   <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
//                     {profile.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 )}
//               </Avatar>

//               {/* Upload icon overlay */}
//               <div
//                 className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer shadow-md"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <Camera className="h-4 w-4 text-gray-700" />
//               </div>

//               {/* Hidden file input */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 ref={fileInputRef}
//                 className="hidden"
//                 onChange={(e) => {
//                   if (e.target.files && e.target.files[0]) {
//                     const file = e.target.files[0];
//                     setProfile({
//                       ...profile,
//                       imageFile: file,
//                       image: URL.createObjectURL(file), // this shows preview
//                     });
//                   }
//                 }}
//               />
//             </div>

//             <div className="flex-1">
//               <h3 className="font-semibold text-lg">{profile.name}</h3>
//               <p className="text-sm text-muted-foreground">{profile.email}</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="name"
//                   value={profile.name}
//                   onChange={(e) =>
//                     setProfile({ ...profile, name: e.target.value })
//                   }
//                   className="pl-9"
//                   data-testid="input-name"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   value={profile.email}
//                   onChange={(e) =>
//                     setProfile({ ...profile, email: e.target.value })
//                   }
//                   className="pl-9"
//                   data-testid="input-email"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <div className="relative">
//                 <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="phone"
//                   type="tel"
//                   value={profile.phone}
//                   onChange={(e) =>
//                     setProfile({ ...profile, phone: e.target.value })
//                   }
//                   className="pl-9"
//                   data-testid="input-phone"
//                 />
//               </div>
//             </div>
//           </div>

//           <Button
//             onClick={handleSaveProfile}
//             className="w-full"
//             data-testid="button-save-profile"
//           >
//             Save Changes
//           </Button>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Notification Preferences</CardTitle>
//           <CardDescription>
//             Choose how you want to receive notifications
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="email-notifications">Email Notifications</Label>
//               <p className="text-sm text-muted-foreground">
//                 Receive updates via email
//               </p>
//             </div>
//             <Switch
//               id="email-notifications"
//               checked={notifications.email}
//               onCheckedChange={(checked) =>
//                 setNotifications({ ...notifications, email: checked })
//               }
//               data-testid="switch-email"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="whatsapp-notifications">WhatsApp Alerts</Label>
//               <p className="text-sm text-muted-foreground">
//                 Get reminders on WhatsApp
//               </p>
//             </div>
//             <Switch
//               id="whatsapp-notifications"
//               checked={notifications.whatsapp}
//               onCheckedChange={(checked) =>
//                 setNotifications({ ...notifications, whatsapp: checked })
//               }
//               data-testid="switch-whatsapp"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="local-notifications">Browser Notifications</Label>
//               <p className="text-sm text-muted-foreground">
//                 Show notifications in browser
//               </p>
//             </div>
//             <Switch
//               id="local-notifications"
//               checked={notifications.local}
//               onCheckedChange={(checked) =>
//                 setNotifications({ ...notifications, local: checked })
//               }
//               data-testid="switch-local"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-6">
//           <Button
//             variant="destructive"
//             onClick={onLogout}
//             className="w-full"
//             data-testid="button-logout"
//           >
//             <LogOut className="h-4 w-4 mr-2" />
//             Logout
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, MessageSquare, LogOut, Camera } from "lucide-react";
import { supabase } from "../supabaseClient";

interface ProfileSettingsProps {
  onLogout: () => void;
}

interface Profile {
  name: string;
  email: string;
  phone: string;
  image?: string;
  imageFile?: File;
}

export default function ProfileSettings({ onLogout }: ProfileSettingsProps) {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    phone: "",
    image: "",
    imageFile: undefined,
  });

  const [notifications, setNotifications] = useState({
    email: false,
    whatsapp: false,
    local: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ✅ Upload Profile Image to Supabase Storage
  const uploadProfileImage = async (file: File, userId: string) => {
    try {
      const fileExt = file.name.split(".").pop();
      const sanitizedFileName = file.name
        .replace(/\s+/g, "_")
        .replace(/:/g, "-")
        .replace(/[^a-zA-Z0-9._-]/g, "");
      const filePath = `${userId}_${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from("profile-images")
        .upload(filePath, file, { upsert: true });

      if (error) {
        console.error("Error uploading image:", error.message);
        return null;
      }

      const { data: urlData, error: urlError } = supabase.storage
        .from("profile-images")
        .getPublicUrl(filePath);

      if (urlError) {
        console.error("Error getting public URL:", urlError.message);
        return null;
      }

      return urlData.publicUrl;
    } catch (err) {
      console.error("Unexpected error uploading image:", err);
      return null;
    }
  };

  // ✅ Save Profile Info
  const handleSaveProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const userId = user.id;
      const email = user.email;

      let imageUrl = profile.image;
      if (profile.imageFile) {
        const uploadedUrl = await uploadProfileImage(profile.imageFile, userId);
        if (uploadedUrl) imageUrl = uploadedUrl;
      }

      const profileData = {
        user_id: userId,
        full_name: profile.name,
        email: email,
        phone: profile.phone,
        avatar_url: imageUrl,
      };

      const { error } = await supabase
        .from("profiles")
        .upsert(profileData, { onConflict: "user_id" });

      if (error) console.error("Error saving profile:", error.message);
      else alert("✅ Profile updated successfully!");
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  // ✅ Save Notification Preferences
  const saveNotifications = async (updatedValues: Partial<typeof notifications>) => {
    setNotifications((prev) => ({ ...prev, ...updatedValues }));

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const updatedData = {
      user_id: user.id,
      email: updatedValues.email ?? notifications.email,
      whatsapp: updatedValues.whatsapp ?? notifications.whatsapp,
      local: updatedValues.local ?? notifications.local,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("user_notifications").upsert(updatedData);
    if (error) console.error("Error updating notifications:", error.message);
  };

  // ✅ Fetch Profile + Notification Data
  useEffect(() => {
    async function fetchData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profileData) {
        setProfile({
          name: profileData.full_name || "",
          email: profileData.email || "",
          phone: profileData.phone || "",
          image: profileData.avatar_url || "",
        });
      }

      // Fetch notifications
      const { data: notifData } = await supabase
        .from("user_notifications")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (notifData) {
        setNotifications({
          email: notifData.email,
          whatsapp: notifData.whatsapp,
          local: notifData.local,
        });
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Profile Info */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <Avatar
                className="h-20 w-20 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {profile.image ? (
                  <img src={profile.image} alt={profile.name} />
                ) : (
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                )}
              </Avatar>

              <div
                className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer shadow-md"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="h-4 w-4 text-gray-700" />
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    setProfile((prev) => ({
                      ...prev,
                      imageFile: file,
                      image: URL.createObjectURL(file), // ✅ preview before upload
                    }));
                  }
                }}
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
            </div>
          </div>

          {/* Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  disabled
                  className="pl-9 bg-gray-100"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <Button onClick={handleSaveProfile} className="w-full">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose how you want to receive notifications</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {[
            { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
            { key: "whatsapp", label: "WhatsApp Alerts", desc: "Get reminders on WhatsApp" },
            { key: "local", label: "Browser Notifications", desc: "Show notifications in browser" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor={`${item.key}-notifications`}>{item.label}</Label>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <Switch
                id={`${item.key}-notifications`}
                checked={notifications[item.key as keyof typeof notifications]}
                onCheckedChange={(checked) =>
                  saveNotifications({ [item.key]: checked } as Partial<typeof notifications>)
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Logout */}
      <Card>
        <CardContent className="p-6">
          <Button variant="destructive" onClick={onLogout} className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}





// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { User, Bell, Mail, MessageSquare, LogOut } from "lucide-react";
// import { supabase } from "../supabaseClient";
// import { useRef } from "react";
// import { Camera } from "lucide-react";

// interface ProfileSettingsProps {
//   onLogout: () => void;
// }
// interface Profile {
//   name: string;
//   email: string;
//   phone: string;
//   image?: string;
//   imageFile?: File;
// }

// export default function ProfileSettings({ onLogout }: ProfileSettingsProps) {
//   const [notifications, setNotifications] = useState({
//     email: true,
//     whatsapp: false,
//     local: true,
//   });
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [profile, setProfile] = useState<Profile>({
//     name: "",
//     email: "",
//     phone: "",
//     image: "",
//     imageFile: undefined,
//   });

//   const uploadProfileImage = async (file: File, userId: string) => {
//   try {
//     // 1️⃣ Sanitize the file name
//   const fileExt = file.name.split(".").pop();
// const sanitizedFileName = file.name
//   .replace(/\s+/g, "_")
//   .replace(/:/g, "-")
//   .replace(/[^a-zA-Z0-9._-]/g, "");
// const filePath = `${userId}_${Date.now()}.${fileExt}`;


//     console.log("Uploading file to path:", filePath);

//     // 3️⃣ Upload to Supabase bucket
//     const { data, error } = await supabase.storage
//       .from("profile-images")
//       .upload(filePath, file, { upsert: true });

//     if (error) {
//       console.error("Error uploading image:", error.message);
//       return null;
//     }

//     // 4️⃣ Get public URL
//     const { data: urlData, error: urlError } = supabase.storage
//       .from("profile-images")
//       .getPublicUrl(filePath);

//     if (urlError) {
//       console.error("Error getting public URL:", urlError.message);
//       return null;
//     }

//     console.log("Public URL:", urlData.publicUrl);
//     return urlData.publicUrl; // ✅ this is the URL to save in DB
//   } catch (err) {
//     console.error("Unexpected error uploading image:", err);
//     return null;
//   }
// };

// const handleSaveProfile = async () => {
//   try {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (!user) return;

//     const userId = user.id;
//     const email = user.email;

//     let imageUrl = profile.image; // preview image fallback
//     if (profile.imageFile) {
//       const uploadedUrl = await uploadProfileImage(profile.imageFile, userId);
//       if (uploadedUrl) imageUrl = uploadedUrl; // store bucket URL in DB
//     }

//     const profileData = {
//       user_id: userId,
//       full_name: profile.name,
//       email: email,
//       phone: profile.phone,
//       avatar_url: imageUrl,
//     };

//     console.log("Saving profile to DB:", profileData);

//     const { data, error } = await supabase
//       .from("profiles")
//       .upsert(profileData, { onConflict: "user_id" })
//       .select()
//       .maybeSingle();

//     if (error) {
//       console.error("Error saving profile:", error.message);
//     } else {
//       console.log("Profile saved:", data);
//       alert("Profile updated successfully!");
//     }
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// };


//   useEffect(() => {
//     async function fetchProfile() {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (!user) return;

//       const { data: profileData, error } = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("user_id", user.id)
//         .maybeSingle();

//       if (error) return console.error("Error fetching profile:", error.message);

//       if (profileData) {
//         setProfile({
//           name: profileData.full_name || "",
//           email: profileData.email || "",
//           phone: profileData.phone || "",
//           image: profileData.avatar_url || "",
//         });
//       }
//     }

//     fetchProfile();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Profile Information</CardTitle>
//           <CardDescription>Update your personal details</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="flex items-center gap-4">
//             <div className="relative w-20 h-20">
//               <Avatar
//                 className="h-20 w-20 cursor-pointer"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 {profile.image ? (
//                   <img src={profile.image} alt={profile.name} />
//                 ) : (
//                   <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
//                     {profile.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 )}
//               </Avatar>

//               {/* Upload icon overlay */}
//               <div
//                 className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer shadow-md"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <Camera className="h-4 w-4 text-gray-700" />
//               </div>

//               <input
//   type="file"
//   accept="image/*"
//   ref={fileInputRef}
//   className="hidden"
//   onChange={(e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setProfile((prev) => ({
//         ...prev,
//         imageFile: file, // only keep the file for uploading
//         image: "",       // clear preview or keep previous bucket URL
//       }));
//     }
//   }}
// />

//             </div>

//             <div className="flex-1">
//               <h3 className="font-semibold text-lg">{profile.name}</h3>
//               <p className="text-sm text-muted-foreground">{profile.email}</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="name"
//                   value={profile.name}
//                   onChange={(e) =>
//                     setProfile({ ...profile, name: e.target.value })
//                   }
//                   className="pl-9"
//                   data-testid="input-name"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   value={profile.email}
//                   onChange={(e) =>
//                     setProfile({ ...profile, email: e.target.value })
//                   }
//                   className="pl-9"
//                   data-testid="input-email"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <div className="relative">
//                 <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="phone"
//                   type="tel"
//                   value={profile.phone}
//                   onChange={(e) =>
//                     setProfile({ ...profile, phone: e.target.value })
//                   }
//                   className="pl-9"
//                   data-testid="input-phone"
//                 />
//               </div>
//             </div>
//           </div>

//           <Button
//             onClick={handleSaveProfile}
//             className="w-full"
//             data-testid="button-save-profile"
//           >
//             Save Changes
//           </Button>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Notification Preferences</CardTitle>
//           <CardDescription>
//             Choose how you want to receive notifications
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="email-notifications">Email Notifications</Label>
//               <p className="text-sm text-muted-foreground">
//                 Receive updates via email
//               </p>
//             </div>
//             <Switch
//               id="email-notifications"
//               checked={notifications.email}
//               onCheckedChange={(checked) =>
//                 setNotifications({ ...notifications, email: checked })
//               }
//               data-testid="switch-email"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="whatsapp-notifications">WhatsApp Alerts</Label>
//               <p className="text-sm text-muted-foreground">
//                 Get reminders on WhatsApp
//               </p>
//             </div>
//             <Switch
//               id="whatsapp-notifications"
//               checked={notifications.whatsapp}
//               onCheckedChange={(checked) =>
//                 setNotifications({ ...notifications, whatsapp: checked })
//               }
//               data-testid="switch-whatsapp"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="space-y-0.5">
//               <Label htmlFor="local-notifications">Browser Notifications</Label>
//               <p className="text-sm text-muted-foreground">
//                 Show notifications in browser
//               </p>
//             </div>
//             <Switch
//               id="local-notifications"
//               checked={notifications.local}
//               onCheckedChange={(checked) =>
//                 setNotifications({ ...notifications, local: checked })
//               }
//               data-testid="switch-local"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-6">
//           <Button
//             variant="destructive"
//             onClick={onLogout}
//             className="w-full"
//             data-testid="button-logout"
//           >
//             <LogOut className="h-4 w-4 mr-2" />
//             Logout
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
