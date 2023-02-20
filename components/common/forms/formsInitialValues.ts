import { forgotPasswordFormProps, loginFormProps, registerFormProps, resetPasswordFormProps } from "./formTypes";

export const initialValuesRegistrForm: registerFormProps = {
    name: "",
    email: "",
    password: ""
}

export const initialValuesLoginForm: loginFormProps = {
    email: "",
    password: ""
}

export const initialValuesForgotPasswordForm: forgotPasswordFormProps = {
    email: ""
}

export const initialValuesResetPasswordForm: resetPasswordFormProps = {
    password: ""
}