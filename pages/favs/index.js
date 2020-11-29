import React from 'react';
import PrivateRoute from '@components/PrivateRoute'
const Favoritos = () => {
    
    return (
        <PrivateRoute>
            <p>Favs</p>
        </PrivateRoute>
    );
}
 
export default Favoritos;