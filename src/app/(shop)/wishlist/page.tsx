"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { WishlistItemList } from "../_components/wishlist-item-list";

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Product 1",
      price: 19.99,
      image: "/assets/images/item-1.png",
    },
    {
      id: "2",
      name: "Product 2",
      price: 29.99,
      image: "/assets/images/item-2.png",
    },
    {
      id: "3",
      name: "Product 3",
      price: 39.99,
      image: "/assets/images/item-3.png",
    },
  ]);

  const removeItem = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <Card className="rounded-3xl shadow-md">
          <CardHeader className="flex flex-row items-center justify-between bg-gray-50 rounded-t-3xl">
            <CardTitle className="text-xl font-semibold">
              Your Wishlist{" "}
              <span className="text-sm font-normal text-muted-foreground">
                ({wishlistItems.length} items)
              </span>
            </CardTitle>
            {wishlistItems.length > 0 && (
              <Button
                className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                variant="ghost"
                size="sm"
                aria-label="Clear wishlist"
                onClick={clearWishlist}
              >
                <Trash2 size={18} className="mr-2" />
                <span>Clear wishlist</span>
              </Button>
            )}
          </CardHeader>
          <CardContent className="p-6">
            {wishlistItems.length > 0 ? (
              <WishlistItemList
                items={wishlistItems}
                removeItem={removeItem}
              />
            ) : (
              <div className="text-center text-gray-500">
                <p className="text-xl font-semibold mb-2">
                  Your wishlist is empty.
                </p>
                <p>Add items to your wishlist to save them for later.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}