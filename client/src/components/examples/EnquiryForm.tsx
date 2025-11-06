import EnquiryForm from "../EnquiryForm";

export default function EnquiryFormExample() {
  return (
    <div className="p-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <EnquiryForm
          onSubmit={(data) => console.log("Enquiry submitted:", data)}
          onCancel={() => console.log("Cancel clicked")}
        />
      </div>
    </div>
  );
}
