import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

export const strapiHost = `${
  `${process.env.STRAPI_HOST}` || "http://localhost:1337"
}`;

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: `${strapiHost}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  headers: {
    authorization: process.env.STRAPI_API_TOKEN
      ? `bearer ${process.env.STRAPI_API_TOKEN}`
      : "",
  },
});

export default client;
