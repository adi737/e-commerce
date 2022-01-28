import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Rating } from "@prisma/client";

interface RatingsProps {
  starQty: number;
  reviews:
    | (
        | {
            __typename?: "Review" | undefined;
            rating: Rating;
          }
        | null
        | undefined
      )[];
  productId: string;
}

const Ratings: React.FC<RatingsProps> = ({ starQty, reviews, productId }) => {
  const sum = reviews.reduce(
    (acc: number, review) =>
      review!.rating === "one"
        ? acc + 1
        : review!.rating === "two"
        ? acc + 2
        : review!.rating === "three"
        ? acc + 3
        : review!.rating === "four"
        ? acc + 4
        : review!.rating === "five"
        ? acc + 5
        : acc,
    0
  );
  const avg = sum / reviews.length || 0;

  let starArr: string[] = [];

  for (let i = 0; i <= starQty - 1; i++) {
    avg >= i + 1 - 0.25
      ? (starArr[i] = "filled")
      : avg >= i + 1 - 0.75
      ? (starArr[i] = "half")
      : (starArr[i] = "empty");
  }

  return (
    <>
      {starArr.map((star, index) =>
        star === "filled" ? (
          <StarIcon key={`${productId}-${index}`} />
        ) : star === "half" ? (
          <StarHalfIcon key={`${productId}-${index}`} />
        ) : (
          <StarBorderIcon key={`${productId}-${index}`} />
        )
      )}
    </>
  );
};

export default Ratings;
