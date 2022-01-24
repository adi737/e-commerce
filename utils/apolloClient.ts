import { ApolloClient, InMemoryCache } from "@apollo/client";
import { appUrl } from "./appUrl";

const client = new ApolloClient({
  uri: `${appUrl}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
