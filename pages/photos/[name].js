import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ListOfCategories from '@components/ListOfCategories/ListOfCategories';
import ListOfPhotoCards from '@components/ListOfPhotoCards/ListOfPhotoCards';

const CategoryPhotos = () => {
    const {
    query: { name },
  } = useRouter();
    return (
      <div>
        <ListOfCategories />
        <ListOfPhotoCards categoryID={name} />
      </div>
    );
}
 
export default CategoryPhotos;