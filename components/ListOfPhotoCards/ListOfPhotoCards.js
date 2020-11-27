import React from 'react';
import PhotoCard from '@components/PhotoCard/PhotoCard';

const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map((id) => {
        return <PhotoCard key={id} id={id} />;
      })}
    </ul>
  );
};

export default ListOfPhotoCards;
