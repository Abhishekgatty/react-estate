import AppHeader from "../AppHeader";

export default function AppHeaderExample() {
  return (
    <div className="bg-background min-h-screen">
      <AppHeader
        title="Dashboard"
        notificationCount={3}
        onMenuClick={() => console.log("Menu clicked")}
        onNotificationClick={() => console.log("Notifications clicked")}
        onProfileClick={() => console.log("Profile clicked")}
      />
      <div className="p-6">
        <p className="text-muted-foreground">Header content appears above</p>
      </div>
    </div>
  );
}
