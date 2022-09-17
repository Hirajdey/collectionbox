
// Styles 
import Col from "../common/Col/Col"
import Container from "../common/Container/Container"
import Row from "../common/Row/Row"
import Nav from "../Nav/Nav"

// Styles
import Styles from './Header.module.scss'
const Header = () => {
  return (
    <header className={Styles.main}>
        <Container>
            <Row mainClass={Styles.rowCLass}>
                <Col>
                    Site Logo
                </Col>
                <Col>
                    <Nav/>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header