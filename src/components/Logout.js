import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({setToken}) => {
    let navigate = useNavigate();
    return (
        <button onClick={() => {
        setToken("");
        localStorage.removeItem('token');
        navigate("/login")
        }}>Logout
        </button>
    )
}

export default Logout;