import React from 'react';
import { useRouter } from 'next/router';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const query = gql`
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
  const { loading, error, data } = useQuery(query, { variables: { id } });

  if (loading) return 'Loading...';
  return <PhotoCard {...data.photo} />;
};

export default PhotoDetail;
