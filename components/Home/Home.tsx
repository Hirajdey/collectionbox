import { useContext } from "react"
import { useCookies } from "react-cookie";
import { AppContext } from "../../app-context/AppContext"

const Home = () => {
  const { userName, setUserName} = useContext(AppContext);
  const [cookies, setCookie, removeCookie] = useCookies<string>([]);

  const onClickUpdateUserName = () => {
    // setUserName?.("HD")
    console.log("name", userName);
  }
  
  return (
    <div>Home - {userName} <button onClick={onClickUpdateUserName}>UpdateName</button></div>
  )
}

export default Home