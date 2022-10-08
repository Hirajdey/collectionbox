import APIS from "./const";
import { toast } from 'react-toastify';
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

const AuthService = {
  userRegister,
  userActivation
} 

export default AuthService;