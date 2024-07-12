import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import LinkButton from "./shared/link-button";

const NewArrivals = () => {
  return (
    <section
      id="new-arrivals"
      className="overflow-hidden py-10 sm:py-12 lg:py-16"
      aria-labelledby="new-arrivals-heading"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex justify-between items-end">
          <h2 id="new-arrivals-heading" className="headline-5">
            New Arrivals
          </h2>
          <LinkButton href="#" title="More Products" />
        </div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-visible">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full overflow-visible"
            >
              <CarouselContent className="-ml-4 overflow-visible">
                {Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-[65%] sm:basis-[45%] md:basis-[35%] lg:basis-[28%] xl:basis-[22%]"
                  >
                    <div className="h-60 sm:h-72 lg:h-80 bg-secondary relative p-3">
                      <Image
                        src={`/assets/images/image${index + 1}.png`}
                        alt={`New Arrival ${index + 1}`}
                        fill
                        className="object-center"
                      />

                      <div className="w-full relative z-10 flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="px-2 py-1 bg-white hairline-1 uppercase rounded">
                            New
                          </div>
                          <div className="px-2 py-1 bg-green-500 text-white hairline-1 rounded">
                            -50%
                          </div>
                        </div>

                        <div className="h-8 w-8 shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Heart
                            size={20}
                            className="text-neutral-700"
                            aria-label="Add to Wishlist"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-secondary p-3">
                      <Button
                        className="w-full font-inter"
                        aria-label="Add to cart"
                      >
                        Add to cart
                      </Button>
                    </div>
                    <div className="p-1">
                      <div className="flex gap-[3px]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="fill-neutral-700 stroke-neutral-700"
                            size={20}
                            aria-label={`Rating Star ${starIndex + 1}`}
                          />
                        ))}
                      </div>
                      <h4 className="body-2-semibold">Lorem, ipsum.</h4>
                      <span className="caption-1 font-semibold">
                        <span>$199.00</span>
                        <span className="line-through font-normal text-neutral-500 ml-3">
                          $499.00
                        </span>
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious aria-label="Previous slide" />
              <CarouselNext aria-label="Next slide" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
