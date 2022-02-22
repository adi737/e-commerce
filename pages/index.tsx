import Box from "@mui/material/Box";
import client from "../utils/apolloClient";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryResult,
} from "../generated/graphql";
import { GetStaticProps, NextPage } from "next";
import ProductCard from "../components/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

interface HomeProps {
  getProducts: GetProductsQuery;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = (await client.query({
    query: GetProductsDocument,
  })) as GetProductsQueryResult;

  return {
    props: {
      getProducts: res.data,
    },
    revalidate: 10,
  };
};

const Home: NextPage<HomeProps> = ({ getProducts }) => {
  const [currentProducts, setCurrentProducts] = useState<
    GetProductsQuery["products"]
  >(getProducts.products.slice(0, 12));

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
