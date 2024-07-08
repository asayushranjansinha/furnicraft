import NotificationBar from "@/components/shared/notification-bar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NotificationBar />
      <div className="">{children}</div>
    </div>
  );
}
