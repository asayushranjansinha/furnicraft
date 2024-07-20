import LinkButton from "@/components/shared/link-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { mockProducts } from "@/data/constants";
import { CompactCard } from "./shared/product-cards";

const NewArrivals = () => {
  return (
    <section
      id="new-arrivals"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
      aria-labelledby="new-arrivals-heading"
    >
      <header className="flex justify-between items-end">
        <h2
          id="new-arrivals-heading"
          className="text-2xl font-medium sm:text-3xl tracking-tight"
        >
          New Arrivals
        </h2>
        <LinkButton href="#" title="See more" className="text-base" />
      </header>

      <div className="overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full overflow-visible py-4 px-1 select-none"
        >
          <CarouselContent className="-ml-4 overflow-visible">
            {mockProducts.map((product) => {
              return (
                <CarouselItem
                  className="pl-4 basis-[80%] sm:basis-[45%] md:basis-[35%] lg:basis-[28%] xl:basis-[22%]"
                  key={product.id}
                >
                  <CompactCard product={product} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous slide" />
          <CarouselNext aria-label="Next slide" />
        </Carousel>
      </div>
    </section>
  );
};

export default NewArrivals;
