import Navbar from "@/components/shared/navbar";
import NotificationBar from "@/components/shared/notification-bar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NotificationBar />
      <main className="flex-1 flex flex-col h-full pt-2">
        {children}
      </main>
    </div>
  );
}
