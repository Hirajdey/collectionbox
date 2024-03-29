export interface registerFormProps {
    name: string;
    email: string;
    password: string | number
}
export interface loginFormProps {
    email: string;
    password: string | number
}

export interface forgotPasswordFormProps {
    email: string;
}

export interface resetPasswordFormProps {
    password: string | number
}
