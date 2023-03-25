import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
      mode: 'no-cors',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
