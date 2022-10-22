
// Styles 
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../app-context/AppContext"
import { handleLogout } from "../../methods/auth"
import Col from "../common/Col/Col"
import Container from "../common/Container/Container"
import Row from "../common/Row/Row"
import { NavMenuConstant } from "../constants"
import Nav from "../Nav/Nav"

// Styles
import Styles from './Header.module.scss'

export interface NavDataTypes {
    label: string;
    url: string;
}

const Header = () => {
	const { userId } = useContext(AppContext);
	const [navState, setNavState] = useState<NavDataTypes[]>([]);

	const handleNavRender = () => {
		if(userId){
				const logInNavData = NavMenuConstant.filter((data) => data.label.toLowerCase() !== "login" && data.label.toLowerCase() !== "register");
				setNavState(logInNavData);
		}else{
			const logOutNavData = NavMenuConstant.filter((data) => data.label.toLowerCase() !== "logout");
			setNavState(logOutNavData);
		}
	}   
	
	useEffect(() => {
		handleNavRender();
	},[userId])

	const onClickHandleNav = (label:string) => {
		if(label.toLowerCase() === "logout"){
				handleLogout();
				const logOutNavData = NavMenuConstant.filter((data) => data.label.toLowerCase() !== "logout");
				setNavState(logOutNavData);
		}    
	}

  return (
    <header className={Styles.main}>
        <Container>
            <Row mainClass={Styles.rowCLass}>
                <Col>
                    Site Logo
                </Col>
                <Col>
                    <Nav onClickHandleNav={onClickHandleNav} data={navState}/>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header