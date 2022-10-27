import APIS from "./const";
import { toast } from 'react-toastify';
import axios from 'axios';
interface UserRegisterProps {
  name: string;
  email: string;
  password: string;
}

async function userRegister({name, email, password}:UserRegisterProps){
  try {
    const request = await fetch(new Request(APIS.USER_REGISTER, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })); 

    if(request.status === 200){
      const response = await request.json();
      toast.success(`${response.message}`);
    }else{
      const response = await request.json();
      toast.error(`${response.error}`);
    }

  } catch(error){
    toast.error('An error occured, please try again after sometime');
  }

  return null;
}

interface UserActivationProps {
  token: string;
}

async function userActivation({token}: UserActivationProps) { 
  try{
    const request = await fetch(new Request(APIS.USER_ACTIVATION, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token
        })
    }));

    if(request.status === 200){
      const response = await request.json();
      toast.success(`${response.message}`);
    }else{
      const response = await request.json();
      toast.error(`${response.error}`);
    }
  } catch(error){
    toast.error('An error occured, please try again after sometime');
  }

  return null;
}

interface UserLoginProps {
  email: string;
  password: string;
}

async function userLogin({email, password}:UserLoginProps) {
  try {
    const request = await fetch(new Request(APIS.USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }));

    const response = await request.json();

    if(request.status === 200){
      return {token: response.token, user: response.user};
    }else{
      toast.error(`${response.error}`);
    }

  } catch(error){
    console.log('userlogin error',error);
  }
  
  return null;
}

const authService = {
  userRegister,
  userActivation,
  userLogin
} 

export default authService;