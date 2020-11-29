import React from 'react';
import useInputValue from 'hooks/useInputValue';
import { Form, Input, Button, Title } from './styles';

const Login = ({onSubmit, title}) => {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
      <>
      <Title>{title}</Title>
    <Form onSubmit={onSubmit}>
      <Input placeholder='Email' required {...email} />
      <Input placeholder='Password' type='password' required {...password} />
      <Button type='submit'>{title}</Button>
    </Form>
      </>
  );
};

export default Login;
