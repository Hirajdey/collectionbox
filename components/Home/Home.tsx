import { useContext } from "react"
import { AppContext } from "../../app-context/AppContext"

const Home = () => {
  const { userName, setUserName } = useContext(AppContext);
  
  const onClickUpdateUserName = () => {
    setUserName?.("HD")
  }

  return (
    <div>Home - {userName} <button onClick={onClickUpdateUserName}>UpdateName</button></div>
  )
}

export default Home