import React, { useEffect } from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm'
import { useMutation } from '@apollo/react-hooks';
import {gql} from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const Register = () => {
    const { setAuthTokens } = useAuth();
    const [mutation, {loading: mutationLoading, error: mutationError }] = useMutation(REGISTER);
    const register = (email,password)=>{
      mutation({
        variables: {
          input: { email:email.value,password:password.value },
        },
      }).then(data=>{
        console.log(data);
      }).catch(e=>{
        console.error(e);
      });
    }

    const errorMessage=mutationError && "Error en el registro" 

    return (
      <>
      <UserForm onSubmit={register} title="Registrarse" error={errorMessage} disabled={mutationLoading}/>
      </>
    );
}
 
export default Register;