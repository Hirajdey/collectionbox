import { NextRouter } from "next/router"
import { COOKIES, ROLES } from "../constants"
import { ROUTE } from "../constants/routeString"
import { getCookie } from "./auth"

export const roleBasedRoute = (role:string | undefined, route:NextRouter) => {
    switch(role){
        case ROLES.admin : route.push(ROUTE.admin.withParam);
            break;
        default: route.push(ROUTE.user.withParam);
    }
}

export const routeControl = (role:string | undefined, route:NextRouter) => {
    const token = getCookie(COOKIES.tooken);

    if((token !== undefined) && (route.asPath.includes(ROUTE.login.withParam) || route.asPath.includes(ROUTE.register.withParam)) ){
        roleBasedRoute(role, route)
    }

    if((token === undefined) && (route.asPath.includes(ROUTE.user.withParam) || route.asPath.includes(ROUTE.admin.withParam))){
        route.push(ROUTE.login.withParam)
    }

    if((role === ROLES.admin) && route.asPath.includes(ROUTE.user.withParam)){
        roleBasedRoute(role, route)
    }

    if(role !== ROLES.admin && route.asPath.includes(ROUTE.admin.withParam)){
        roleBasedRoute(role, route)
    }
}



