import StarRating from "@/components/shared/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mockProducts } from "@/data/constants";
import { ProductListViewNameEnum } from "@/types";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductList = ({
  viewOption,
}: {
  viewOption: ProductListViewNameEnum;
}) => {
  switch (viewOption) {
    case ProductListViewNameEnum.GridView:
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {mockProducts.map((product) => {
            const discount = (product.price * product.currentDiscount) / 100;
            const newPrice = product.price - discount;

            return (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-square">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      quality={85}
                      className="object-cover"
                    />
                    {product.currentDiscount > 0 && (
                      <div className="absolute top-2 left-2 z-10">
                        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase rounded-full">
                          {product.currentDiscount}% Off
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-2 mt-auto">
                      <div className="flex flex-col items-start">
                        <span className="text-lg font-medium font-poppins">
                          ${newPrice.toFixed(2)}
                        </span>
                        {product.currentDiscount > 0 && (
                          <span className="text-sm font-poppins text-muted-foreground line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="font-semibold text-sm">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      );
    case ProductListViewNameEnum.CompactView:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockProducts.map((product) => {
            const discount = (product.price * product.currentDiscount) / 100;
            const newPrice = product.price - discount;
            return (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 22vw"
                      quality={85}
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
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <span className="text-lg font-medium font-poppins">
                            ${newPrice.toFixed(2)}
                          </span>
                          {product.currentDiscount > 0 && (
                            <span className="text-sm font-poppins text-muted-foreground line-through">
                              ${product.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                          <span className="text-sm font-semibold">
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
                        <Button className="flex-1 text-sm" variant="default">
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
            );
          })}
        </div>
      );
    case ProductListViewNameEnum.ListView:
      return (
        <div className="flex flex-col gap-2">
          {mockProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="hover:shadow-md transition-all duration-200 group">
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={48}
                        height={48}
                        quality={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors duration-200">
                        {product.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="text-xs transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      ${product.price.toFixed(2)}
                    </Badge>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 transition-transform duration-200 hover:scale-110"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Add to cart</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to cart</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      );
    case ProductListViewNameEnum.DetailedView:
      return (
        <div className="flex flex-col gap-6">
          {mockProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/4">
                      <div className="aspect-square relative rounded-lg overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          quality={80}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-3/4 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {product.category} | Brand: {product.brand}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="text-sm">
                            ${product.price.toFixed(2)}
                          </Badge>
                          {product.currentDiscount > 0 && (
                            <Badge
                              variant="destructive"
                              className="ml-2 text-xs"
                            >
                              {product.currentDiscount}% Off
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Specifications</h4>
                          <div className="space-y-1 text-sm">
                            <p>Weight: {product.weight} kg</p>
                            <p>Stock: {product.stock} units</p>
                            <p>SKU: {product.sku}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center">
                          <StarRating rating={product.rating} />
                          <span className="ml-2 text-xs text-muted-foreground">
                            ({product.reviews.length})
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Heart className="w-4 h-4 mr-1" />
                            Wishlist
                          </Button>
                          <Button size="sm">
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      );
    default:
      return null;
  }
};
export default ProductList;
