"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { CartItemList } from "../_components/cart-item-list";
import { OrderSummary } from "../_components/order-summary";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "/assets/images/item-1.png",
    },
    {
      id: "2",
      name: "Product 2",
      price: 19.99,
      quantity: 2,
      image: "/assets/images/item-2.png",
    },
    {
      id: "3",
      name: "Product 3",
      price: 19.99,
      quantity: 2,
      image: "/assets/images/item-3.png",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="h-full col-span-full lg:col-span-2">
          <Card className="h-full rounded-3xl shadow-md">
            <CardHeader className="flex flex-row items-center justify-between bg-gray-50 rounded-t-3xl">
              <CardTitle className="text-xl font-semibold">
                Your Cart{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  ({cartItems.length} items)
                </span>
              </CardTitle>
              {cartItems.length > 0 && (
                <Button
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                  variant="ghost"
                  size="sm"
                  aria-label="Clear cart"
                  onClick={clearCart}
                >
                  <Trash2 size={18} className="mr-2" />
                  <span>Clear cart</span>
                </Button>
              )}
            </CardHeader>
            <CardContent className="p-6">
              {cartItems.length > 0 ? (
                <CartItemList
                  items={cartItems}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ) : (
                <div className="text-center text-gray-500">
                  <p className="text-xl font-semibold mb-2">
                    Your cart is empty.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <aside className="col-span-full lg:col-span-1">
          <OrderSummary total={total} />
        </aside>
      </div>
    </main>
  );
}
