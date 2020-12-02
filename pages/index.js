import React from 'react';
import ListOfCategories from '@components/ListOfCategories/ListOfCategories';
import ListOfPhotoCards from '@components/ListOfPhotoCards/ListOfPhotoCards';
import PrivateRoute from '@components/PrivateRoute'
const Home  = () =>{
  return (
        <PrivateRoute>
          <ListOfCategories />
          <ListOfPhotoCards />
        </PrivateRoute>
  );
}

export default Home