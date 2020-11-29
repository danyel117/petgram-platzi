import React from 'react';
import {useAuth} from 'context/auth'
import Login from '@components/Login'
import Register from '@components/Register';

const PrivateRoute = ({children}) => {
    const {authTokens} = useAuth()
    return <>{!authTokens ? <><Login/><Register/></> : <>{children}</>}</>;
}
 
export default PrivateRoute;