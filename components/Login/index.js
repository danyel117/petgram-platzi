import React from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const Login = () => {
  const { setAuthTokens } = useAuth();
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LOGIN);
  const login = (email, password) => {
    mutation({
      variables: {
        input: { email: email.value, password: password.value },
      },
    })
      .then(({data}) => {
        const {login}=data
        setAuthTokens(login);
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
