import {React, useEffect} from "react";
import { fetchAPI, registerUser } from "../api/api";
const Register = ({username, setUsername, password, setPassword, setRegistering, checkPassword, setCheckPassword}) => {
    
        return (
            <div className="formContainer">
                <h3>Please Register with an Username and Password</h3>
        <form id="registerForm" onSubmit={(event) => {
            event.preventDefault();
            password === checkPassword ? registerUser(username, password, "register") : console.log('nope');
            setPassword("");
            setUsername("");
            setCheckPassword("");
        }}>
            <input className="textInput" type="text" required placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input className="textInput" type="password" minLength="8" required placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input className="textInput" type="password" minLength="8" required placeholder="Password Check" value={checkPassword} onChange={(event) => setCheckPassword(event.target.value)}/>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default Register;