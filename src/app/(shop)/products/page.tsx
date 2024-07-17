"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Columns2,
  Grid2X2,
  Grid3X3,
  Heart,
  Rows2,
  ShoppingCart,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StarRating from "@/components/shared/star-rating";
import Link from "next/link";

const ProductListing = () => {
  const [viewOption, setViewOption] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");

  const viewOptions = [
    { name: "Grid View", value: "grid", icon: <Grid3X3 size={20} /> },
    { name: "List View", value: "list", icon: <Grid2X2 size={20} /> },
    { name: "Compact View", value: "compact", icon: <Columns2 size={20} /> },
    { name: "Detailed View", value: "detailed", icon: <Rows2 size={20} /> },
  ];

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Armchair",
      price: 499.99,
      description: "Comfortable and stylish armchair for your living room",
      category: "Furniture",
      currentDiscount: 10,
      brand: "HomeComfort",
      stock: 20,
      rating: 4.5,
      images: [
        "/assets/images/armchair-1.jpg",
        "/assets/images/armchair-2.jpg",
        "armchair-3.jpg",
      ],
      weight: 25,
      sku: "HC-ARM-001",
      reviews: 120,
    },
    {
      id: 2,
      name: "Dining Table",
      price: 799.99,
      description: "Elegant dining table made from solid wood",
      category: "Furniture",
      currentDiscount: 15,
      brand: "ElegantHomes",
      stock: 15,
      rating: 4.7,
      images: [
        "/assets/images/dining-table-1.jpg",
        "/assets/images/dining-table-2.jpg",
      ],
      weight: 45,
      sku: "EH-DT-002",
      reviews: 85,
    },
    {
      id: 3,
      name: "Bed Frame",
      price: 399.99,
      description: "Sturdy bed frame with a modern design",
      category: "Furniture",
      currentDiscount: 20,
      brand: "DreamBeds",
      stock: 10,
      rating: 4.3,
      images: [
        "/assets/images/bed-frame-1.jpg",
        "/assets/images/bed-frame-2.jpg",
        "/assets/images/bed-frame-3.jpg",
        "/assets/images/bed-frame-4.jpg",
        "/assets/images/bed-frame-5.jpg",
      ],
      weight: 50,
      sku: "DB-BF-003",
      reviews: 95,
    },
    {
      id: 4,
      name: "Bookshelf",
      price: 149.99,
      description: "Spacious bookshelf for all your books and decor",
      category: "Furniture",
      currentDiscount: 5,
      brand: "SmartStorage",
      stock: 25,
      rating: 4.1,
      images: [
        "/assets/images/bookshelf-1.jpg",
        "/assets/images/bookshelf-2.jpg",
        "/assets/images/bookshelf-3.jpg",
        "/assets/images/bookshelf-4.jpg",
        "/assets/images/bookshelf-5.jpg",
      ],
      weight: 30,
      sku: "SS-BS-004",
      reviews: 75,
    },
    {
      id: 5,
      name: "Recliner Chair",
      price: 299.99,
      description: "Comfortable recliner chair with adjustable settings",
      category: "Furniture",
      currentDiscount: 25,
      brand: "RelaxSeating",
      stock: 12,
      rating: 4.8,
      images: [
        "/assets/images/recliner-chair-1.jpg",
        "/assets/images/recliner-chair-2.jpg",
        "/assets/images/recliner-chair-3.jpg",
        "/assets/images/recliner-chair-4.jpg",
        "/assets/images/recliner-chair-5.jpg",
      ],
      weight: 35,
      sku: "RS-RC-005",
      reviews: 150,
    },
    {
      id: 6,
      name: "Coffee Table",
      price: 199.99,
      description: "Modern coffee table with a glass top",
      category: "Furniture",
      currentDiscount: 10,
      brand: "ModernLiving",
      stock: 30,
      rating: 4.2,
      images: [
        "/assets/images/coffee-table-1.jpg",
        "/assets/images/coffee-table-2.jpg",
        "/assets/images/coffee-table-3.jpg",
        "/assets/images/coffee-table-4.jpg",
      ],
      weight: 20,
      sku: "ML-CT-006",
      reviews: 65,
    },
    {
      id: 7,
      name: "Wardrobe",
      price: 699.99,
      description: "Spacious wardrobe with sliding doors",
      category: "Furniture",
      currentDiscount: 15,
      brand: "ClosetMasters",
      stock: 8,
      rating: 4.6,
      images: [
        "/assets/images/wardrobe-1.avif",
        "/assets/images/wardrobe-2.jpg",
        "/assets/images/wardrobe-3.avif",
      ],
      weight: 80,
      sku: "CM-WD-007",
      reviews: 55,
    },
    {
      id: 8,
      name: "Office Chair",
      price: 149.99,
      description: "Ergonomic office chair with lumbar support",
      category: "Furniture",
      currentDiscount: 20,
      brand: "OfficeComfort",
      stock: 40,
      rating: 4.0,
      images: [
        "/assets/images/office-chair-3.jpg",
        "/assets/images/office-chair-1.jpg",
        "/assets/images/office-chair-2.jpg",
        "/assets/images/office-chair-4.jpg",
        "/assets/images/office-chair-5.jpg",
      ],
      weight: 15,
      sku: "OC-CH-008",
      reviews: 200,
    },
    {
      id: 9,
      name: "TV Stand",
      price: 249.99,
      description: "Stylish TV stand with multiple compartments",
      category: "Furniture",
      currentDiscount: 5,
      brand: "MediaHub",
      stock: 18,
      rating: 4.4,
      images: [
        "/assets/images/tv-stand-1.jpg",
        "/assets/images/tv-stand-2.jpg",
        "/assets/images/tv-stand-3.jpg",
        "/assets/images/tv-stand-4.jpg",
        "/assets/images/tv-stand-5.jpg",
      ],
      weight: 40,
      sku: "MH-TV-009",
      reviews: 80,
    },
    {
      id: 10,
      name: "Nightstand",
      price: 99.99,
      description: "Compact nightstand with a drawer and shelf",
      category: "Furniture",
      currentDiscount: 25,
      brand: "BedsideEssentials",
      stock: 35,
      rating: 4.1,
      images: [
        "/assets/images/nightstand-1.jpg",
        "/assets/images/nightstand-2.jpg",
        "/assets/images/nightstand-3.jpg",
        "/assets/images/nightstand-4.jpg",
        "/assets/images/nightstand-5.jpg",
      ],
      weight: 10,
      sku: "BE-NS-010",
      reviews: 110,
    },
    {
      id: 11,
      name: "Sofa",
      price: 899.99,
      description: "Luxury leather sofa with seating for three",
      category: "Furniture",
      currentDiscount: 20,
      brand: "ComfortLiving",
      stock: 10,
      rating: 4.7,
      images: [
        "/assets/images/sofa-1.jpg",
        "/assets/images/sofa-2.jpg",
        "/assets/images/sofa-3.jpg",
        "/assets/images/sofa-4.jpg",
        "/assets/images/sofa-5.jpg",
      ],
      weight: 70,
      sku: "CL-SF-011",
      reviews: 180,
    },
    {
      id: 12,
      name: "Patio Set",
      price: 599.99,
      description: "Outdoor patio set with table and chairs",
      category: "Outdoor",
      currentDiscount: 15,
      brand: "OutdoorElegance",
      stock: 5,
      rating: 4.5,
      images: [
        "/assets/images/patio-set-1.jpg",
        "/assets/images/patio-set-2.jpg",
        "/assets/images/patio-set-3.jpg",
      ],
      weight: 55,
      sku: "OE-PS-012",
      reviews: 45,
    },
    {
      id: 13,
      name: "Bar Stool",
      price: 129.99,
      description: "Adjustable height bar stool with cushioned seat",
      category: "Furniture",
      currentDiscount: 10,
      brand: "BarEssentials",
      stock: 25,
      rating: 4.3,
      images: [
        "/assets/images/bar-stool-1.jpg",
        "/assets/images/bar-stool-2.jpg",
        "/assets/images/bar-stool-3.jpg",
      ],
      weight: 8,
      sku: "BE-BS-013",
      reviews: 95,
    },
    {
      id: 14,
      name: "Desk Lamp",
      price: 49.99,
      description: "Modern desk lamp with adjustable brightness",
      category: "Lighting",
      currentDiscount: 5,
      brand: "BrightLights",
      stock: 50,
      rating: 4.2,
      images: [
        "/assets/images/desk-lamp-1.jpg",
        "/assets/images/desk-lamp-2.jpg",
        "/assets/images/desk-lamp-3.jpg",
        "/assets/images/desk-lamp-4.jpg",
        "/assets/images/desk-lamp-5.jpg",
        "/assets/images/desk-lamp-6.jpg",
        "/assets/images/desk-lamp-7.jpg",
        "/assets/images/desk-lamp-8.jpg",
      ],
      weight: 2,
      sku: "BL-DL-014",
      reviews: 220,
    },
    {
      id: 15,
      name: "Area Rug",
      price: 199.99,
      description: "Soft area rug with geometric patterns",
      category: "Decor",
      currentDiscount: 20,
      brand: "HomeDecor",
      stock: 20,
      rating: 4.4,
      images: [
        "/assets/images/area-rug-1.jpg",
        "/assets/images/area-rug-2.jpg",
        "/assets/images/area-rug-3.jpg",
      ],
      weight: 5,
      sku: "HD-AR-015",
      reviews: 75,
    },
    {
      id: 16,
      name: "Wall Art",
      price: 79.99,
      description: "Abstract wall art to enhance your living space",
      category: "Decor",
      currentDiscount: 10,
      brand: "ArtisticTouch",
      stock: 15,
      rating: 4.5,
      images: [
        "/assets/images/wall-art-1.jpg",
        "/assets/images/wall-art-2.jpg",
        "/assets/images/wall-art-3.jpg",
        "/assets/images/wall-art-4.jpg",
        "/assets/images/wall-art-5.jpg",
      ],
      weight: 1,
      sku: "AT-WA-016",
      reviews: 60,
    },
    {
      id: 17,
      name: "Bookshelf Ladder",
      price: 199.99,
      description: "Stylish bookshelf ladder with multiple shelves",
      category: "Furniture",
      currentDiscount: 15,
      brand: "SmartStorage",
      stock: 10,
      rating: 4.6,
      images: [
        "/assets/images/bookshelf-ladder-1.jpg",
        "/assets/images/bookshelf-ladder-2.jpg",
        "/assets/images/bookshelf-ladder-3.jpg",
        "/assets/images/bookshelf-ladder-4.jpg",
        "/assets/images/bookshelf-ladder-5.jpg",
      ],
      weight: 15,
      sku: "SS-BL-017",
      reviews: 40,
    },
    {
      id: 18,
      name: "Floor Lamp",
      price: 99.99,
      description: "Tall floor lamp with a sleek design",
      category: "Lighting",
      currentDiscount: 20,
      brand: "LightUp",
      stock: 25,
      rating: 4.4,
      images: [
        "/assets/images/floor-lamp-1.jpg",
        "/assets/images/floor-lamp-2.jpg",
        "/assets/images/floor-lamp-3.jpg",
        "/assets/images/floor-lamp-4.jpg",
        "/assets/images/floor-lamp-5.jpg",
      ],
      weight: 4,
      sku: "LU-FL-018",
      reviews: 85,
    },
    {
      id: 19,
      name: "Kitchen Island",
      price: 399.99,
      description: "Versatile kitchen island with storage space",
      category: "Furniture",
      currentDiscount: 10,
      brand: "KitchenPro",
      stock: 8,
      rating: 4.5,
      images: [
        "/assets/images/kitchen-island-1.jpg",
        "/assets/images/kitchen-island-2.jpg",
        "/assets/images/kitchen-island-3.jpg",
        "/assets/images/kitchen-island-4.jpg",
        "/assets/images/kitchen-island-5.jpg",
      ],
      weight: 60,
      sku: "KP-KI-019",
      reviews: 30,
    },
    {
      id: 20,
      name: "Lounge Chair",
      price: 349.99,
      description: "Comfortable lounge chair with a modern design",
      category: "Furniture",
      currentDiscount: 25,
      brand: "RelaxSeating",
      stock: 15,
      rating: 4.8,
      images: [
        "/assets/images/lounge-chair-1.jpg",
        "/assets/images/lounge-chair-2.jpg",
        "/assets/images/lounge-chair-3.jpg",
        "/assets/images/lounge-chair-4.jpg",
      ],
      weight: 18,
      sku: "RS-LC-020",
      reviews: 100,
    },
  ];

  const renderProducts = () => {
    switch (viewOption) {
      case "grid":
        return (
          <Link href="/products/abcde" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => {
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
                          <span className="font-semibold">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </Link>
        );

      case "list":
        return (
          <Link href="/products/abcde" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => {
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

      case "compact":
        return (
          <Link href="/products/abcde" className="space-y-2">
            {products.map((product) => (
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

      case "detailed":
        return (
          <Link href="/products/abcde" className="space-y-8">
            {products.map((product) => (
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
                      ({product.reviews} reviews)
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
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Banner */}
      <section>
        <div className="relative h-[30vh] min-h-[250px] max-h-[500px] bg-secondary">
          <Image
            src="/assets/images/banner-shop.png"
            alt="Banner"
            fill
            priority
            className="lg:hidden"
          />
          <Image
            src="/assets/images/banner-shop-lg.png"
            alt="Banner"
            fill
            priority
            className="hidden lg:block"
          />
        </div>
      </section>

      {/* Filters and View Options */}
      <section className="">
        <div className="flex items-end justify-between">
          <div className="hidden sm:flex items-end gap-x-3">
            {/* Category Select */}
            <div className="flex flex-col">
              <label
                htmlFor="category-select"
                className="mb-2 text-sm font-medium"
              >
                Category
              </label>
              <Select>
                <SelectTrigger id="category-select" className="">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Select */}
            <div className="flex flex-col">
              <label
                htmlFor="price-select"
                className="mb-2 text-sm font-medium"
              >
                Price Range
              </label>
              <Select>
                <SelectTrigger id="price-select" className="">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="51-100">$51 - $100</SelectItem>
                  <SelectItem value="101+">$101+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-end gap-x-3">
            {/* Sort By Select */}
            <div className="flex flex-col">
              <label htmlFor="sort-select" className="sr-only">
                Sort By
              </label>
              <Select>
                <SelectTrigger className="border-none">
                  <SelectValue placeholder="Sort By:" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple Pi </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* View Options */}
            <div className="flex items-center gap-2 ml-auto">
              {viewOptions.map((option) => (
                <Button
                  className="w-fit h-fit p-2"
                  key={option.value}
                  onClick={() => setViewOption(option.value)}
                  variant={viewOption === option.value ? "default" : "ghost"}
                >
                  {option.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="">{renderProducts()}</section>
    </div>
  );
};

export default ProductListing;
