
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

