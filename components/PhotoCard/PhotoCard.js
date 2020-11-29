import React, { useEffect, useReducer, useRef, useState } from 'react';
import Link from 'next/link';
import { ImgWrapper, Img, Article } from './styles';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import FavButton from 'components/FavButton/FavButton';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE,showButton=true }) => {
  const ref = useRef(null);
  const { show } = useIntersectionObserver(ref);
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_LIKE_PHOTO);
  const toggleLike = () => {
      mutation({
        variables: {
          input: { id },
        },
      });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link href={`/detail/${id}`}>
            <a>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
          </Link>
          {showButton && <FavButton likes={likes} liked={liked} onClick={toggleLike} />}
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
