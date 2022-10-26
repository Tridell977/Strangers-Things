import React from "react";

const Logout = ({setToken}) => {
    
    return (
        <button onClick={() => {
        setToken("");
        localStorage.removeItem('token');
        }}>Logout
        </button>
    )
}

export default Logout;