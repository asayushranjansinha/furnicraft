"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const CartIcon: React.FC = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );

  return (
    <Button variant="ghost" aria-label="Shopping Cart" role="button" asChild>
      <Link href="/cart" className="space-x-1">
        <ShoppingCart size={24} className="text-black" strokeWidth="1px" />
        <div
          className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
          aria-label="Cart Items Count"
        >
          {cartItemsCount}
        </div>
        <span className="sr-only">{cartItemsCount} items in the cart</span>
      </Link>
    </Button>
  );
};

const CartIconMobile: React.FC = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const pathname = usePathname();

  return (
    <Link
      href="/cart"
      className="w-full flex items-center py-3 justify-between text-muted-foreground rounded-none"
      aria-label="Shopping Cart"
    >
      <span
        className={cn(
          "mobile-navlink",
          pathname === "/cart" && "text-black",
          pathname.includes("/cart") && "text-black"
        )}
      >
        Cart
      </span>
      <div className="flex space-x-1">
        <ShoppingCart size={24} className="text-black" strokeWidth="1px" />
        <div
          className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
          aria-label="Cart Items Count"
        >
          {cartItemsCount}
        </div>
      </div>
    </Link>
  );
};

export { CartIcon, CartIconMobile };

