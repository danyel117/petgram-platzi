import React,{useState} from 'react'
import { GlobalStyle } from './GlobalStyles';
import Logo from '@components/Logo/Logo';
import NavBar from '@components/NavBar/NavBar'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {AuthContext} from 'context/auth'
const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql',
});

const client = new ApolloClient({
  link: link,
  cache: cache,
});

function MyApp({ Component, pageProps }) {
  const [authTokens,setAuthTokens] = useState(true)
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens }}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Logo />
        <Component {...pageProps} />
        <NavBar />
      </ApolloProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
