import API from "./const";
import { toast } from 'react-toastify';

interface UserRegisterProps {
  name: string;
  email: string;
  password: string;
}

async function userRegister({name, email, password}:UserRegisterProps){
  try {
    const request = await fetch(new Request(API.USER_REGISTER, {
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
    }

  } catch(error){
    toast.error(`${error}`);
  }

  return null;
}

const AuthService = {
  userRegister,
} 

export default AuthService;