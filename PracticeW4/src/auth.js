export const auth ={
    isAuthenticated : () => !! localStorage.getItem("token"),
    login: (token,user) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
    },
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
    };