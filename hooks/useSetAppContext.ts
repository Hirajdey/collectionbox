import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { COOKIES, COOKIES_PATH } from '../constants';
import { getInitialContext } from '../methods/getInitialContext'
import { AppContextType } from '../types'

export const useSetAppContext = () => {
    const [context, setContext] = useState<AppContextType>(getInitialContext())

    useEffect(() => {
        setContext((intlState) => ({
            ...intlState,
            userName:Cookies.get(COOKIES.name),
            setUserName: (userName) => {
                if(userName){
                    Cookies.set(COOKIES.name, userName, COOKIES_PATH.index);
                }else{
                    Cookies.remove(COOKIES.name);
                }
                setContext((state) => ({...state, userName}))
            },
            userId: Cookies.get(COOKIES.userid),
            setUserId: (userId) => {
                if(userId){
                    Cookies.set(COOKIES.userid, userId, COOKIES_PATH.index);
                }else{
                    Cookies.remove(COOKIES.userid);
                }
                setContext((state) => ({...state, userId}))
            },
            userEmail: Cookies.get(COOKIES.email),
            setUserEmail: (userEmail) => {
                if(userEmail){
                    Cookies.set(COOKIES.email, userEmail, COOKIES_PATH.index);
                }else{
                    Cookies.remove(COOKIES.email)
                }
                setContext((state) => ({...state, userEmail}))
            },
            setUserPhone: (userPhone) => {
                if(userPhone){
                    setContext((state)=> ({...state, userPhone}))
                }
            },
            userRole: Cookies.get(COOKIES.role),
            setUserRole: (userRole) => {
                if(userRole){
                    Cookies.set(COOKIES.role, userRole, COOKIES_PATH.index)
                    setContext((state)=> ({...state, userRole}))
                }else{
                    Cookies.remove(COOKIES.role)
                }
            }
        }))
    }, [])
    
    return {context, setContext}
}
