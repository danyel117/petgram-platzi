import React from 'react';
import { useRouter } from 'next/router';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const PhotoDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } });

  if (loading) return 'Loading...';
  if (error) return 'Error...';
  return <PhotoCard {...data.photo} />;
};

export default PhotoDetail;
