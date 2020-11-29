import React from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm'

const Login = () => {
    const { setAuthTokens } = useAuth();
    const login = (e)=>{
        e.preventDefault()
        setAuthTokens(true)
    }
    return (
      <UserForm onSubmit={login} title="Iniciar Sesión"/>
    );
}
 
export default Login;