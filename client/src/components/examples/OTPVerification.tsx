import OTPVerification from "../OTPVerification";

export default function OTPVerificationExample() {
  return (
    <OTPVerification
      phoneNumber="+1 (555) 123-4567"
      onVerify={(otp) => console.log("OTP verified:", otp)}
      onResend={() => console.log("Resend OTP clicked")}
    />
  );
}
