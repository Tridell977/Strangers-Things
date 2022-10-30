import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({setToken}) => {
    const navigate = useNavigate()
    return (
        <button 
        id="logoutButton"
        onClick={() => {
        setToken("");
        localStorage.removeItem('token');
        navigate("/posts")
        }}
        >Logout
        </button>
    )
}

export default Logout;