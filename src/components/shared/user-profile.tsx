"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingBag, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

const UserProfile: React.FC = () => {
  const router = useRouter();

  const handleProfileShortcut = useCallback(() => {
    // Navigate to profile page or open profile modal
    console.log("Profile shortcut activated");
  }, []);

  const handleWishlistShortcut = useCallback(() => {
    router.push("/wishlist");
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Shift+ P
      if (event.shiftKey && event.key === "P") {
        event.preventDefault();
        handleProfileShortcut();
      }
      // Check for Shift  + W
      if (event.shiftKey && event.key === "W") {
        event.preventDefault();
        handleWishlistShortcut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleWishlistShortcut, handleProfileShortcut]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-fit w-fit px-3 py-2"
          aria-label="User Account"
          role="button"
        >
          <User size={24} strokeWidth="1px" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfileShortcut}>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleWishlistShortcut}>
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span>Wishlist</span>
          <DropdownMenuShortcut>⇧W</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
