import Footer from "@/app/_components/footer";
import Navbar from "@/components/shared/navbar";
import { ReactNode } from "react";

interface MainGroupLayoutProps {
  children: ReactNode;
}

export default function MainGroupLayout({ children }: MainGroupLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
