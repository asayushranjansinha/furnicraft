"use client";
import StarRating from "@/components/shared/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import {
  Heart,
  Minus,
  MoveRight,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { FAQs } from "./faq-section";
import OfferTimer from "./offer-timer";
import ProductCarousel from "./product-carousel";
import React from "react";

const reviews = [
  {
    name: "Emily Thompson",
    rating: 5,
    comment:
      "This product exceeded my expectations! It's exactly what I needed.",
  },
  {
    name: "Priya Patel",
    rating: 5,
    comment: "यह उत्कृष्ट उत्पाद है! मैं इसे अपने दोस्तों को भी सुझाएंगी।",
  },
  {
    name: "Michael Smith",
    rating: 4,
    comment: "Very good quality and fast delivery. Impressed with the service!",
  },
  {
    name: "Sophia Lee",
    rating: 5,
    comment:
      "I love this product! It's made a huge difference in my daily routine.",
  },
  {
    name: "David Johnson",
    rating: 4,
    comment: "Great value for the price. I would definitely buy it again.",
  },
  {
    name: "Arun Kumar",
    rating: 5,
    comment:
      "I am really happy with this purchase! It exceeded my expectations.",
  },
  {
    name: "Meera Reddy",
    rating: 4,
    comment: "Great product for the price. It's been very useful for me.",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    comment: "Excellent service and product quality. I'm impressed!",
  },
];

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

const ProductDetailPage = () => {
  const discountedPrice = (
    (PRODUCTDETAILS.price * (100 - PRODUCTDETAILS.currentDiscount)) /
    100
  ).toFixed(2);

  return (
    <div className="space-y-3">
      <section className="grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:gap-y-0 lg:grid-cols-2">
        <ProductCarousel />
        <article className="flex flex-col justify-center space-y-4">
          <header className="space-y-2">
            <h1 className="font-poppins text-2xl font-medium sm:font-semibold md:text-3xl">
              {PRODUCTDETAILS.name}
            </h1>
            <div
              className="flex items-center space-x-4"
              aria-label="Product pricing"
            >
              <h2 className="text-xl md:font-semibold lg:text-2xl font-medium font-poppins">
                ${discountedPrice}
              </h2>
              <h3 className="text-xl md:font-semibold lg:text-2xl font-medium font-poppins text-muted-foreground line-through">
                ${PRODUCTDETAILS.price.toFixed(2)}
              </h3>
              <Badge variant="destructive" aria-label="Discount percentage">
                {PRODUCTDETAILS.currentDiscount}% OFF
              </Badge>
            </div>
            <div
              className="flex items-center space-x-4"
              aria-label="Product rating"
            >
              <div className="flex items-center">
                <Star
                  className="w-5 h-5 text-yellow-400 mr-1 fill-current"
                  aria-hidden="true"
                />
                <span className="text-base font-semibold">
                  {PRODUCTDETAILS.rating}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({PRODUCTDETAILS.reviews} reviews)
              </span>
            </div>
          </header>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {PRODUCTDETAILS.description}
            </p>
          </div>

          <Separator />
          <OfferTimer />
          <Separator />

          <div className="flex flex-col space-y-3">
            <Button
              variant="default"
              className="flex-grow"
              aria-label="Add to Cart"
            >
              <ShoppingCart className="mr-2 h-5 w-5" aria-hidden="true" /> Add
              to Cart
            </Button>
            <Button
              variant="outline"
              className="flex-grow"
              aria-label="Add to Wishlist"
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" /> Add to
              Wishlist
            </Button>
          </div>
        </article>
      </section>

      <Separator />

      <section className="space-y-4" aria-labelledby="product-details-heading">
        <h2
          id="product-details-heading"
          className="text-xl md:font-semibold md:text-2xl font-medium font-poppins"
        >
          Product Details
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="bg-gray-50 p-4 rounded flex items-center space-x-3">
            <dt className="font-medium">Brand:</dt>
            <dd className="font-medium text-muted-foreground">
              {PRODUCTDETAILS.brand}
            </dd>
          </div>
          <div className="bg-gray-50 p-4 rounded flex items-center space-x-3">
            <dt className="font-medium">Category:</dt>
            <dd className="font-medium text-muted-foreground">
              {PRODUCTDETAILS.category}
            </dd>
          </div>
          <div className="bg-gray-50 p-4 rounded flex items-center space-x-3">
            <dt className="font-medium">SKU:</dt>
            <dd className="font-medium text-muted-foreground">
              {PRODUCTDETAILS.sku}
            </dd>
          </div>
          <div className="bg-gray-50 p-4 rounded flex items-center space-x-3">
            <dt className="font-medium">Weight:</dt>
            <dd className="font-medium text-muted-foreground">
              {PRODUCTDETAILS.weight} kg
            </dd>
          </div>
          <div className="bg-gray-50 p-4 rounded flex items-center space-x-3">
            <dt className="font-medium">In Stock:</dt>
            <dd className="font-medium text-muted-foreground">
              {PRODUCTDETAILS.stock} units
            </dd>
          </div>
        </dl>
      </section>

      <Separator />
      <section
        className="space-y"
        aria-labelledby="frequently-asked-questions-heading"
      >
        <h2
          id="frequently-asked-questions-heading"
          className="text-xl md:font-semibold md:text-2xl font-medium font-poppins"
        >
          Frequently Asked Questions
        </h2>
        <FAQs />
      </section>

      <section className="space-y-4" aria-labelledby="customer-reviews-heading">
        <h2
          id="customer-reviews-heading"
          className="text-xl md:font-semibold md:text-2xl font-medium font-poppins"
        >
          Customer Reviews
        </h2>

        <ul className="space-y-3">
          {reviews.map((review, index) => (
            <React.Fragment key={index}>
              <Review
                key={index}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
              <Separator />
            </React.Fragment>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductDetailPage;

interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
}

const Review = ({ name, rating, comment }: ReviewProps) => (
  <li className="flex items-start space-x-4 p-3">
    <Avatar className="w-10 h-10 flex-shrink-0">
      <AvatarImage alt={`Avatar of ${name}`} />
      <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
        {name.charAt(0)}
      </AvatarFallback>
    </Avatar>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium truncate">{name}</h3>
        {/* <span className="text-xs text-gray-500">{date}</span> */}
      </div>
      <div
        className="flex items-center"
        aria-label={`Rating: ${rating} out of 5 stars`}
      >
        <StarRating rating={rating} />
        <span className="ml-2 font-medium text-gray-600">
          {rating.toFixed(1)}
        </span>
      </div>
      <p className="text-muted-foreground leading-relaxed line-clamp-3">
        {comment}
      </p>
    </div>
  </li>
);
