"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { selectCartTotal } from "@/store/cart-slice";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PromoCodeSection } from "./promo-code-section";


export const OrderSummary: React.FC = () => {
  const cartTotal = useSelector(selectCartTotal);
  const [discountRate, setDiscountRate] = useState<number>(0);

  function handlePromoCodeApplied(rate: number, code: string) {
    setDiscountRate(rate);
  }

  function handlePromoCodeRemoved() {
    setDiscountRate(0);
  }

  function getPayableAmount(): number {
    let newAmt = cartTotal * (1 - discountRate / 100);
    return parseFloat(newAmt.toFixed(2));
  }

  function getDiscountAmount(): number {
    let discountAmt = cartTotal * (discountRate / 100);
    return parseFloat(discountAmt.toFixed(2));
  }

  return (
    <Card className="h-fit w-full bg-sky-50 rounded-3xl border-none">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <PromoCodeSection 
            onPromoCodeApplied={handlePromoCodeApplied}
            onPromoCodeRemoved={handlePromoCodeRemoved}
          />
          <Separator />
          <dl className="space-y-2">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Subtotal:</dt>
              <dd className="text-muted-foreground">${cartTotal.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Discount:</dt>
              <dd className="text-muted-foreground">-${getDiscountAmount().toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-base">Total:</dt>
              <dd className="font-medium text-base">${getPayableAmount().toFixed(2)}</dd>
            </div>
          </dl>
          <Button className="rounded-3xl" size="lg" asChild>
            <Link href="/checkout">Continue to checkout</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

