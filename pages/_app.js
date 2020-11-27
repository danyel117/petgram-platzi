import React,{useState} from 'react'
import { GlobalStyle } from './GlobalStyles';
import Logo from '@components/Logo/Logo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql',
});

const client = new ApolloClient({
  link: link,
  cache: cache,
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Logo />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
