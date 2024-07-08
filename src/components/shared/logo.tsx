import { cn } from "@/lib/utils";
import { monainn } from "@/assets/fonts";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={cn("logo text-3xl tracking-wider", monainn.className)}
    >
      Furnicraft
    </Link>
  );
};
export default Logo;
