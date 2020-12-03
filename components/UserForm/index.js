import React from 'react';
import useInputValue from 'hooks/useInputValue';
import { Form, Input, Button, Title,Error } from './styles';
import SubmitButton from '@components/SubmitButton'
const UserForm = ({onSubmit, title, error, disabled}) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const nombre = useInputValue('');
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title==="Registrarse"){
      onSubmit(email,password,nombre)
    }
    else{
      onSubmit(email,password)
    }
  }
  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        {title==="Registrarse" && <Input disabled={disabled} autoComplete='off' placeholder='Nombre' required {...nombre} />}
        <Input disabled={disabled} autoComplete='off' placeholder='Email' required {...email} />
        <Input disabled={disabled} autoComplete='off' placeholder='Password' type='password' required {...password} />
        <SubmitButton disabled={disabled} title={title}/>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
