import React from 'react';
import useInputValue from 'hooks/useInputValue';
import { Form, Input, Button, Title,Error } from './styles';
import SubmitButton from '@components/SubmitButton'
const UserForm = ({onSubmit, title, error, disabled}) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const handleSubmit = (e)=>{
    e.preventDefault()
    onSubmit(email,password)
  }
  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} autoComplete='off' placeholder='Email' required {...email} />
        <Input disabled={disabled} autoComplete='off' placeholder='Password' type='password' required {...password} />
        <SubmitButton disabled={disabled} title={title}/>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
