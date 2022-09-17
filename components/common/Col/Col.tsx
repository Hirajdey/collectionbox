import { ReactNode } from "react"
import classnames from "classnames"

//Styles
import Styles from "./Col.module.scss"

interface ColProps{
    children: ReactNode;
    mainClass?: string;
}

const Col = ({children, mainClass}:ColProps) => {
  return (
    <div className={classnames(Styles.main, mainClass)}>{children}</div>
  )
}

export default Col