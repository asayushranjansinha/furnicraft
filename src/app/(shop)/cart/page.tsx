"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Minus, Plus, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type CartItem = {
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

  const QuantityControl = ({ item }: { item: CartItem }) => (
    <div
      className="flex items-center space-x-2"
      role="group"
      aria-label={`Quantity control for ${item.name}`}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        aria-label={`Decrease quantity of ${item.name}`}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        className="w-16 text-center"
        type="number"
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        min={1}
        aria-label={`Quantity of ${item.name}`}
      />
      <Button
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        aria-label={`Increase quantity of ${item.name}`}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="col-span-full lg:col-span-2">
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="headline-7">
                Cart{" "}
                <span className="body-2 text-muted-foreground">
                  ({cartItems.length})
                </span>
              </CardTitle>
              <Button
                className="space-x-1 text-red-500"
                variant="ghost"
                size="sm"
                aria-label="Clear cart"
              >
                <X size={20} />
                <span>Clear cart</span>
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4" aria-label="Cart items">
                {cartItems.map((item, index) => (
                  <li key={item.id}>
                    <div
                      className={cn(
                        "p-4 border-b",
                        index === cartItems.length - 1 && "border-none pb-0"
                      )}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="object-cover rounded"
                          />
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end space-x-4">
                          <QuantityControl item={item} />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <aside className="col-span-full lg:col-span-1">
          <Card className="h-fit w-full bg-sky-50 rounded-3xl border-none">
            <CardHeader>
              <CardTitle className="headline-7">Promo code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="p-1 flex space-x-3 items-center justify-between border border-slate-400 rounded-full group focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-sky-50">
                  <Input
                    placeholder="Type here..."
                    aria-label="Enter promo code"
                    className="flex-grow bg-transparent rounded-full ring-0 outline-none border-none focus-visible::outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button className="rounded-full px-6 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-sky-50">
                    Apply
                  </Button>
                </div>
                <Separator />
                <dl>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground font-normal">
                      Subtotal:
                    </dt>
                    <dd className="text-muted-foreground font-normal">
                      ${total.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground font-normal">
                      Discount:
                    </dt>
                    <dd className="text-muted-foreground font-normal">
                      -$0.00
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="font-semibold headline-7">Total:</dt>
                    <dd className="font-semibold headline-7">
                      ${total.toFixed(2)}
                    </dd>
                  </div>
                </dl>
                <Button className="rounded-3xl" size="lg">
                  Continue to checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>

      </div>
    </main>
  );
}
