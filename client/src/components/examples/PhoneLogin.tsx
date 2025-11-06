import PhoneLogin from "../PhoneLogin";

export default function PhoneLoginExample() {
  return (
    <PhoneLogin 
      onSubmit={(phone) => console.log("Phone submitted:", phone)} 
    />
  );
}
