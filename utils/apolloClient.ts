import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { schema } from "./createSchema";

const createIsomorphLink = () =>
  typeof window === "undefined"
    ? new SchemaLink({ schema })
    : new HttpLink({
        uri: "/api/graphql",
        credentials: "same-origin",
      });

const link = createIsomorphLink();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
