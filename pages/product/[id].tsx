import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  GetProductDocument,
  GetProductQuery,
  GetProductsDocument,
  GetProductsQueryResult,
} from "../../generated/graphql";
import client from "../../utils/apolloClient";

interface ProductProps {
  getProduct: GetProductQuery;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = (await client.query({
    query: GetProductsDocument,
  })) as GetProductsQueryResult;

  const paths = res.data!.products.map((product) => {
    return {
      params: {
        id: product!.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = Number(params!.id);

  if (isNaN(productId)) {
    return { notFound: true };
  }

  const res = await client.query({
    query: GetProductDocument,
    variables: { productId },
  });

  if (!res.loading && (!res.data || !res.data.product)) {
    return { notFound: true };
  }

  return {
    props: {
      getProduct: res.data,
    },
    revalidate: 10,
  };
};

const Product: NextPage<ProductProps> = ({ getProduct }) => {
  console.log(getProduct);

  return <div>product</div>;
};

export default Product;
