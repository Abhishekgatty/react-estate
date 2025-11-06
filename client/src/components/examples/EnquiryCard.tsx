import EnquiryCard from "../EnquiryCard";

export default function EnquiryCardExample() {
  return (
    <div className="p-6 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <EnquiryCard
          id="1"
          name="John Smith"
          mobile="+1 (555) 123-4567"
          location="Beverly Hills, CA"
          type="buy"
          budget="$1,500,000"
          date="Nov 10, 2025"
          referredBy="Sarah Johnson"
          remarks="Looking for a luxury villa with pool"
          onEdit={(id) => console.log("Edit:", id)}
          onDelete={(id) => console.log("Delete:", id)}
          onCall={(mobile) => console.log("Call:", mobile)}
        />
        <EnquiryCard
          id="2"
          name="Mike Davis"
          mobile="+1 (555) 987-6543"
          location="Manhattan, NY"
          type="sell"
          sellingRate="$850,000"
          date="Nov 12, 2025"
          remarks="Downtown apartment, urgent sale"
          onEdit={(id) => console.log("Edit:", id)}
          onDelete={(id) => console.log("Delete:", id)}
          onCall={(mobile) => console.log("Call:", mobile)}
        />
      </div>
    </div>
  );
}
