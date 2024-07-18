"use client";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarMobile from "./navbar-mobile";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      id="navbar"
      className="relative z-50 bg-white shadow-sm"
      aria-label="Main Navigation"
    >
      <div
        id="navbar-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-1 lg:py-2 flex justify-between items-center"
      >
        <div className="lg:hidden flex items-center gap-1">
          <NavbarMobile />
          <Logo className="text-xl" />
        </div>
        <div className="hidden lg:block">
          <Logo />
        </div>
        <ul
          id="nav-menu"
          className="hidden lg:flex items-center space-x-4"
          role="menubar"
        >
          <li id="nav-home" role="none">
            <Link
              href="/"
              className={cn(
                "font-medium text-base text-muted-foreground px-3 py-2 font-grotesk rounded-md h-10 hover:text-black transition-colors",
                pathname === "/" && "text-black"
              )}
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li id="nav-products" role="none">
            <Link
              href="/products"
              className={cn(
                "font-medium text-base text-muted-foreground px-3 py-2 font-grotesk rounded-md h-10 hover:text-black transition-colors",
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
                "font-medium text-base text-muted-foreground px-3 py-2 font-grotesk rounded-md h-10 hover:text-black transition-colors",
                pathname === "/contact-us" && "text-black",
                pathname.includes("/contact-us") && "text-black"
              )}
              role="menuitem"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <ul
          id="nav-actions"
          className="flex items-center space-x-1 h-5"
          role="menubar"
        >
          <li id="nav-search" role="none" className="hidden lg:block">
            <Button
              variant="ghost"
              className="h-fit w-fit px-3 py-2"
              aria-label="Search"
              role="button"
            >
              <Search size={24} />
            </Button>
          </li>
          <Separator
            id="separator-1"
            orientation="vertical"
            aria-hidden="true"
            className="hidden lg:block"
          />
          <li id="nav-user" role="none" className="hidden lg:block">
            <Button
              variant="ghost"
              className="h-fit w-fit px-3 py-2"
              aria-label="User Account"
              role="button"
            >
              <User size={24} />
            </Button>
          </li>
          <Separator
            id="separator-2"
            orientation="vertical"
            aria-hidden="true"
            className="hidden lg:block"
          />
          <li id="nav-cart" role="none">
            <Button
              variant="ghost"
              aria-label="Shopping Cart"
              role="button"
              asChild
            >
              <Link href={"/cart"} className="space-x-1">
                <ShoppingBag size={24} className="text-black" />
                <div
                  className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
                  aria-label="Cart Items Count"
                >
                  2
                </div>
                <span className="sr-only">2 items in the cart</span>
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
