"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { clearWishlist, selectWishlistItemCount } from "@/store/wishlist-slice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const WishlistHeader = () => {
  const dispatch = useDispatch();
  const wishlistCount = useSelector(selectWishlistItemCount)

  function handleClearWishlist() {
    console.log("Wishlist Cleared!!!");
    dispatch(clearWishlist());
  }

  return (
    <CardHeader className="flex flex-row items-center justify-between rounded-t-3xl">
      <CardTitle className="text-xl font-semibold">
        Your Wishlist
        <span className="text-sm font-medium text-muted-foreground ml-2">
          ({wishlistCount})
        </span>
      </CardTitle>
      {wishlistCount > 0 && (
        <Button
          className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
          variant="ghost"
          size="sm"
          aria-label="Clear wishlist"
          onClick={handleClearWishlist}
        >
          <Trash2 size={20} className="mr-2" />
          <span>Clear Wishlist</span>
        </Button>
      )}
    </CardHeader>
  );
};
export default WishlistHeader;
