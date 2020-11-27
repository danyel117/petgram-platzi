import React, { useEffect } from 'react';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(gql`
    query getPhotos {
      photos {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `);

  useEffect(() => {
    console.log(loading, error, data);
  }, [loading, error, data]);

  return (
    <ul>
      {data &&
        data.photos.map((photo) => {
          return <PhotoCard key={photo.id} {...photo} />;
        })}
    </ul>
  );
};

export default ListOfPhotoCards;
