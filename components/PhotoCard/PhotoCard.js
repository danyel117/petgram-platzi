import React, { useRef } from 'react';
import Link from 'next/link';
import { ImgWrapper, Img, Article } from './styles';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import FavButton from 'components/FavButton/FavButton';
import {toggleLike} from '@utils/api'


const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, liked,setFetch, likeCount, setLikes, src = DEFAULT_IMAGE,showButton=true,loading=false }) => {
  const ref = useRef(null);
  const { show } = useIntersectionObserver(ref);
  const handleLike = async()=>{
    await toggleLike({post:id}).then(res=>{
      setFetch(true)
    })
  }
  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link href={`/detail/${id}`}>
            <a>
              <ImgWrapper>{loading ? <p>Loading...</p> : <Img src={src} />}</ImgWrapper>
            </a>
          </Link>
          {showButton && <FavButton likes={likeCount} liked={liked && liked.liked} onClick={handleLike} />}
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
