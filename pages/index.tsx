import Box from "@mui/material/Box";
import client from "../utils/apolloClient";
import { GetProductsDocument, GetProductsQuery } from "../generated/graphql";
import { GetStaticProps, NextPage } from "next";
import ProductCard from "../components/ProductCard";

interface HomeProps {
  getProducts: GetProductsQuery;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query({
    query: GetProductsDocument,
  });

  try {
    if (res.error || (!res.loading && !res.data)) {
      return { notFound: true };
    }

    return {
      props: {
        getProducts: res.data,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

const Home: NextPage<HomeProps> = ({ getProducts }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {getProducts.products.map((product) => (
        <ProductCard key={product!.id} product={product!} />
      ))}
    </Box>
  );
};

export default Home;
