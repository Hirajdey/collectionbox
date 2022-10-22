import Link from "next/link";

// Styles
import Styles from "./Nav.module.scss";
import { NavDataTypes } from "../Header/Header";
import { useContext } from "react";
import { AppContext } from "../../app-context/AppContext";
import { ROLES } from "../../constants";
interface NavProps{
  onClickHandleNav: (label:string) => void;
  data: NavDataTypes[];
}

const Nav = ({onClickHandleNav, data}:NavProps) => {
  const { userName, userRole } = useContext(AppContext);

  return (
    <ul className={Styles.ul}>
        {data.map(menu => (
          <li className={Styles.navItem} onClick={() => onClickHandleNav(menu.label)}> 
            <Link className={Styles.navLink} href={menu.url}>
              {menu.label}
            </Link>
          </li>
        ))}
        {
          userName && (
            <li className={Styles.navItem}>
              <Link className={Styles.navLink} href={userRole !== ROLES.admin ?  "/user": "/admin"}>
                {userName}
              </Link>
            </li>
          )
        }
    </ul>
  )
}

export default Nav