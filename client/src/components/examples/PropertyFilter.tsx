import PropertyFilter from "../PropertyFilter";

export default function PropertyFilterExample() {
  return (
    <div className="p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <PropertyFilter
          onFilter={(filters) => console.log("Filters applied:", filters)}
        />
      </div>
    </div>
  );
}
