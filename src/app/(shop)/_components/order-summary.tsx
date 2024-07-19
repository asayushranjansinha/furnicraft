import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PromoCodeSection } from "./promo-code-section";
import Link from "next/link";

type OrderSummaryProps = {
  total: number;
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => (
  <Card className="h-fit w-full bg-sky-50 rounded-3xl border-none">
    <CardContent className="pt-6">
      <div className="flex flex-col gap-4">
        <PromoCodeSection />
        <Separator />
        <dl className="space-y-2">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Subtotal:</dt>
            <dd className="text-muted-foreground">${total.toFixed(2)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Discount:</dt>
            <dd className="text-muted-foreground">-$0.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-medium text-base">Total:</dt>
            <dd className="font-medium text-base">${total.toFixed(2)}</dd>
          </div>
        </dl>
        <Button className="rounded-3xl" size="lg" asChild>
          <Link href="/checkout">Continue to checkout</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);
