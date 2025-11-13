import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import toast from "react-hot-toast";

export default function Login() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const accessToken = url.searchParams.get("access_token");
    const refreshToken = url.searchParams.get("refresh_token");
    const type = url.searchParams.get("type");

    if (accessToken && refreshToken && type === "signup") {
      supabase.auth
        .setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })
        .then(({ error }) => {
          if (error) {
            toast.error(
              "Error confirming your email. Please try login manually."
            );
          } else {
            toast.success("✅ Email confirmed! You can now log in.");
            // Clean the URL
            window.history.replaceState({}, document.title, "/login");
          }
        });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <h1 className="text-2xl font-bold">Login Page</h1>
      {/* You can render your AuthForm component here in login mode */}
    </div>
  );
}
