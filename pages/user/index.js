import React from 'react';
import PrivateRoute from '@components/PrivateRoute'
const User = () => {
    return ( 
        <PrivateRoute>
            <p>User Profile</p>
        </PrivateRoute>
     );
}
 
export default User;