"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PRODUCTDETAILS = {
  id: 18,
  name: "Tray Table",
  price: 99.99,
  description:
    "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
  category: "Furniture",
  currentDiscount: 20,
  brand: "ModernLiving",
  stock: 25,
  rating: 4.4,
  images: [
    "/assets/images/tray-table-1.jpg",
    "/assets/images/tray-table-2.jpg",
    "/assets/images/tray-table-3.jpg",
    "/assets/images/tray-table-4.jpg",
    "/assets/images/tray-table-5.jpg",
    "/assets/images/tray-table-6.jpg",
    "/assets/images/tray-table-7.jpg",
    "/assets/images/tray-table-8.jpg",
    "/assets/images/tray-table-9.jpg",
    "/assets/images/tray-table-10.jpg",
  ],
  weight: 4,
  sku: "LU-FL-018",
  reviews: 85,
};

interface ProductCarouselProps {
  customOptions?: EmblaOptionsType;
}

const Thumb: React.FC<{
  selected: boolean;
  imgSrc: string;
  onClick: () => void;
}> = ({ selected, imgSrc, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer ${selected ? "border-2 border-primary" : ""}`}
    >
      <CardContent className="flex aspect-square items-center justify-center !p-0 overflow-hidden">
        <Image
          src={imgSrc}
          alt="Thumbnail"
          width={100}
          height={100}
          className="w-full h-full rounded-lg"
        />
      </CardContent>
    </Card>
  );
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ customOptions }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(customOptions);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
    return () => {
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <section className="overflow-hidden">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex">
          {PRODUCTDETAILS.images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[40vh] sm:h-[60vh] bg-secondary max-h-[450px] flex items-center justify-center">
                <Image src={image} alt={PRODUCTDETAILS.name} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex">
          {PRODUCTDETAILS.images.map((image, index) => (
            <div
              className="flex-[0_0_25%] min-w-0 sm:flex-[0_0_20%] lg:flex-[0_0_16.666%] pl-2"
              key={index}
            >
              <Thumb
                selected={index === selectedIndex}
                imgSrc={image}
                onClick={() => onThumbClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
