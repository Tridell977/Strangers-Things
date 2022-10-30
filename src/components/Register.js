import { React, useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";
const Register = ({username, setUsername, password, setPassword}) => {
        const [checkPassword, setCheckPassword] = useState('')
        let navigate = useNavigate();
        return (
            <div className="formContainer">
                <h3 id="regMessage">Please Register with an Username and Password</h3>
        <form id="registerForm" onSubmit={(event) => {
            event.preventDefault();
            if(password === checkPassword){
            registerUser(username, password, "register")
            navigate('/login')
            } else {
                alert('Passwords did not match, please try again.')
            }
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