import React, { useEffect } from 'react';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getPhotos = gql`
  query getPhotos($categoryID: ID) {
    photos(categoryId: $categoryID) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
const ListOfPhotoCards = ({ categoryID }) => {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryID } });

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
