import React, { useEffect } from 'react';
import PrivateRoute from '@components/PrivateRoute'
import ListOfFavs from '@components/ListOfFavs'

const Favoritos = () => {

    return (
        <PrivateRoute>
            <ListOfFavs/>
        </PrivateRoute>
    );
}
 
export default Favoritos;