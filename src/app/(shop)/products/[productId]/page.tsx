"use client";
import StarRating from "@/components/shared/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Heart, Minus, MoveRight, Plus } from "lucide-react";
import { FAQs } from "./faq-section";
import ProductCarousel from "./product-carousel";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import OfferTimer from "./offer-timer";

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

const ProductDetailPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Product section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <ProductCarousel />

        {/* Detail */}
        <section className="flex flex-col justify-center space-y-3 py-4 sm:py-6">
          {/* Reviews and ratings */}
          <StarRating
            rating={5}
            numberOfReviews={11}
            aria-label="Product Rating"
          />

          <h1 className="headline-5">Tray Table</h1>

          <p className="body-2 text-muted-foreground">
            Buy one or buy a few and make every space where you sit more
            convenient. Light and easy to move around with removable tray top,
            handy for serving snacks.
          </p>

          <div className="flex items-center flex-wrap headline-6">
            <span>$199</span>
            <span className="line-through ml-2 text-muted-foreground">
              $499
            </span>
          </div>
          <Separator />

          <OfferTimer />

          <div className="flex flex-row items-center space-x-3">
            <div className="flex items-center gap-0 bg-secondary rounded-md w-fit">
              <Button variant="ghost" aria-label="Decrease Quantity">
                <Minus />
              </Button>
              <span className="px-3 text-sm font-semibold" aria-live="polite">
                1
              </span>
              <Button variant="ghost" aria-label="Increase Quantity">
                <Plus />
              </Button>
            </div>
            <Button variant="outline" className="w-full sm:w-auto sm:flex-grow">
              <Heart size={20} className="mr-1" />
              Wishlist
            </Button>
          </div>

          <Button className="w-full sm:w-auto">Add to cart</Button>
        </section>
      </section>

      <section className="border-t">
        {/* FAQs */}
        <FAQs />

        {/* Customer Reviews */}
        <section className="flex flex-col space-y-3">
          <h2 className="headline-7 font-medium mt-3">Customer Reviews</h2>
          {/* Overall Product Rating */}
          <StarRating
            rating={5}
            numberOfReviews={11}
            aria-label="Customer Reviews Rating"
          />

          {/* Review Input */}
          <div className="p-1">
            <div className="p-3 flex items-center justify-between border rounded-3xl group transition-all duration-300 ease-in-out hover:shadow-md focus-within:ring-ring focus-within:ring-2">
              <Input
                placeholder="Share your thoughts"
                aria-label="Give your review"
                className="flex-grow bg-transparent rounded-full ring-0 outline-none border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="sm:hidden rounded-full aspect-square p-2 flex items-center justify-center group relative">
                <MoveRight
                  size={20}
                  className="transition-transform duration-300 ease-in-out group-hover:animate-arrow-out absolute"
                  aria-hidden="true"
                />
                <MoveRight
                  size={20}
                  className="transition-transform duration-300 ease-in-out group-hover:animate-arrow-in absolute"
                  aria-hidden="true"
                />
              </Button>

              <Button className="hidden sm:flex rounded-2xl px-4 group overflow-hidden">
                <span className="transition-transform duration-300 ease-in-out group-hover:animate-text-slide-in relative">
                  Write Review
                </span>
              </Button>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <section className="flex flex-col space-y-3 justify-center items-center">
            {reviews.map((review, index) => (
              <Review
                key={index}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};

export default ProductDetailPage;

interface Review {
  name: string;
  rating: number;
  comment: string;
}
const Review = ({ name, rating, comment }: Review) => (
  <article className="w-full flex space-x-4 p-4 border-b border-gray-200">
    <figure className="flex-shrink-0">
      <Avatar>
        <AvatarImage alt={`Avatar of ${name}`} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
    </figure>
    <div className="flex flex-col space-y-2">
      <header>
        <h4 className="headline-7">{name}</h4>
        <div className="flex" aria-label={`Rating: ${rating} out of 5 stars`}>
          <StarRating rating={rating} />
        </div>
      </header>
      <p className="text-wrap text-sm text-muted-foreground">{comment}</p>
    </div>
  </article>
);
