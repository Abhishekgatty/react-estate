import AddPropertyForm from "../AddPropertyForm";

export default function AddPropertyFormExample() {
  return (
    <div className="p-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <AddPropertyForm
          onSubmit={(data) => console.log("Property added:", data)}
          onCancel={() => console.log("Cancel clicked")}
        />
      </div>
    </div>
  );
}
