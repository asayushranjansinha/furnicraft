"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Divide as Hamburger } from "hamburger-react";

import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center h-full -ml-3">
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
          <Logo className="text-2xl text-start" />
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
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
            <Search size={20} />
          </Button>
        </div>
        <div className="h-full overflow-x-hidden overflow-y-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="home" asChild>
              <AccordionTrigger className="button-xs">Home</AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="shop">
              <AccordionTrigger className="button-xs">Shop</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="products">
              <AccordionTrigger className="button-xs">
                Products
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact-us">
              <AccordionTrigger className="button-xs">
                Contact Us
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Secondary Navigation */}
        <div className="mt-auto pt-3 border-t">
          <Link
            href="/cart"
            className="w-full flex items-center py-3 justify-between text-muted-foreground rounded-none"
            aria-label="Shopping Cart"
          >
            Cart
            <div className="flex space-x-1">
              <ShoppingBag size={24} className="text-black" />
              <div
                className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
                aria-label="Cart Items Count"
              >
                2
              </div>
            </div>
          </Link>
          <Link
            href="/wishlist"
            className="w-full flex items-center py-3 justify-between text-muted-foreground rounded-none"
            aria-label="Your wishlist"
            role="button"
          >
            Wishlist
            <div className="flex space-x-1">
              <Heart size={24} className="text-black" />
              <div
                className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
                aria-label="Wishlist Items Count"
              >
                2
              </div>
            </div>
          </Link>
          <Button className="w-full mt-3">Sign In</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
