// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Phone } from "lucide-react";

// interface PhoneLoginProps {
//   onSubmit: (phoneNumber: string) => void;
// }

// export default function PhoneLogin({ onSubmit }: PhoneLoginProps) {
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (phoneNumber.length >= 10) {
//       onSubmit(phoneNumber);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-2 text-center">
//           <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
//             <Phone className="h-8 w-8 text-primary-foreground" />
//           </div>
//           <CardTitle className="text-2xl">Welcome to Real Estate CRM</CardTitle>
//           <CardDescription>Enter your phone number to continue</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="+1 (555) 000-0000"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 data-testid="input-phone"
//                 className="text-base"
//               />
//             </div>
//             <Button 
//               type="submit" 
//               className="w-full" 
//               size="lg"
//               disabled={phoneNumber.length < 10}
//               data-testid="button-send-otp"
//             >
//               Send OTP
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { supabase } from "../supabaseClient";

export default function EmailLogin() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setMessage("");

  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: "http://localhost:5000/auth/callback", // redirect after login
      },
    });

    if (error) {
      console.error("❌ OTP Error:", error.message);
      setMessage(`Error: ${error.message}`);
    } else {
      console.log("✅ OTP / Magic Link sent!", data);
      setMessage(`OTP / Magic Link sent to ${email}. Check your inbox.`);
    }
  } catch (err: any) {
    console.error("Unexpected error:", err);
    setMessage("Something went wrong. Try again.");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Welcome to Real Estate CRM</CardTitle>
          <CardDescription>Enter your email to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base"
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={!email}>
              Send OTP / Magic Link
            </Button>
            {message && <p className="text-sm text-blue-600 mt-2">{message}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
