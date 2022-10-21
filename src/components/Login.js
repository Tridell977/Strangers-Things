import {React, useEffect, useState} from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";


const Login = ({username, setUsername, password, setPassword, setToken, setLoggedIn, token}) => {
    const handleLogin = async (event) => {
        event.preventDefault();
        const data = await registerUser(username, password, "login")
        setToken(data.data.token)
        localStorage.setItem("token", data.data.token)
        setPassword("");
        setUsername("");
    }
    let navigate = useNavigate();
    return (
        <div className="formContainer">
        <h3>Please Enter your Username and Password</h3>
        <form id="login" onSubmit={handleLogin}>
            <input id="username" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input id="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Submit</button>
            {<button onClick={() => navigate('/register')}>Register</button> }
        </form>
        </div>
    )
}
export default Login;