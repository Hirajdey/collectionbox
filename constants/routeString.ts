export const ROUTE = {
    home: {
        withParam: "/",
        getUrl: () => "/"
    },
    login: {
        withParam: "/login",
        getUrl: () => "/login"
    },
    register: {
        withParam: "/register",
        getUrl: () => "/register"
    },
    admin: {
        withParam: "/admin",
        getUrl: () => "/admin"
    },
    user: {
        withParam: "/user",
        getUrl: () => "/user"
    },
    forgotPassword: {
        withParam: "/auth/password/forgot",
        getUrl: () => "/auth/password/forgot"
    }
}