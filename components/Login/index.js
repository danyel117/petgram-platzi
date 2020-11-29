import React,{useState} from 'react';
import {useAuth} from 'context/auth';
import useInputValue from 'hooks/useInputValue'

const Login = () => {
    const { setAuthTokens } = useAuth();
    const email=useInputValue('')
    const password=useInputValue('')
    const login = (e)=>{
        e.preventDefault()
        setAuthTokens(true)
    }
    return (
      <form onSubmit={login}>
        <input placeholder='Email' required {...email}/>
        <input placeholder='Password' type='password' required {...password}/>
        <button type='submit'>Iniciar Sesión</button>
      </form>
    );
}
 
export default Login;