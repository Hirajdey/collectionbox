
import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import classnames from 'classnames';

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
    <div className={classnames(Styles.inputWrapper, inputWrapperClassname)}>
        {labelText && <label className={classnames(Styles.label, labelClassname)}>{labelText}</label>} 
        <div className={classnames(Styles.inputBox, inputBoxClassname)}>
            <input 
                type={type} 
                name={name} 
                required={isRequired} 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                className={classnames(Styles.input, inputClassname)}
            />
        </div>
        {error && <span className={Styles.error}>{error}</span>}
    </div> 
  )
});

export default AppInput