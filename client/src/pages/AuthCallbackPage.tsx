// import React, { useEffect } from "react";
// import { useLocation } from "wouter";
// import { supabase } from "../supabaseClient";

// const AuthCallbackPage = () => {
//   const [, setLocation] = useLocation();

//   useEffect(() => {
//     async function handleRedirect() {
//       // Supabase automatically parses the URL after redirect
//       const { data: { session }, error } = await supabase.auth.getSession();

//       if (error) {
//         console.error("Error getting session:", error.message);
//       } else if (session) {
//         console.log("User session:", session);
//         // You can store the session in localStorage or context if needed
//       }

//       // Redirect after successful login
//       setLocation("/login"); // or "/dashboard"
//     }

//     handleRedirect();
//   }, [setLocation]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-lg text-gray-700">Logging you in...</p>
//     </div>
//   );
// };

// export default AuthCallbackPage;



import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useLocation } from "wouter";
import toast from "react-hot-toast";

const AuthCallbackPage = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    async function handleRedirect() {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        toast.error("Error confirming your email. Please try login manually.");
      } else if (session) {
        toast.success("✅ Email confirmed! You can now log in.");
      }

      // Redirect to login page
      setLocation("/login");
    }

    handleRedirect();
  }, [setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-700">Logging you in...</p>
    </div>
  );
};

export default AuthCallbackPage;
