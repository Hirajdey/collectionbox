import { AppContextType } from "../types"

export const getInitialContext = () => {
    const initialContext: AppContextType = {
        userName: '',
        userId: '',
        userPhone: '',
        userEmail: '',
        userRole: ''
    }
    return initialContext;
}
