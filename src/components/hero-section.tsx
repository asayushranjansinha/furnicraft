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
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
              <div className="relative aspect-[16/9] w-full max-h-[548px] overflow-hidden">
                <Image
                  className="relative hidden md:block object-cover"
                  src={image.imageSrcLarge}
                  alt={image.altText || image.title}
                  fill
                  sizes="(min-width: 768px) 1280px"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="/assets/images/banner-shop.png"
                />
                <Image
                  src={image.imageSrcSmall}
                  alt={image.altText || image.title}
                  fill
                  sizes="(max-width: 767px) 640px"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="/assets/images/banner-shop.png"
                  className="relative md:hidden object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="w-full">
                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
                      {image.title}
                    </h2>
                    <Link href={image.link}>
                      <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8" />
      </Carousel>

      <div className="mt-8 space-y-6 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:space-x-8 bg-blue-50 p-8 rounded-3xl">
        <h1 className="w-full lg:w-1/2 text-3xl font-semibold font-poppins text-gray-900 lg:text-4xl lg:text-left text-center">
          Simply Unique/ Simply Better.
        </h1>
        <p className="w-full lg:w-1/2 font-poppins text-base text-gray-600 lg:text-left text-center">
          Transforming spaces with timeless furniture and exquisite decor,
          Furnicraft has been elevating homes and interiors in India since 2019.
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
