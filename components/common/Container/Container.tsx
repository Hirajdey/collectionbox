import { ReactNode } from 'react'
import classnames from "classnames"

// Styles
import Styles from './Container.module.scss'

interface ContainerProps{ 
    children: ReactNode;
    mainClass?: string;
}

const Container = ({children, mainClass}: ContainerProps) => {
  return (
    <div className={classnames(Styles.main, mainClass)}>{children}</div>
  )
}

export default Container