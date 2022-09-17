import { useContext } from "react"
import { AppContext } from "../../app-context/AppContext"
import { useCookies } from 'react-cookie';

const Home = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [cookies, setCookie] = useCookies(['name']);

  const onClickUpdateUserName = () => {
    setUserName?.("HD")
  }

  return (
    <div>Home - {userName} <button onClick={onClickUpdateUserName}>UpdateName</button></div>
  )
}

export default Home