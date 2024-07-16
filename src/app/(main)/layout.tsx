import Footer from "@/app/_components/footer";
import Navbar from "@/components/shared/navbar";
import NotificationBar from "@/components/shared/notification-bar";
import { ReactNode } from "react";

interface MainGroupLayoutProps {
  children: ReactNode;
}

export default function MainGroupLayout({ children }: MainGroupLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 left-0 right-0 z-50">
        <Navbar />
        <NotificationBar />
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
