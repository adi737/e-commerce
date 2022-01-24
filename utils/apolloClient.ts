import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log(process.env.NODE_ENV);
console.log(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`);
const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`
      : `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
