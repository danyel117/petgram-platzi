import React,{useState} from 'react';
import { useAuth } from 'context/auth';
import UserForm from 'components/UserForm';
import {fetchToken} from 'utils/api'

const Login = () => {
  const { setAuthTokens } = useAuth();
  const [errorMessage,setErrorMessage] = useState("")
  const disabled=false
  const login = async(email,password)=>{
    const data = { username: email.value, password: password.value };
    await fetchToken(data).then(res=>{
      console.log(res,res.status);
      if(res.status==="error"){
        setErrorMessage(res.error);
      }
      else{
        setAuthTokens(res.token)
      }
    })
  }
  return (
    <>
      <UserForm onSubmit={login} title='Iniciar Sesión' error={errorMessage} disabled={disabled} />
    </>
  );
};

export default Login;
