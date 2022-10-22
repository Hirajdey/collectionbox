import { COOKIES, COOKIES_PATH } from "../constants";
import Cookies from 'js-cookie'

// set in cookie
export const setCokkie = (key:string, value:string) => {    
    if(typeof window !== 'undefined'){
        Cookies.set(key, value, COOKIES_PATH.index)
    }
}

// remove from cookie
export const removeCookie = (key:string) => {
    if(typeof window !== 'undefined'){
        Cookies.remove(key)
    }
}

// get from cookie such as stored token
// it will be useful when we need to make request to server with auth token 
export const getCookie = (key:string) => {
    if(typeof window !== 'undefined'){
        return Cookies.get(key)
    }
}

// authenticate user by passing data to cokie during signin
export const authenticate = (response: string, next: () => void) => {    
    setCokkie(COOKIES.tooken, response);
    next();
}

export const handleLogout = () => {
    removeCookie(COOKIES.tooken);
    removeCookie(COOKIES.userid);
    removeCookie(COOKIES.role);
    removeCookie(COOKIES.email);
    removeCookie(COOKIES.name);
}
