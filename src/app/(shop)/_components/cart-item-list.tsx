import React from "react";
import { cn } from "@/lib/utils";
import { CartItem as CartItemType} from "../cart/page";
import { CartItem } from "./cart-item";

type CartItemListProps = {
  items: CartItemType[];
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
};

export const CartItemList: React.FC<CartItemListProps> = ({
  items,
  updateQuantity,
  removeItem,
}) => (
  <ul className="space-y-6" aria-label="Cart items">
    {items.map((item, index) => (
      <li
        key={item.id}
        className={cn(
          "pb-6",
          index !== items.length - 1 && "border-b border-gray-200"
        )}
      >
        <CartItem
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      </li>
    ))}
  </ul>
);