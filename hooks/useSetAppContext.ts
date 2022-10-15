import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { COOKIES, COOKIES_PATH } from '../constants';
import { getInitialContext } from '../methods/getInitialContext'
import { getKeyValueFromObj } from '../methods/getKeyValueFromObj';
import { AppContextType } from '../types'

export const useSetAppContext = () => {
    const [context, setContext] = useState<AppContextType>(getInitialContext())
    const [cookies, setCookie, removeCookie] = useCookies<string>(getKeyValueFromObj(COOKIES).values);
    
    useEffect(() => {
        setContext((intlState) => ({
            ...intlState,
            userName:cookies[COOKIES.name],
            setUserName: (userName) => {
                if(userName){
                    setCookie(COOKIES.name, userName, COOKIES_PATH.index);
                }else{
                    removeCookie(COOKIES.name, COOKIES_PATH.index);
                }
                setContext((state) => ({...state, userName}))
            },
            userId: cookies[COOKIES.userid],
            setUserId: (userId) => {
                if(userId){
                    setCookie(COOKIES.userid, userId, COOKIES_PATH.index);
                }else{
                    removeCookie(COOKIES.userid, COOKIES_PATH.index);
                }
                setContext((state) => ({...state, userId}))
            },
            userEmail: cookies[COOKIES.email],
            setUserEmail: (userEmail) => {
                if(userEmail){
                    setCookie(COOKIES.email, userEmail, COOKIES_PATH.index);
                }else{
                    removeCookie(COOKIES.email, COOKIES_PATH.index)
                }
                setContext((state) => ({...state, userEmail}))
            },
            setUserPhone: (userPhone) => {
                if(userPhone){
                    setContext((state)=> ({...state, userPhone}))
                }
            },
            userRole: cookies[COOKIES.role],
            setUserRole: (userRole) => {
                if(userRole){
                    setCookie(COOKIES.role, userRole, COOKIES_PATH.index)
                    setContext((state)=> ({...state, userRole}))
                }else{
                    removeCookie(COOKIES.role, COOKIES_PATH.index)
                }
            }
        }))
    }, [])
    
    return {context, setContext}
}
