import API from "./const";

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

    console.log("ReQUEST Status", request.status);
    
    // if(request.status){

    // }

  } catch(error){
    console.log("AUTH SERVICE ERROR", error)
  }

  return null;
}

const AuthService = {
  userRegister,
} 

export default AuthService;