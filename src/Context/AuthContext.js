
import { Outlet, Navigate } from "react-router-dom";
import { useState, useContext, createContext } from "react";



const PrivateRoute = () => {
    let [authUser, setAuthUser] = useState(()=>localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
    return authUser ? <Outlet /> : <Navigate to={'/'}/>
}

export default PrivateRoute; 

