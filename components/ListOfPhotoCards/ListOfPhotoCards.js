import React, { useEffect,useState } from 'react';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import {getPosts} from 'utils/api'
const ListOfPhotoCards = ({ categoryID }) => {
  const [photos,setPhotos] = useState([])
  const [liked,setLiked] = useState([])
  const [fetch,setFetch] = useState(false)

  useEffect(()=>{
    setFetch(true)
  },[categoryID])
  useEffect(() => {
    const fetchPosts = async () => {
      await getPosts(categoryID).then((res) => {
        console.log(res)
        setLiked(res.liked)
        setPhotos(res.posts)
        setFetch(false)
      });
    };
    if(fetch){
      fetchPosts();
    }
  }, [fetch]);
  return (
    <ul>
      {photos && liked &&
        photos.map((photo) => {
          return <PhotoCard key={photo.id} likeCount={photo.Favs.length} setFetch={setFetch} liked={liked.filter(lk=>lk.id===photo.id)[0]} {...photo} />;
        })}
    </ul>
  );
};

export default ListOfPhotoCards;
