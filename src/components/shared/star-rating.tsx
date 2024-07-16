import { Star } from "lucide-react"; 

interface StarRatingProps {
  numberOfStars: number;
  numberOfReviews?: number;
}
const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars,
  numberOfReviews,
}) => {
  return (
    <div className="flex items-center flex-wrap" >
      <div className="flex">
        {[...Array(numberOfStars)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className="stroke-teal-500 fill-teal-500"
            aria-hidden="true"
          />
        ))}
      </div>
      {numberOfReviews && (
        <span className="ml-2 text-muted-foreground">
          {numberOfReviews} Reviews
        </span>
      )}
    </div>
  );
};
export default StarRating;
