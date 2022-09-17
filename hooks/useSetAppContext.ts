import { useEffect, useState } from 'react'
import { getInitialContext } from '../methods/getInitialContext'
import { AppContextType } from '../types'

export const useSetAppContext = () => {
    const [context, setContext] = useState<AppContextType>(getInitialContext())

    useEffect(() => {
        setContext((intlState) => ({
            ...intlState,
            setUserName: (userName) => {
                if(userName){
                    setContext((state) => ({...state, userName:userName}))
                }
            },
            setUserId: (userId) => {
                if(userId){
                    setContext((state) => ({...state, userId}))
                }
            },
            setUserEmail: (userEmail) => {
                if(userEmail){
                    setContext((state) => ({...state, userEmail}))
                }
            },
            setUserPhone: (userPhone) => {
                if(userPhone){
                    setContext((state)=> ({...state, userPhone}))
                }
            }
        }))
    }, [])
    
    return {context, setContext}
}
