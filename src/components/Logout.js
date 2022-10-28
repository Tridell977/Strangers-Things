import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = ({setToken}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
        setToken("");
        localStorage.removeItem('token');
        navigate("/posts")
        }}>Logout
        </button>
    )
}

export default Logout;