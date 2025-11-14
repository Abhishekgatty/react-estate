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

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Mail } from "lucide-react";
// import { supabase } from "../supabaseClient";

// export default function EmailLogin() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//  const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setMessage("");

//   try {
//     const { data, error } = await supabase.auth.signInWithOtp({
//       email: email.trim(),
//       options: {
//         emailRedirectTo: "http://localhost:5000/auth/callback", // redirect after login
//       },
//     });

//     if (error) {
//       console.error("❌ OTP Error:", error.message);
//       setMessage(`Error: ${error.message}`);
//     } else {
//       console.log("✅ OTP / Magic Link sent!", data);
//       setMessage(`OTP / Magic Link sent to ${email}. Check your inbox.`);
//     }
//   } catch (err: any) {
//     console.error("Unexpected error:", err);
//     setMessage("Something went wrong. Try again.");
//   }
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-2 text-center">
//           <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
//             <Mail className="h-8 w-8 text-primary-foreground" />
//           </div>
//           <CardTitle className="text-2xl">Welcome to Real Estate CRM</CardTitle>
//           <CardDescription>Enter your email to continue</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="text-base"
//               />
//             </div>
//             <Button type="submit" className="w-full" size="lg" disabled={!email}>
//               Send OTP / Magic Link
//             </Button>
//             {message && <p className="text-sm text-blue-600 mt-2">{message}</p>}
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Mail } from "lucide-react";
// import { supabase } from "../supabaseClient";
// import toast, { Toaster } from "react-hot-toast";

// export default function AuthForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [mode, setMode] = useState<"login" | "register">("login");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email.trim() || !password.trim()) {
//       toast.error("Please enter email and password");
//       return;
//     }

//     setLoading(true);

//     try {
//       if (mode === "register") {
//         // Register user and send confirmation email
//         const { error } = await supabase.auth.signUp({
//           email: email.trim(),
//           password,
//           options: {
//             emailRedirectTo: "http://localhost:5000/auth/callback", // Redirect after email confirmation
//           },
//         });

//         if (error) {
//           toast.error(error.message);
//         } else {
//           toast.success(
//             "✅ Registration successful! Check your email for confirmation link."
//           );
//           setMode("login"); // Switch to login form
//         }
//       } else {
//         // Login user
//         const { data, error } = await supabase.auth.signInWithPassword({
//           email: email.trim(),
//           password,
//         });

//         if (error) {
//           if (error.message.includes("email not confirmed")) {
//             toast.error(
//               "⚠️ Please confirm your email first. Check your inbox."
//             );
//           } else {
//             toast.error(error.message);
//           }
//         } else {
//           toast.success("✅ Login successful!");
//           console.log("User:", data.user);
//           // Redirect to dashboard or home page
//           window.location.href = "/"; // change to your dashboard page
//         }
//       }
//     } catch (err: any) {
//       toast.error("Something went wrong. Try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background p-4 ">
//       <Toaster position="top-right" />

//       <Card className="w-full max-w-md bg-white">
//         <CardHeader className="space-y-2 text-center">
//           <img
//             src="/ordoo.png"
//             alt="Logo"
//             className="h-13 w-13 object-contain mx-auto"
//           />

//           <CardTitle className="text-2xl">
//             {mode === "login" ? "Login" : "Register"}
//           </CardTitle>

//           <CardDescription>
//             Enter your email and password to continue
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="********"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full"
//               size="lg"
//               disabled={loading}
//             >
//               {loading
//                 ? "Processing..."
//                 : mode === "login"
//                 ? "Login"
//                 : "Register"}
//             </Button>
//           </form>

//           <p className="mt-4 text-center text-sm text-muted-foreground">
//             {mode === "login"
//               ? "Don't have an account?"
//               : "Already have an account?"}{" "}
//             <button
//               className="text-blue-600 hover:underline"
//               onClick={() => setMode(mode === "login" ? "register" : "login")}
//             >
//               {mode === "login" ? "Register" : "Login"}
//             </button>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "../supabaseClient";
import toast, { Toaster } from "react-hot-toast";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  // ---------------------- HANDLE LOGIN / REGISTER ----------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      if (mode === "register") {
        // Register user
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: "http://localhost:5000/auth/callback",
          },
        });

        if (error) toast.error(error.message);
        else {
          toast.success("Registration successful! Check your email.");
          setMode("login");
        }
      } else {
        // Login user
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Login successful!");
          window.location.href = "/";
        }
      }
    } catch (err: any) {
      toast.error("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------- HANDLE FORGOT PASSWORD ----------------------
  const handleForgotPassword = async () => {
    if (!email.trim()) {
      toast.error("Enter your email first");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5000/reset-password", // your reset page
    });

    if (error) toast.error(error.message);
    else toast.success("Reset link sent! Check your inbox.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Toaster position="top-right" />

      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="space-y-2 text-center">
          {/* Centered Logo */}
          <img
            src="/ordoo.png"
            alt="Logo"
            className="h-13 w-13 mx-auto object-contain"
          />

          <CardTitle className="text-2xl font-semibold">
            {mode === "login" ? "Login" : "Register"}
          </CardTitle>

          <CardDescription>
            Enter your email and password to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : mode === "login"
                ? "Login"
                : "Register"}
            </Button>
          </form>

          {/* Forgot Password (only show in login mode) */}
          {mode === "login" && (
            <p className="mt-3 text-center">
              <button
                onClick={handleForgotPassword}
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </p>
          )}

          {/* Switch login/register */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login" ? "Register" : "Login"}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
