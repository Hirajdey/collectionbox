import { API } from '../config';

const USER_REGISTER = API + "/register";
const USER_ACTIVATION = API + "/register/activate";
const USER_LOGIN = API + "/login";
const USER_VERIFY_SIGNIN = API + "/user";
const ADMIN_VERIFY_SIGNIN = API + "/admin";

const APIS = {
    USER_REGISTER,
    USER_ACTIVATION,
    USER_LOGIN,
    USER_VERIFY_SIGNIN,
    ADMIN_VERIFY_SIGNIN
}

export default APIS;
