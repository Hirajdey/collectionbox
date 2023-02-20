import { API } from '../config';

const USER_REGISTER = API + "/register";
const USER_ACTIVATION = API + "/register/activate";
const USER_LOGIN = API + "/login";
const USER_VERIFY_SIGNIN = API + "/user";
const ADMIN_VERIFY_SIGNIN = API + "/admin";
const USER_FORGOT_PASSWORD = API + "/forgot-password";
const USER_RESET_PASSWORD = API + "/reset-password";

const APIS = {
    USER_REGISTER,
    USER_ACTIVATION,
    USER_LOGIN,
    USER_VERIFY_SIGNIN,
    ADMIN_VERIFY_SIGNIN,
    USER_FORGOT_PASSWORD,
    USER_RESET_PASSWORD
}

export default APIS;
