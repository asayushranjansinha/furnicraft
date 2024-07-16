"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";

const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface ProductCarouselProps {
  customOptions?: EmblaOptionsType;
}

const Thumb: React.FC<{
  selected: boolean;
  index: number;
  onClick: () => void;
}> = ({ selected, index, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer ${selected ? "border-2 border-primary" : ""}`}
    >
      <CardContent className="flex aspect-square items-center justify-center p-1">
        <span className="text-lg font-semibold">{index + 1}</span>
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
          {SLIDES.map((index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div className="h-[40vh] sm:h-[60vh] bg-secondary max-h-[450px] flex items-center justify-center">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex">
          {SLIDES.map((index) => (
            <div
              className="flex-[0_0_25%] min-w-0 sm:flex-[0_0_20%] lg:flex-[0_0_16.666%] pl-2 first:pl-1 last:pr-1"
              key={index}
            >
              <Thumb
                selected={index === selectedIndex}
                index={index}
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
