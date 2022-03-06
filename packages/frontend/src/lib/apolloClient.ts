import { ApolloClient, InMemoryCache } from "@apollo/client";

export const strapiHost = "http://localhost:1337";

const client = new ApolloClient({
  uri: `${strapiHost}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
