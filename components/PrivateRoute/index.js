import React from 'react';
import {useAuth} from 'context/auth'
const PrivateRoute = ({children}) => {
    const {authTokens} = useAuth()
    return <>{!authTokens ? <p>Not Logged</p> : <>{children}</>}</>;
}
 
export default PrivateRoute;