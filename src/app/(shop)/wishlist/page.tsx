import { Card, CardContent } from "@/components/ui/card";
import WishlistHeader from "../_components/wishlist-header";
import WishlistContent from "../_components/wishlist-content";

export default function WishlistPage() {
  return (
    <main className="flex-1">
      <section className="h-full col-span-full lg:col-span-2">
        <Card className="h-full rounded-3xl shadow-md">
          <WishlistHeader />
          <CardContent className="p-6">
            <WishlistContent />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
