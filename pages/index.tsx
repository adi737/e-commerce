import Box from "@mui/material/Box";
import client from "../utils/apolloClient";
import { GetProductsDocument, GetProductsQuery } from "../generated/graphql";
import { GetStaticProps, NextPage } from "next";
import ProductCard from "../components/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { useRouter } from "next/router";

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
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

const Home: NextPage<HomeProps> = ({ getProducts }) => {
  const router = useRouter();
  const { page } = router.query;
  const [currentProducts, setCurrentProducts] = useState<
    GetProductsQuery["products"]
  >(
    page
      ? getProducts.products.slice((Number(page) - 1) * 12, Number(page) * 12)
      : getProducts.products.slice(0, 12)
  );

  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product!.id} product={product!} />
        ))}
      </Box>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "15px 0",
        }}
        count={Math.ceil(getProducts.products.length / 10)}
        onChange={(_, page) => {
          setCurrentProducts(
            getProducts.products.slice((page - 1) * 12, page * 12)
          );
        }}
      />
    </>
  );
};

export default Home;
