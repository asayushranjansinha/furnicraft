import { Card, CardContent } from "@/components/ui/card";
import CartContent from "../_components/cart-content";
import CartHeader from "../_components/cartHeader";
import { OrderSummary } from "../_components/order-summary";

export default function CartPage() {
  return (
    <main className="flex-1">
      <div className="grid lg:grid-cols-3 gap-6">
        <section className="h-full col-span-full lg:col-span-2">
          <Card className="h-full rounded-3xl shadow-md">
            <CartHeader />
            <CardContent className="p-6">
              <CartContent />
            </CardContent>
          </Card>
        </section>
        <aside className="col-span-full max-lg:max-w-sm lg:col-span-1">
          <OrderSummary />
        </aside>
      </div>
    </main>
  );
}
