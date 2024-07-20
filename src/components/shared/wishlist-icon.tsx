"use client";
import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const WishlistIconMobile: React.FC = () => {
  const wishlistItemsCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );
  const pathname = usePathname();

  return (
    <Link
      href="/wishlist"
      className="w-full flex items-center py-3 justify-between text-muted-foreground rounded-none"
      aria-label="Your wishlist"
      role="button"
    >
      <span
        className={cn(
          "mobile-navlink",
          pathname === "/wishlist" && "text-black",
          pathname.includes("/wishlist") && "text-black"
        )}
      >
        Wishlist
      </span>
      <div className="flex space-x-1">
        <Heart size={24} className="text-black" strokeWidth="1px" />
        <div
          className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
          aria-label="Wishlist Items Count"
        >
          <span className="text-sm"> {wishlistItemsCount}</span>
        </div>
      </div>
    </Link>
  );
};

export { WishlistIconMobile };
