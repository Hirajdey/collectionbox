import Link from "next/link"
import { NavMenuConstant } from "../constants"

// Styles
import Styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <ul className={Styles.ul}>
        {NavMenuConstant.map(menu => (
            <li className={Styles.navItem}> <Link className={Styles.navLink} href={menu.url}>{menu.label}</Link></li>
        ))}
    </ul>
  )
}

export default Nav