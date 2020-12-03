import React, {useState,useEffect} from 'react';
import Link from 'next/link'
import {A, Grid, Image} from './styles'
import {getFavs} from 'utils/api'

const ListOfFavs = () => {

    const [favs,setFavs] = useState([])
    
    useEffect(()=>{
        const fetchFavs = async ()=>{
            await getFavs().then(res=>{
                console.log("favs",res);
                setFavs(res)
            })
        }
        fetchFavs()
    },[])
    return ( 
        <>
            <h3>Mis Publicaciones Favoritas</h3>
            <Grid>
                {
                favs && favs.map((fav)=>{
                    return (
                        <Link key={fav.id} href={`/detail/${fav.publicacion.id}`}>
                            <A>
                                <Image src={fav.publicacion.foto}/>
                            </A>
                        </Link>
                    );
                })
                }
            </Grid>
        </>
     );
}
 
export default ListOfFavs;