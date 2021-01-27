import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default Client;
