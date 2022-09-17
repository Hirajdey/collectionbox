import { ReactNode } from "react"

// Components
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <Header/> 
        {children}
        <Footer/>
    </>
  )
}

export default Layout