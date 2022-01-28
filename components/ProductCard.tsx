import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Rating } from "@prisma/client";
import Ratings from "./Ratings";

interface ProductCardProps {
  product: {
    __typename?: "Product" | undefined;
    id: string;
    brand: string;
    price: number;
    name: string;
    image: string;
    reviews?:
      | (
          | {
              __typename?: "Review" | undefined;
              rating: Rating;
            }
          | null
          | undefined
        )[]
      | null
      | undefined;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Card
        sx={{
          flexBasis: "300px",
          margin: "20px 10px 0",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={product.image}
            alt="product-img"
          />
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Brand - {product.brand}
            </Typography>
            <Typography gutterBottom variant="h5">
              {product.price}$
            </Typography>
            <Ratings
              reviews={product.reviews!}
              starQty={5}
              productId={product.id}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductCard;
