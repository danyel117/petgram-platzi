import React, { useEffect,useState } from 'react';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import {getPosts} from 'utils/api'
const ListOfPhotoCards = ({ categoryID }) => {
  const [photos,setPhotos] = useState([])
  const [likes,setLikes] = useState([])
  const [user,setUser] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      await getPosts(categoryID).then((res) => {
        console.log(res);
        setLikes(res.likes);
        setPhotos(res.posts);
        setUser(res.usuario);
      });
    };
    fetchPosts();
  }, [categoryID]);
  return (
    <ul>
      {photos &&
        photos.map((photo) => {
          return <PhotoCard key={photo.id} setLikes={setLikes} likes={likes.filter(el=>el.postId===photo.id).length} liked={likes.filter(el=>(el.userId===user.id && el.postId===photo.id)).length>0} {...photo} />;
        })}
    </ul>
  );
};

export default ListOfPhotoCards;
