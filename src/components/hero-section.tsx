"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Poppins } from "next/font/google";

import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-poppins",
});

const HeroSection = () => {
  return (
    <section className="relative">
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
              <div className="h-[304px] md:[440px] lg:h-[500px] w-full relative">
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

      <div className="flex flex-wrap items-center justify-between mt-4">
        <h2
          className={cn(
            "lg:w-1/2  headline-4 lg:text-7xl lg:leading-[76px] lg:tracking-[-2px] font-poppins font-medium",
            poppins.className
          )}
        >
          Simply Unique/ Simply Better.
        </h2>
        <p className="lg:w-1/2 caption-1 lg:body-2-semibold text-neutral-700 text-wrap">
          Furnicraft is a gift & decorations store based in HCMC, <br />{" "}
          Vietnam. Est since 2019.
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
