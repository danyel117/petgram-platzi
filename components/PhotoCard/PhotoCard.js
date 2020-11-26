import React from 'react';
import Link from 'next/link';
import { ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <Link href={`/detail/${id}`}>
        <a>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>
      </Link>
      <Button>
        <MdFavoriteBorder size='32px' />
        {likes} likes!
      </Button>
    </article>
  );
};

export default PhotoCard;
