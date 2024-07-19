import LinkButton from "@/components/shared/link-button";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { mockProducts } from "@/data/constants";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const NewArrivals = () => {
  return (
    <section
      id="new-arrivals"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8"
    >
      <div className="flex justify-between items-end">
        <h2 id="new-arrivals-heading" className="headline-5">
          New Arrivals
        </h2>
        <LinkButton href="#" title="More Products" />
      </div>

      <div className="py-6 overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-4 overflow-visible">
            {mockProducts.map((product) => {
              const discount = (product.price * product.currentDiscount) / 100;
              const newPrice = product.price - discount;

              return (
                <CarouselItem
                  className="pl-4 basis-[80%] sm:basis-[45%] md:basis-[35%] lg:basis-[28%] xl:basis-[22%]"
                  key={product.id}
                >
                  <Link href={`/products/${product.id}`}>
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 22vw"
                          quality={85}
                          className="object-cover"
                        />
                        {product.currentDiscount > 0 && (
                          <Badge
                            variant={"secondary"}
                            className="absolute top-2 left-2 text-primary"
                          >
                            {product.currentDiscount}% Off
                          </Badge>
                        )}
                      </div>
                      <CardContent className="flex-1 p-4 flex flex-col">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="mt-auto space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                              <span className="text-xl font-bold">
                                ${newPrice.toFixed(2)}
                              </span>
                              {product.currentDiscount > 0 && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.price.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                              <span className="font-semibold">
                                {product.rating}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="truncate mr-2">
                              Brand: {product.brand}
                            </span>
                            <span>Stock: {product.stock}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button className="flex-1" variant="default">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="icon">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
