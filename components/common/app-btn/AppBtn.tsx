import { ReactNode } from 'react'
import classNames from 'classnames';

// Styles
import Styles from './AppBtn.module.scss'

interface AppBtnProps { 
    children: ReactNode;
    type: "submit" | "reset";
    btnStyleType: "outline" | "full" | "link";
    btnClassnames?: string;
    disabled?: boolean;
}

export const AppBtn = ({children, type, btnStyleType, btnClassnames, disabled = false }:AppBtnProps) => {
  return (
    <button disabled={disabled} type={type} className={classNames(Styles.main, Styles[btnStyleType] ,btnClassnames, disabled ? Styles.disabled : "")}>{children}</button>
  )
}

