"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/store/store";
import {
  removeFromWishlist,
  selectWishlistItemCount,
  selectWishlistItems,
} from "@/store/wishlist-slice";
import { moveToCartThunk } from "@/store/wishlist-thunk";
import { WishlistItem } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const WishlistContent = () => {
  const wishlistItems = useSelector(selectWishlistItems);
  const wishlistItemsCount = useSelector(selectWishlistItemCount);
  if (wishlistItemsCount === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-medium">Your wishlist is empty</p>
        <Button asChild variant={"secondary"}>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }
  return (
    <ul className="space-y-6" aria-label="Wishlist items">
      {wishlistItems.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "pb-6",
            index !== wishlistItems.length - 1 && "border-b border-gray-200"
          )}
        >
          <WishlistItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default WishlistContent;

type WishlistItemProp = {
  item: WishlistItem;
};

const WishlistItem: React.FC<WishlistItemProp> = ({ item }) => {
  const dispatch = useAppDispatch();

  function handleRemoveFromWishlist() {
    dispatch(removeFromWishlist(item.id));
  }

  function handleMoveToCart() {
    dispatch(moveToCartThunk(item.id));
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start space-x-4">
        <WishlistItemImage imageSrc={item.image} altText={item.name} />
        <WishlistItemDetails {...item} />
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" onClick={handleMoveToCart}>
          Move to Cart
        </Button>
        <Button variant="ghost" size="sm" onClick={handleRemoveFromWishlist}>
          <X size={20} />
        </Button>
      </div>
    </div>
  );
};
type WishlistItemImageProp = {
  imageSrc: string;
  altText: string;
};
const WishlistItemImage: React.FC<WishlistItemImageProp> = ({
  imageSrc,
  altText,
}) => {
  return (
    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="80px"
        quality={85}
        className="object-cover transition-transform hover:scale-105"
      />
    </div>
  );
};

const WishlistItemDetails: React.FC<Omit<WishlistItem, "addedAt" | "image">> = (
  item
) => {
  const discountedPrice = item.price * (1 - item.currentDiscount / 100);

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-sm text-muted-foreground">Brand: {item.brand}</p>
      <p className="text-sm text-muted-foreground">Category: {item.category}</p>
      <div className="mt-1">
        <span className="text-base font-medium">
          ${discountedPrice.toFixed(2)}
        </span>
        {item.currentDiscount > 0 && (
          <>
            <span className="text-sm text-muted-foreground line-through ml-2">
              ${item.price.toFixed(2)}
            </span>
            <span className="text-sm text-green-600 font-medium ml-2">
              {item.currentDiscount}% off
            </span>
          </>
        )}
      </div>
    </div>
  );
};
