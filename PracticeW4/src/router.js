import { auth } from "./auth";


let users = JSON.parse(localStorage.getItem("users"))
let userLog = JSON.parse(localStorage.getItem("user"))
let employees = JSON.parse(localStorage.getItem("employee"))

const routes = {
    "/" : "/src/views/home.html ",
    "/login" : "/src/views/login.html",
    "/register" : "/src/views/register.html",
    "/employees" : "/src/views/employees.html"
}

export async function renderRout() {
    const path = location.hash.slice (1) || "/";
    const app = document.getElementById("app");
    const isAuth = auth.isAuthenticated();

    if (!isAuth && path !== "/login"){
        if (path !== "/register"){
            location.hash = "/login"
            return;
        }
    }

    if (isAuth && path !== "/login"){
        location.hash = "/"
        return;
    } 

    const file  = routes[path];
    if(!file){
        app.innerHTML = "<h2>Pagina no encontrada</h2>";
        return;
    }

    try{
        // const res = await
    }catch (error){
        console.log
    }



}