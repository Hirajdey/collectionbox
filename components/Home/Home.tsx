import { useRouter } from "next/router";
import { useContext, useEffect } from "react"
import { AppContext } from "../../app-context/AppContext"
import { COOKIES } from "../../constants";
import { ROUTE } from "../../constants/routeString";
import { getCookie } from "../../methods/auth";

const Home = () => {
  const { userName } = useContext(AppContext);
  const route = useRouter();
  const token = getCookie(COOKIES.tooken);

  // useEffect(() => {
  //   if(!token){
  //     route.push(ROUTE.login.withParam);
  //   }  
  // },[route])

  return (
    <div>Home - {userName} <button>UpdateName</button></div>
  )
}

export default Home