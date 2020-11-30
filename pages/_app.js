import React,{useState} from 'react'
import { GlobalStyle } from '../styles/GlobalStyles';
import Logo from '@components/Logo/Logo';
import NavBar from '@components/NavBar/NavBar'
import { ApolloClient, InMemoryCache, ApolloLink, from, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import Head from 'next/head';
import {AuthContext} from 'context/auth'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.localStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-24iykciv5.now.sh/graphql'
    })
  ])
})
function MyApp({ Component, pageProps }) {
  const [authTokens,setAuthTokens] = useState(()=>{
    try{
      return localStorage.getItem("token")
    }
    catch (e){
      return false
    }
  })
  const setTokens=(token)=>{
    setAuthTokens(token)
    localStorage.setItem("token",token)
  }
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Logo />
          <Component {...pageProps} />
          <NavBar />
        </ApolloProvider>
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
