import React from 'react';
import {useAuth} from 'context/auth'
const Login = () => {
    const { setAuthTokens } = useAuth();
    const login = (e)=>{
        e.preventDefault()
        setAuthTokens(true)
    }
    return ( 
        <form onSubmit={login}>
            <button type="submit">Iniciar Sesión</button>
        </form>
     );
}
 
export default Login;