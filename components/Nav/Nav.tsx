import Link from "next/link";

// Styles
import Styles from "./Nav.module.scss";
import { NavDataTypes } from "../Header/Header";
interface NavProps{
  onClickHandleNav: (label:string) => void;
  data: NavDataTypes[];
}

const Nav = ({onClickHandleNav, data}:NavProps) => {
  return (
    <ul className={Styles.ul}>
        {data.map(menu => (
          <li className={Styles.navItem} onClick={() => onClickHandleNav(menu.label)}> 
            <Link className={Styles.navLink} href={menu.url}>
              {menu.label}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Nav