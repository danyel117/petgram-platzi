import React from 'react';
import PrivateRoute from '@components/PrivateRoute'
import ListOfFavs from '@components/ListOfFavs'

const Favs = () => {

    return (
        <PrivateRoute>
            <ListOfFavs/>
        </PrivateRoute>
    );
}
 
export default Favs;