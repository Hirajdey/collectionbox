import { AppContextType } from "../types"

export const getInitialContext = () => {
    const initialContext: AppContextType = {
        userName: "HirajDey",
        userId: "",
        userPhone: "",
        userEmail: ""
    }
    return initialContext;
}
