import { Star, StarHalf } from "lucide-react";
import React from "react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  numberOfReviews?: number;
  size?: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  numberOfReviews,
  size = 20,
  color = "#FFA41C",
}) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <div className="flex items-center flex-wrap">
      <div
        className="flex"
        aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      >
        {[...Array(maxRating)].map((_, index) => {
          if (index < fullStars) {
            return <Star key={index} size={size} color={color} />;
          } else if (index === fullStars && hasHalfStar) {
            return <StarHalf key={index} size={size} color={color} />;
          } else {
            return <Star key={index} size={size} color={color} />;
          }
        })}
      </div>
      {numberOfReviews !== undefined && (
        <span className="ml-2 text-sm text-muted-foreground">
          ({numberOfReviews} {numberOfReviews === 1 ? "review" : "reviews"})
        </span>
      )}
    </div>
  );
};

export default StarRating;
