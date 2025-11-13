import { useState } from "react";
import PhoneLogin from "@/components/PhoneLogin";
import OTPVerification from "@/components/OTPVerification";
import { useLocation } from "wouter";

export default function Loginn() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone);
    setStep("otp");
    console.log("OTP sent to:", phone);
  };

  const handleOTPVerify = (otp: string) => {
    console.log("OTP verified:", otp);
    setLocation("/");
  };

  const handleResendOTP = () => {
    console.log("Resending OTP to:", phoneNumber);
  };

  if (step === "otp") {
    return (
      <OTPVerification
        phoneNumber={phoneNumber}
        onVerify={handleOTPVerify}
        onResend={handleResendOTP}
      />
    );
  }

  return <PhoneLogin onSubmit={handlePhoneSubmit} />;
}
