"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, ShoppingCart, User } from "lucide-react";

import Logo from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import NavbarMobile from "./navbar-mobile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      id="navbar"
      className="relative z-50 bg-background shadow-sm"
      aria-label="Main Navigation"
    >
      <div
        id="navbar-container"
        className="flex justify-between items-center py-2 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
      >
        <div className="flex items-center">
          <NavbarMobile />
          <Logo className="-ml-3 mt-[2px] sm:ml-0 sm:mt-0"/>
        </div>

        {/* Main Navigation */}
        <ul
          id="nav-menu"
          className="hidden sm:flex items-center space-x-4"
          role="menubar"
        >
          <li id="nav-home" role="none">
            <Link
              href="/"
              className={cn("main-navlink", pathname === "/" && "text-black")}
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li id="nav-products" role="none">
            <Link
              href="/products"
              className={cn(
                "main-navlink",
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
                "main-navlink",
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
          className="flex items-center space-x-1"
          role="menubar"
        >
          <li id="nav-search" role="none" className="hidden md:block">
            <Button variant="ghost" aria-label="Search" role="button">
              <Search size={24} strokeWidth="1px" />
            </Button>
          </li>
          <Separator
            id="separator-1"
            orientation="vertical"
            aria-hidden="true"
            className="hidden md:block h-5"
          />
          <li id="nav-user" role="none" className="hidden md:block">
            <Button
              variant="ghost"
              className="h-fit w-fit px-3 py-2"
              aria-label="User Account"
              role="button"
            >
              <User size={24} strokeWidth="1px" />
            </Button>
          </li>
          <Separator
            id="separator-2"
            orientation="vertical"
            aria-hidden="true"
            className="hidden md:block h-5"
          />
          <li id="nav-cart" role="none">
            <Button
              variant="ghost"
              aria-label="Shopping Cart"
              role="button"
              asChild
            >
              <Link href={"/cart"} className="space-x-1">
                <ShoppingCart
                  size={24}
                  className="text-black"
                  strokeWidth="1px"
                />
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
