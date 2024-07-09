import { cn } from "@/lib/utils";
import { monainn } from "@/assets/fonts";
import Link from "next/link";

const Logo = ({className}:{className?:string}) => {
  return (
    <Link
      aria-label="Furnicraft logo"
      id="logo"
      href={"/"}
      className={cn("logo text-3xl tracking-wider", monainn.className,className)}
    >
      Furnicraft
    </Link>
  );
};
export default Logo;
