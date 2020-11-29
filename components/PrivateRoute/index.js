import React from 'react';
import {useAuth} from 'context/auth'
import Login from '@components/Login'

const PrivateRoute = ({children}) => {
    const {authTokens} = useAuth()
    return <>{!authTokens ? <Login/> : <>{children}</>}</>;
}
 
export default PrivateRoute;