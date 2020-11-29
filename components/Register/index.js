import React from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm'

const Register = () => {
    const { setAuthTokens } = useAuth();
    const register = (e)=>{
    }
    return (
      <UserForm onSubmit={register} title="Registrarse"/>
    );
}
 
export default Register;