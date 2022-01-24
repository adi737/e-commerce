import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
