import { Button } from "@/components/ui/button";
import { Bell, Menu, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AppHeaderProps {
  title: string;
  onMenuClick?: () => void;
  notificationCount?: number;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
}

export default function AppHeader({
  title,
  onMenuClick,
  notificationCount = 0,
  onNotificationClick,
  onProfileClick
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-card border-b border-card-border">
      <div className="flex items-center justify-between h-16 px-4 gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden shrink-0"
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-lg md:text-xl font-semibold truncate">{title}</h1>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onNotificationClick}
            data-testid="button-notifications"
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                data-testid="badge-notification-count"
              >
                {notificationCount}
              </Badge>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onProfileClick}
            data-testid="button-profile"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
