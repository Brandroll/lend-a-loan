import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: "https://cms.lendaloan.com.au/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;