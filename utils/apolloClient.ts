import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
console.log(process.env.NODE_ENV);
console.log(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`);

const link = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`
      : "http://localhost:3000/api/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
