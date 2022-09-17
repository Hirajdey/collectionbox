import { ReactNode } from "react"
import classnames from "classnames"

// Styles
import Styles from './Row.module.scss'

interface RowProps{
    children: ReactNode;
    mainClass?: string;
}

const Row = ({children, mainClass}:RowProps) => {
  return (
    <div className={classnames(Styles.main, mainClass)}>
        {children}
    </div>
  )
}

export default Row