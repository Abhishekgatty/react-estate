import ProfileSettings from "../ProfileSettings";

export default function ProfileSettingsExample() {
  return (
    <div className="p-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <ProfileSettings
          onLogout={() => console.log("Logout clicked")}
        />
      </div>
    </div>
  );
}
