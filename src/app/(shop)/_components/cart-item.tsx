"use client";
import React from "react";
import Image from "next/image";
import { QuantityControl } from "./quantity-control";
import { RemoveItemDialog } from "./remove-item-dialog";
import { CartItem as CartItemType } from "../cart/page";

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  updateQuantity,
  removeItem,
}) => {
  function addToWishlist() {
    console.log("Item added to wishlist");
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center space-x-4">
        <CartItemImage item={item} />
        <CartItemDetails item={item} />
      </div>
      <div className="flex items-center space-x-4 justify-between">
        <QuantityControl
          quantity={item.quantity}
          onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
        />
        <RemoveItemDialog
          item={item}
          removeItem={removeItem}
          addToWishlist={addToWishlist}
        />
      </div>
    </div>
  );
};

const CartItemImage: React.FC<{ item: CartItemType }> = ({ item }) => (
  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="80px"
      quality={85}
      className="object-cover transition-transform hover:scale-105"
    />
  </div>
);

const CartItemDetails: React.FC<{ item: CartItemType }> = ({ item }) => (
  <div>
    <h3 className="font-semibold text-lg">{item.name}</h3>
    <p className="text-base text-muted-foreground mt-1">
      ${item.price.toFixed(2)}
    </p>
    <dl>
      <div className="flex items-center justify-between space-x-3">
        <dt className="text-muted-foreground font-medium">Total:</dt>
        <dd className="text-muted-foreground font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </dd>
      </div>
    </dl>
  </div>
);
