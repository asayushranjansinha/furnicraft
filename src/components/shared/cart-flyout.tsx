"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const CartFlyout = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden h-full flex items-center" asChild>
        <Button
          variant="ghost"
          className="space-x-1"
          aria-label="Shopping Cart"
        >
          <ShoppingBag size={24} className="text-black" />
          <div
            className="bg-black text-white h-6 w-6 border rounded-full shrink-0 flex items-center justify-center font-bold"
            aria-label="Cart Items Count"
          >
            2
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col px-4 py-3 overflow-hidden"
      >
        <SheetHeader className="py-1 border-b">
          <SheetTitle>
            Cart(4)
            <span className="sr-only">2 items in the cart</span>
          </SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="h-full overflow-x-hidden overflow-y-auto">
          <ul className="">
            <li className="py-6 border-b">
              <div className="flex items-stretch gap-x-4 p-1">
                <div className="relative w-20 border-2">
                  <Image
                    src={"/assets/images/item-1.png"}
                    alt="Item-1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 py-2">
                  <div className="flex justify-between">
                    <h4 className="caption-1 font-semibold">Tray Table</h4>
                    <span className="caption-1 font-semibold">$19.19</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="caption-2 text-muted-foreground">
                      <span>Color:</span>
                      <span> Black</span>
                    </div>
                    <Button variant={"ghost"} size={"sm"}>
                      <X size={20} className="text-black" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-[2px] rounded-md border border-black w-fit">
                    <Button variant={"ghost"} size={"icon"}>
                      <Minus />
                    </Button>
                    <span>1</span>
                    <Button variant={"ghost"} size={"icon"}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-6 border-b">
              <div className="flex items-stretch gap-x-4 p-1">
                <div className="relative w-20 border-2">
                  <Image
                    src={"/assets/images/item-2.png"}
                    alt="Item-2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 py-2">
                  <div className="flex justify-between">
                    <h4 className="caption-1 font-semibold">Tray Table</h4>
                    <span className="caption-1 font-semibold">$19.19</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="caption-2 text-muted-foreground">
                      <span>Color:</span>
                      <span> Red</span>
                    </div>
                    <Button variant={"ghost"} size={"sm"}>
                      <X size={20} className="text-black" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-[2px] rounded-md border border-black w-fit">
                    <Button variant={"ghost"} size={"icon"}>
                      <Minus />
                    </Button>
                    <span>1</span>
                    <Button variant={"ghost"} size={"icon"}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-6 border-b">
              <div className="flex items-stretch gap-x-4 p-1">
                <div className="relative w-20 border-2">
                  <Image
                    src={"/assets/images/item-3.png"}
                    alt="Item-3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 py-2">
                  <div className="flex justify-between">
                    <h4 className="caption-1 font-semibold">Table Lamp</h4>
                    <span className="caption-1 font-semibold">$39.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="caption-2 text-muted-foreground">
                      <span>Color:</span>
                      <span> Gold</span>
                    </div>
                    <Button variant={"ghost"} size={"sm"}>
                      <X size={20} className="text-black" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-[2px] rounded-md border border-black w-fit">
                    <Button variant={"ghost"} size={"icon"}>
                      <Minus />
                    </Button>
                    <span>1</span>
                    <Button variant={"ghost"} size={"icon"}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-6 border-b">
              <div className="flex items-stretch gap-x-4 p-1">
                <div className="relative w-20 border-2">
                  <Image
                    src={"/assets/images/item-3.png"}
                    alt="Item-3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 py-2">
                  <div className="flex justify-between">
                    <h4 className="caption-1 font-semibold">Table Lamp</h4>
                    <span className="caption-1 font-semibold">$39.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="caption-2 text-muted-foreground">
                      <span>Color:</span>
                      <span> Gold</span>
                    </div>
                    <Button variant={"ghost"} size={"sm"}>
                      <X size={20} className="text-black" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-[2px] rounded-md border border-black w-fit">
                    <Button variant={"ghost"} size={"icon"}>
                      <Minus />
                    </Button>
                    <span>1</span>
                    <Button variant={"ghost"} size={"icon"}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between border-b py-2">
            <span className="body-2">Subtotal</span>
            <span className="body-2-semibold">$99.00</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="headline-7">Subtotal</span>
            <span className="headline-7">$99.00</span>
          </div>
          <div className="flex">
            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default CartFlyout;
