import React from 'react';
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
    const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(REGISTER);
    const register = (email,password)=>{
      mutation({
        variables: {
          input: { email,password },
        },
      }).then(setAuthTokens(true));
    }
    return (
      <UserForm onSubmit={register} title="Registrarse"/>
    );
}
 
export default Register;