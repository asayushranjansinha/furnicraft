"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Divide as Hamburger } from "hamburger-react";

import Logo from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { CartIconMobile } from "./cart-icon";
import { WishlistIconMobile } from "./wishlist-icon";

const NavbarMobile = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center h-full -ml-3 sm:hidden">
        <Button
          asChild
          variant="ghost"
          role="button"
          aria-label="Open Navigation Menu"
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="flex flex-col px-4 py-3 overflow-hidden"
      >
        <SheetHeader className="py-1 border-b">
          <Logo />
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <SheetDescription className="not-sr-only"></SheetDescription>
        </SheetHeader>

        {/* Search box */}
        <div className="relative">
          <Input placeholder="Search..." className="pl-12" />
          <Button
            size={"icon"}
            variant={"ghost"}
            type="button"
            className="absolute left-0 top-0 bg-transparent hover:bg-transparent active:bg-transparent"
          >
            <Search size={24} strokeWidth="1px" />
          </Button>
        </div>

        <ul id="nav-menu" className="flex flex-col space-y-4" role="menubar">
          <li id="nav-home" role="none">
            <Link
              href="/"
              className={cn("mobile-navlink", pathname === "/" && "text-black")}
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li id="nav-products" role="none">
            <Link
              href="/products"
              className={cn(
                "mobile-navlink",
                pathname === "/products" && "text-black",
                pathname.includes("/products") && "text-black"
              )}
              role="menuitem"
            >
              Products
            </Link>
          </li>
          <li id="nav-contact" role="none">
            <Link
              href="/contact-us"
              className={cn(
                "mobile-navlink",
                pathname === "/contact-us" && "text-black",
                pathname.includes("/contact-us") && "text-black"
              )}
              role="menuitem"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Secondary Navigation */}
        <div className="mt-auto pt-3 border-t">
          <CartIconMobile />
          <WishlistIconMobile />
          <Button className="w-full mt-3" asChild>
            <Link href={"/auth/signin"}>Sign In</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
