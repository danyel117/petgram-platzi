import React from 'react';
import PrivateRoute from '@components/PrivateRoute'
import {useAuth} from 'context/auth'
import SubmitButton from '@components/SubmitButton'
const User = () => {
    const {setAuthTokens} = useAuth()

    return ( 
        <PrivateRoute>
            <form onSubmit={()=>{setAuthTokens(false)}}>
                <SubmitButton title={"Cerrar Sesión"} />
            </form>
        </PrivateRoute>
     );
}
 
export default User;