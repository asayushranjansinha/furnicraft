// _components/wishlist-item-list.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart } from "lucide-react";
import { WishlistItem } from "../wishlist/page";

type WishlistItemListProps = {
  items: WishlistItem[];
  removeItem: (id: string) => void;
};

export const WishlistItemList: React.FC<WishlistItemListProps> = ({
  items,
  removeItem,
}) => (
  <ul className="space-y-6" aria-label="Wishlist items">
    {items.map((item, index) => (
      <li
        key={item.id}
        className={`pb-6 ${
          index !== items.length - 1 ? "border-b border-gray-200" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.name} from wishlist`}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
