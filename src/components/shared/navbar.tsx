"use client";

import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import NavbarMobile from "./navbar-mobile";
import CartFlyout from "./cart-flyout";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      id="navbar"
      className="sticky top-0 left-0 right-0 border-b z-40 bg-white"
      aria-label="Main Navigation"
    >
      <div
        id="navbar-container"
        className="h-16 py-2 max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex justify-between items-center"
      >
        <div className="lg:hidden flex items-center space-x-1">
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
                "font-medium text-base text-muted-foreground px-3 py-2 rounded-md h-10 hover:text-black transition-colors",
                space_grotesk.className,
                pathname === "/" && "text-black",
                pathname.includes("/") && pathname !== "/" && "text-black"
              )}
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li id="nav-shop" role="none">
            <Link
              href="/shop"
              className={cn(
                "font-medium text-base text-muted-foreground px-3 py-2 rounded-md h-10 hover:text-black transition-colors",
                space_grotesk.className,
                pathname === "/shop" && "text-black",
                pathname.includes("/shop") && pathname !== "/" && "text-black"
              )}
              role="menuitem"
            >
              Shop
            </Link>
          </li>
          <li id="nav-products" role="none">
            <Link
              href="/products"
              className={cn(
                "font-medium text-base text-muted-foreground px-3 py-2 rounded-md h-10 hover:text-black transition-colors",
                space_grotesk.className,
                pathname === "/products" && "text-black",
                pathname.includes("/products") &&
                  pathname !== "/" &&
                  "text-black"
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
                "font-medium text-base text-muted-foreground px-3 py-2 rounded-md h-10 hover:text-black transition-colors",
                space_grotesk.className,
                pathname === "/contact-us" && "text-black",
                pathname.includes("/contact-us") &&
                  pathname !== "/" &&
                  "text-black"
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
              className="sm:flex hidden space-x-1"
              aria-label="Shopping Cart"
              role="button"
            >
              <ShoppingBag size={24} className="text-black" />
              <div
                className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
                aria-label="Cart Items Count"
              >
                2
              </div>
              <span className="sr-only">2 items in the cart</span>
            </Button>
            <div className="sm:hidden">
              <CartFlyout />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
