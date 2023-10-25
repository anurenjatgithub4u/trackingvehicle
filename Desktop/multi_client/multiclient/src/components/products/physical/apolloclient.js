import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // Replace with your GraphQL backend endpoint
  cache: new InMemoryCache(),
});

export default client;