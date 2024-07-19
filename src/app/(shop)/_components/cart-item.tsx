import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CartItem as CartItemType } from "../cart/page";
import { QuantityControl } from "./quantity-control";

type CartItemProps = {
  item: CartItemType;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
};

export const CartItem: React.FC<CartItemProps> = ({
  item,
  updateQuantity,
  removeItem,
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div className="flex items-center space-x-4">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          quality={85}
          //   placeholder="blur"
          //   blurDataURL={}
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          ${item.price.toFixed(2)} each
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <QuantityControl
        quantity={item.quantity}
        onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.name} from cart`}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  </div>
);
