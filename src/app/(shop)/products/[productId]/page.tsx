import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Minus, Plus, Star } from "lucide-react";
import ProductCarousel from "./product-carousel";

const ProductDetailPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Product section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 ">
        {/* Image */}
        <ProductCarousel />
        {/* Detail */}
        <section className="flex flex-col space-y-3 py-4 sm:py-6">
          {/* Reviews and ratings */}
          <div className="flex items-center flex-wrap">
            <div className="flex">
              <Star size={20} className="stroke-teal-500 fill-teal-500" />
              <Star size={20} className="stroke-teal-500 fill-teal-500" />
              <Star size={20} className="stroke-teal-500 fill-teal-500" />
              <Star size={20} className="stroke-teal-500 fill-teal-500" />
              <Star size={20} className="stroke-teal-500 fill-teal-500" />
            </div>
            <span className="ml-2 text-muted-foreground">11 Reviews</span>
          </div>

          <h1 className="headline-5">Tray Table</h1>

          <h4 className="body-2 text-muted-foreground">
            Buy one or buy a few and make every space where you sit more
            convenient. Light and easy to move around with removable tray top,
            handy for serving snacks.
          </h4>

          <div className="flex items-center flex-wrap headline-6">
            <span>$199</span>
            <span className="line-through ml-2 text-muted-foreground">
              $499
            </span>
          </div>
          <Separator />

          <OfferTimer />

          <div className="flex flex-row items-center space-x-3">
            <div className="flex items-center gap-0 bg-secondary rounded-md w-fit">
              <Button variant={"ghost"}>
                <Minus />
              </Button>
              <span className="px-3 text-sm font-semibold">1</span>
              <Button variant={"ghost"}>
                <Plus />
              </Button>
            </div>
            <Button
              variant={"outline"}
              className="w-full sm:w-auto sm:flex-grow"
            >
              <Heart size={20} className="mr-1" />
              Wishlist
            </Button>
          </div>

          <Button className="w-full sm:w-auto">Add to cart</Button>
        </section>
      </section>
    </div>
  );
};
export default ProductDetailPage;

function OfferTimer() {
  return (
    <div className="space-y-3">
      <h3 className="headline-7 -mb-1">Offer expires in </h3>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <div className="h-[60px] w-[60px] headline-6 flex items-center justify-center font-medium font-poppins bg-secondary">
            02
          </div>
          <div>
            <span className="text-muted-foreground text-xs font-medium">
              Days
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[60px] w-[60px] headline-6 flex items-center justify-center font-medium font-poppins bg-secondary">
            12
          </div>
          <div>
            <span className="text-muted-foreground text-xs font-medium">
              Hours
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[60px] w-[60px] headline-6 flex items-center justify-center font-medium font-poppins bg-secondary">
            45
          </div>
          <div>
            <span className="text-muted-foreground text-xs font-medium">
              Minutes
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[60px] w-[60px] headline-6 flex items-center justify-center font-medium font-poppins bg-secondary">
            05
          </div>
          <div>
            <span className="text-muted-foreground text-xs font-medium">
              Seconds
            </span>
          </div>
        </div>
      </div>
      <Separator className="" />
    </div>
  );
}
