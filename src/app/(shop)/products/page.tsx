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
import StarRating from "@/components/shared/star-rating";

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
      currentDiscount: 10, // 10% discount
      brand: "HomeComfort",
      stock: 20,
      rating: 4.5,
      images: [
        "/assets/images/armchair-1.jpg",
        "/assets/images/armchair-2.jpg",
        "armchair-3.jpg",
      ],
    },
    {
      id: 2,
      name: "Dining Table",
      price: 799.99,
      description: "Elegant dining table made from solid wood",
      category: "Furniture",
      currentDiscount: 15, // 15% discount
      brand: "ElegantHomes",
      stock: 15,
      rating: 4.7,
      images: [
        "/assets/images/dining-table-1.jpg",
        "/assets/images/dining-table-2.jpg",
      ],
    },
    {
      id: 3,
      name: "Bed Frame",
      price: 399.99,
      description: "Sturdy bed frame with a modern design",
      category: "Furniture",
      currentDiscount: 20, // 20% discount
      brand: "DreamBeds",
      stock: 10,
      rating: 4.3,
      images: [
        "/assets/images/bed-frame-1.jpg",
        "/assets/images/bed-frame-2.jpg",
        "/assets/images/bed-frame-3.jpg",
        "/assets/images/bed-frame-4jpg",
        "/assets/images/bed-frame-5jpg",
      ],
    },
    {
      id: 4,
      name: "Bookshelf",
      price: 149.99,
      description: "Spacious bookshelf for all your books and decor",
      category: "Furniture",
      currentDiscount: 5, // 5% discount
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
    },
    {
      id: 5,
      name: "Recliner Chair",
      price: 299.99,
      description: "Comfortable recliner chair with adjustable settings",
      category: "Furniture",
      currentDiscount: 25, // 25% discount
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
    },
    {
      id: 6,
      name: "Coffee Table",
      price: 199.99,
      description: "Modern coffee table with a glass top",
      category: "Furniture",
      currentDiscount: 10, // 10% discount
      brand: "ModernLiving",
      stock: 30,
      rating: 4.2,
      images: [
        "/assets/images/coffee-table-1.jpg",
        "/assets/images/coffee-table-2.jpg",
        "/assets/images/coffee-table-3.jpg",
        "/assets/images/coffee-table-4.jpg",
      ],
    },
    {
      id: 7,
      name: "Wardrobe",
      price: 699.99,
      description: "Spacious wardrobe with sliding doors",
      category: "Furniture",
      currentDiscount: 15, // 15% discount
      brand: "ClosetMasters",
      stock: 8,
      rating: 4.6,
      images: [
        "/assets/images/wardrobe-1.avif",
        "/assets/images/wardrobe-2.jpg",
        "/assets/images/wardrobe-3.avif",
      ],
    },
    {
      id: 8,
      name: "Office Chair",
      price: 149.99,
      description: "Ergonomic office chair with lumbar support",
      category: "Furniture",
      currentDiscount: 20, // 20% discount
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
    },
    {
      id: 9,
      name: "TV Stand",
      price: 249.99,
      description: "Stylish TV stand with multiple compartments",
      category: "Furniture",
      currentDiscount: 5, // 5% discount
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
    },
    {
      id: 10,
      name: "Nightstand",
      price: 99.99,
      description: "Compact nightstand with a drawer and shelf",
      category: "Furniture",
      currentDiscount: 25, // 25% discount
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
    },
  ];

  const renderProducts = () => {
    switch (viewOption) {
      case "grid":
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
          </div>
        );

      case "list":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          </div>
        );
      case "compact":
        return (
          <div className="space-y-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-2 border rounded"
              >
                <span>{product.name}</span>
                <Badge>${product.price}</Badge>
              </div>
            ))}
          </div>
        );
      case "detailed":
        return (
          <div className="space-y-8">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{product.name}</CardTitle>
                    <Badge>${product.price}</Badge>
                  </div>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex">
                    <div className="w-1/3">
                      <Image
                        src="/placeholder.png"
                        alt={product.name}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="w-2/3 pl-4">
                      <p>{product.description}</p>
                      <ul className="mt-4 space-y-2">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
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
