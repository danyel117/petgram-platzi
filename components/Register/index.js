import React,{useState} from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm'
import {createUser} from 'utils/api'

const Register = () => {
    const { setAuthTokens } = useAuth();
    const [errorMessage,setErrorMessage] = useState('')
    const [loading,setLoading] = useState(false)
    const register = async (email,password,nombre)=>{
      setLoading(true)
      await createUser({name:nombre.value,email:email.value,password:password.value}).then(res=>{
        setLoading(false)
        setAuthTokens(res.token)
      })
    }
    return (
      <>
        <UserForm onSubmit={register} title="Registrarse" error={errorMessage} disabled={loading}/>
      </>
    );
}
 
export default Register;