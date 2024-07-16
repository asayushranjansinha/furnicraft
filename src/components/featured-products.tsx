import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import LinkButton from "./shared/link-button";

const FeaturedProducts = () => {
  return (
    <section
      id="featured-products"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="h-[23rem] lg:h-[34rem] bg-secondary relative p-8">
          <Image
            src={"/assets/images/sofa-lg.png"}
            alt="Living Room"
            fill
            objectFit="contain"
          />
          <div className="relative z-10 space-y-3">
            <h3 className={"font-medium headline-5"}>Living Room</h3>
            <LinkButton href="#" title="Shop Now" />
          </div>
        </div>
        <div className="grid gap-6">
          <div className="h-[10.75rem] lg:h-[16.25rem] relative w-full bg-secondary p-8">
            <Image
              src={"/assets/images/bedroom.png"}
              alt="Bedroom"
              fill
              objectFit="contain"
            />
            <div className="absolute bottom-8 z-10 space-y-3">
              <h3 className={"font-medium headline-5"}>Bedroom</h3>
              <LinkButton href="#" title="Shop Now" />
            </div>
          </div>
          <div className="h-[10.75rem] lg:h-[16.25rem] relative w-full bg-secondary p-8">
            <Image
              src={"/assets/images/kitchen.png"}
              alt="Kitchen"
              fill
              objectFit="contain"
            />
            <div className="absolute bottom-8 z-10 space-y-3">
              <h3 className={"font-medium headline-5"}>Kitchen</h3>
              <LinkButton href="#" title="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
