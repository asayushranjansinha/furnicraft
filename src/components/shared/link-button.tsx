import { ReactNode } from "react";
import { Button } from "../ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  title: string;
  Icon?: LucideIcon;
  ariaLabel?: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  title = "See More",
  Icon = ArrowRight,
  ariaLabel,
  className,
}) => {
  return (
    <Button
      asChild
      className="no-underline hover:no-underline !p-0 h-auto relative group"
      variant={"link"}
    >
      <Link
        href={href}
        className={cn("flex items-center px-0 py-1", className)}
        aria-label={ariaLabel || `${title} (opens in a new tab)`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={cn("mr-1 font-medium text-lg font-poppins", className)}
        >
          {title}
        </span>
        <Icon size={20} aria-hidden="true" />
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
        <span className="sr-only">(opens in a new tab)</span>
      </Link>
    </Button>
  );
};

export default LinkButton;
