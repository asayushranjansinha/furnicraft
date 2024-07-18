"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroCarouselImages as carouselItems } from "@/data/constants";
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
          {carouselItems.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative aspect-[16/9] w-full max-h-[512px] lg:max-h-[400px]">
                <Image
                  src={image.imageSrc}
                  alt={image.title}
                  fill

                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="/assets/images/banner-shop-placeholder.jpg"
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
