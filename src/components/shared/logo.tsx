import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      aria-label="Furnicraft logo"
      id="logo"
      href={"/"}
      className={cn("logo", className)}
    >
      Furnicraft
    </Link>
  );
};
export default Logo;
