"use client";
import StarRating from "@/components/shared/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product, Review as ReviewType } from "@/types";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Heart, ShoppingCart, Star } from "lucide-react";
import React from "react";
import { FAQs } from "./faq-section";
import OfferTimer from "./offer-timer";
import ProductCarousel from "./product-carousel";
import { addToCart } from "@/store/cart-slice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/store/wishlist-slice";
import { PRODUCTDETAILS } from "@/data/constants";

const ProductHeader = ({ name }: { name: string }) => (
  <h1 className="font-poppins text-2xl font-medium sm:font-semibold md:text-3xl">
    {name}
  </h1>
);

const ProductPricing = ({
  discountedPrice,
  originalPrice,
  discount,
}: {
  discountedPrice: string;
  originalPrice: string;
  discount: number;
}) => (
  <div className="flex items-center space-x-4" aria-label="Product pricing">
    <h2 className="text-xl md:font-semibold lg:text-2xl font-medium font-poppins">
      ${discountedPrice}
    </h2>
    <h3 className="text-xl md:font-semibold lg:text-2xl font-medium font-poppins text-muted-foreground line-through">
      ${originalPrice}
    </h3>
    <Badge variant="destructive" aria-label="Discount percentage">
      {discount}% OFF
    </Badge>
  </div>
);

const ProductRating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => (
  <div className="flex items-center space-x-4" aria-label="Product rating">
    <div className="flex items-center">
      <Star
        className="w-5 h-5 text-yellow-400 mr-1 fill-current"
        aria-hidden="true"
      />
      <span className="text-base font-semibold">{rating}</span>
    </div>
    <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
  </div>
);

const ProductDescription = ({ description }: { description: string }) => (
  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
    {description}
  </p>
);

const ProductActions: React.FC<Product> = (product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
        currentDiscount: product.currentDiscount,
        brand: product.brand,
      })
    );
  };
  return (
    <div className="flex flex-col space-y-3">
      <Button
        variant="default"
        className="flex-grow"
        aria-label="Add to Cart"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="mr-2 h-5 w-5" aria-hidden="true" /> Add to Cart
      </Button>
      <Button
        variant="outline"
        className="flex-grow"
        aria-label="Add to Wishlist"
        onClick={handleAddToWishlist}
      >
        <Heart className="mr-2 h-5 w-5" aria-hidden="true" /> Add to Wishlist
      </Button>
    </div>
  );
};

type ProductDetailItem = {
  label: string;
  value: string | number;
};

type ProductDetailsProps = {
  details: ProductDetailItem[];
};
const ProductDetails: React.FC<ProductDetailsProps> = ({ details }) => (
  <section className="space-y-4" aria-labelledby="product-details-heading">
    <h2
      id="product-details-heading"
      className="text-xl md:font-semibold md:text-2xl font-medium font-poppins"
    >
      Product Details
    </h2>
    <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {details.map(({ label, value }, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <dt className="text-sm font-medium text-gray-500 mb-1">{label}</dt>
          <dd className="text-base font-semibold text-gray-900">{value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

const FAQSection = () => (
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
);

const ReviewSection = ({ reviews }: { reviews: ReviewType[] }) => (
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
            name={review.name}
            rating={review.rating}
            comment={review.comment}
          />
          <Separator />
        </React.Fragment>
      ))}
    </ul>
  </section>
);

const ProductDetailPage = () => {
  const discountedPrice = (
    (PRODUCTDETAILS.price * (100 - PRODUCTDETAILS.currentDiscount)) /
    100
  ).toFixed(2);
  const productDetails: ProductDetailItem[] = [
    { label: "Brand", value: PRODUCTDETAILS.brand },
    { label: "Category", value: PRODUCTDETAILS.category },
    { label: "SKU", value: PRODUCTDETAILS.sku },
    { label: "Weight", value: `${PRODUCTDETAILS.weight} kg` },
    { label: "In Stock", value: `${PRODUCTDETAILS.stock} units` },
  ];

  return (
    <div className="space-y-3">
      <section className="grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:gap-y-0 lg:grid-cols-2">
        <ProductCarousel />
        <article className="flex flex-col justify-center space-y-4">
          <header className="space-y-2">
            <ProductHeader name={PRODUCTDETAILS.name} />
            <ProductPricing
              discountedPrice={discountedPrice}
              originalPrice={PRODUCTDETAILS.price.toFixed(2)}
              discount={PRODUCTDETAILS.currentDiscount}
            />
            <ProductRating
              rating={PRODUCTDETAILS.rating}
              reviews={PRODUCTDETAILS.reviews.length}
            />
          </header>

          <ProductDescription description={PRODUCTDETAILS.description} />

          <Separator />
          <OfferTimer />
          <Separator />

          <ProductActions {...PRODUCTDETAILS} />
        </article>
      </section>

      <Separator />

      <ProductDetails details={productDetails} />

      <Separator />
      <FAQSection />

      <ReviewSection reviews={PRODUCTDETAILS.reviews} />
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
