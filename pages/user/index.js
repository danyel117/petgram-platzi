import React, {useState,useEffect} from 'react';
import PrivateRoute from '@components/PrivateRoute'
import {useAuth} from 'context/auth'
import SubmitButton from '@components/SubmitButton'
import {getUser} from 'utils/api'
const User = () => {
    const {authTokens,setAuthTokens} = useAuth()
    const [userData,setUserData] = useState({})
    useEffect(() => {
      const fetchUser = async () => {
        await getUser().then((res) => {
          setUserData(res)
        }).catch(e=>{
          console.error(e);
        });
      };
      if(authTokens){
        fetchUser();
      }
    }, [authTokens]);
    return ( 
        <PrivateRoute>
            <p>{userData.name}</p>
            <form onSubmit={()=>{setAuthTokens(false)}}>
                <SubmitButton title={"Cerrar Sesión"} />
            </form>
        </PrivateRoute>
     );
}
 
export default User;