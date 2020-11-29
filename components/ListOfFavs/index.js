import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Link from 'next/link'
import {A, Grid, Image} from './styles'
import PhotoCard from '@components/PhotoCard/PhotoCard'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;


const ListOfFavs = () => {
    const { loading, error, data } = useQuery(GET_FAVS,{fetchPolicy:"cache-and-network"});

    if (loading) return 'Loading...';
    if (error) return 'Error...';
    return ( 
        <>
            <h3>Mis Publicaciones Favoritas</h3>
            <Grid>
                {
                data && data.favs.map((fav)=>{
                    return (
                        <Link key={fav.id} href={`/detail/${fav.id}`}>
                            <A>
                                <Image src={fav.src}/>
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