import Logo from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn("min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2")}
    >
      <div className="h-[430px] lg:min-h-screen relative p-6">
        <Image
          src="/assets/images/signup.png"
          alt="Signup"
          fill
          className="object-cover z-[-10]"
        />
        <div className="relative z-10 w-full text-center">
          <Logo />
        </div>
      </div>
      <div className="w-full flex-grow lg:min-h-screen lg:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
