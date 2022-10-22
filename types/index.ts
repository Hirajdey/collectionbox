
export interface AppContextType {
    userName?: string;
    setUserName?: (userName:string) => void;
    userId?: string;
    setUserId?: (userId:string) => void;
    userPhone?: string;
    setUserPhone?: (userPhone:string) => void;
    userEmail?: string;
    setUserEmail?: (userEmail: string) => void; 
    userRole?: string;
    setUserRole?: (userRole : string) => void;
}

export enum NAVMENU {
    HOME = "home",
    LOGIN = "login",
    REGISTER = "register",
    LOGOUT = "logout",
    ADMIN = "admin",
    USER = "user"
}