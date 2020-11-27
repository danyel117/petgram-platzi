import React, { useEffect, useReducer, useRef, useState } from 'react';
import Link from 'next/link';
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const { show } = useIntersectionObserver(ref);
  const key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return false;
    }
  });

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
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
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
