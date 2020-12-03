import React,{useState,useEffect} from 'react'
import { GlobalStyle } from '../styles/GlobalStyles';
import Logo from '@components/Logo/Logo';
import NavBar from '@components/NavBar/NavBar'
import Head from 'next/head';
import {AuthContext} from 'context/auth'
import {refreshToken} from 'utils/api'


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
    localStorage.setItem("token",JSON.stringify(token))
  }
  useEffect(()=>{
    
    const refresh = async ()=>{
      refreshToken(JSON.parse(localStorage.getItem('token'))).then((res) => {
        if (res.status===200){
          return res.json()
        }
        else{
          return null
        }
      }).then(res=>{
        if(res){

          setTokens(res.token)
        }
        else{
          setTokens(null)
        }
      });
    }
    try{
      if (localStorage.getItem('token')){
        refresh()
      }
    }
    catch{
      setTokens(null);
    }

  },[])
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <GlobalStyle />
          <Logo />
          <Component {...pageProps} />
          <NavBar />
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
