"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8">
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnFocusIn: true,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[304px] md:h-[360px] w-full relative">
                <Image
                  src={"/assets/images/banner1.png"}
                  alt="Banner"
                  fill
                  objectFit="cover"
                  className="md:hidden"
                  aria-label={`Banner image ${index + 1}`}
                />
                <Image
                  src={"/assets/images/banner1-lg.png"}
                  alt="Banner"
                  fill
                  objectFit="cover"
                  className="hidden md:block"
                  aria-label={`Banner image ${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8" />
      </Carousel>

      <div className="mt-8 space-y-3 lg:flex lg:items-center lg:justify-between">
        <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-snug lg:leading-[1.1] xl:leading-[76px] tracking-tight lg:tracking-[-1px] xl:tracking-[-2px] font-poppins font-medium">
          Simply Unique/ Simply Better.
        </h2>
        <p className="w-full lg:w-1/2 text-lg md:text-xl lg:text-2xl font-inter text-neutral-700 lg:pl-8">
          Furnicraft is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019.
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
