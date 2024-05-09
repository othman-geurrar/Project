


import {Outlet, Navigate} from "react-router-dom"


const Protected = () => {

     // const isLoggedIn =  localStorage.getItem("isLoggedIn")
     const isLoggedIn = sessionStorage.getItem("isLoggedIn")
     console.log(isLoggedIn);
     return  isLoggedIn ? <Outlet/> : <Navigate to="/"/>
}

export default Protected


