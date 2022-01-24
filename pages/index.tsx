import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import client from "../utils/apolloClient";
import { GetProductsDocument, GetProductsQuery } from "../generated/graphql";
import { GetStaticProps, NextPage } from "next";

interface HomeProps {
  getProducts: GetProductsQuery;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query({
    query: GetProductsDocument,
  });

  return {
    props: {
      getProducts: res.data,
    },
  };
};

const Home: NextPage<HomeProps> = ({ getProducts }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        {getProducts.products.map((product) => (
          <Typography key={product!.id}>{product!.name}</Typography>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
