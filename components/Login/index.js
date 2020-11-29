import React from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const REGISTER = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const Login = () => {
  const { setAuthTokens } = useAuth();
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(REGISTER);
  const login = (email, password) => {
    mutation({
      variables: {
        input: { email: email.value, password: password.value },
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const errorMessage = mutationError && 'Error en el inicio de sesión';

  return (
    <>
      <UserForm onSubmit={login} title='Iniciar Sesión' error={errorMessage} disabled={mutationLoading} />
    </>
  );
};

export default Login;
