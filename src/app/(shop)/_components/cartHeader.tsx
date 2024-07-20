"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { clearCart, selectCartItems } from "@/store/cart-slice";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  function handleClearCart() {
    console.log("Cart Cleared!!!");
    dispatch(clearCart());
  }

  return (
    <CardHeader className="flex flex-row items-center justify-between rounded-t-3xl">
      <CardTitle className="text-xl font-semibold">
        Your Cart
        <span className="text-sm font-medium text-muted-foreground ml-2">
          ({cartItems.length} items)
        </span>
      </CardTitle>
      {cartItems.length > 0 && (
        <Button
          className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
          variant="ghost"
          size="sm"
          aria-label="Clear cart"
          onClick={handleClearCart}
        >
          <Trash2 size={20} className="mr-2" />
          <span>Clear cart</span>
        </Button>
      )}
    </CardHeader>
  );
};
export default CartHeader;
