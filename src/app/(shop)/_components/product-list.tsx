import StarRating from "@/components/shared/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mockProducts } from "@/data/constants";
import { ProductListViewNameEnum } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
let render = 0;
const ProductList = ({
  viewOption,
}: {
  viewOption: ProductListViewNameEnum;
}) => {
  switch (viewOption) {
    case ProductListViewNameEnum.GridView:
      return (
        <Link
          href="/products/abcde"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {mockProducts.map((product) => {
            const discount = (product.price * product.currentDiscount) / 100;
            const newPrice = product.price - discount;

            return (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase rounded-full">
                        {product.currentDiscount}% Off
                      </span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="headline-7 line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center body-2">
                        <span className="font-bold text-primary">
                          ${newPrice.toFixed(2)}
                        </span>
                        <span className="font-medium text-muted-foreground line-through ml-2 text-sm">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Link>
      );
    case ProductListViewNameEnum.ListView:
      return (
        <Link
          href="/products/abcde"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {mockProducts.map((product) => {
            const discount = (product.price * product.currentDiscount) / 100;
            const newPrice = product.price - discount;
            return (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="h-full p-0 flex flex-col">
                  <div className="relative h-64 sm:h-80">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2 py-1 bg-white text-xs font-semibold uppercase rounded">
                        {product.currentDiscount}% Off
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-2xl font-bold">
                            ${newPrice.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="font-semibold">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">
                          Brand: {product.brand}
                        </span>
                        <span className="text-sm font-medium">
                          In Stock: {product.stock}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1" variant="default">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Link>
      );
    case ProductListViewNameEnum.CompactView:
      return (
        <Link href="/products/abcde" className="space-y-2">
          {mockProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-md transition-all duration-200 group"
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors duration-200">
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
          ))}
        </Link>
      );
    case ProductListViewNameEnum.DetailedView:
      return (
        <Link href="/products/abcde" className="space-y-8">
          {mockProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {product.category} | Brand: {product.brand}
                    </CardDescription>
                  </div>
                  <div className="text-left sm:text-right">
                    <Badge variant="secondary" className="text-lg mb-2">
                      ${product.price.toFixed(2)}
                    </Badge>
                    {product.currentDiscount > 0 && (
                      <Badge variant="destructive" className="ml-2">
                        {product.currentDiscount}% Off
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <StarRating rating={product.rating} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.reviews.length} reviews)
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button className="w-full sm:w-auto">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </Link>
      );
    default:
      return null;
  }
};
export default ProductList;
