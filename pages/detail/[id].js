import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import PhotoCard from '@components/PhotoCard/PhotoCard';
import {getPhoto} from 'utils/api'

const PhotoDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const [photo,setPhoto] = useState({})
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const fetchPhoto = async ()=>{
      setLoading(true)
      if(id){
        await getPhoto(id).then(res=>{
          setPhoto(res.posts)
          setLoading(false)
        })
      }
    }
    fetchPhoto()
  },[id])

  return <PhotoCard {...photo} showButton={false} loading={loading} />;
};

export default PhotoDetail;
