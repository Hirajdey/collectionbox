
import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';

// Styles
import Styles from './AppInput.module.scss'

interface AppInputProps<T>{ 
    name: string;
    type: "text" | "number" | "email" | "password";
    isRequired: boolean;
    labelText: string;
    value: T;
    error?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>
    inputWrapperClassname: string;
    inputClassname: string;
    inputBoxClassname: string;
    labelClassname: string
}

const AppInput = forwardRef(<T extends string | number | readonly string[] | undefined>({
    name, 
    type, 
    isRequired, 
    labelText, 
    value,
    error,
    onChange,
    onBlur,
    onFocus,
    inputWrapperClassname,
    inputClassname,
    inputBoxClassname,
    labelClassname
}:AppInputProps<T>) => {
  return (
    <div className={Styles.inputWrapper}> 
        <div className={Styles.inputBox}>
            <input type="text" />
        </div>
    </div> 
  )
});

export default AppInput