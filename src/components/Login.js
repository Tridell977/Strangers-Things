import {React, useState} from "react";

const Login = ({username, setUsername, password, setPassword, setRegistering}) => {
    return (
        <form id="login" onSubmit={(event) => {
            event.preventDefault()
            setPassword("");
            setUsername("");
            console.log(password)
            console.log(username)
        }}>
            <input id="username" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input id="password" type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Submit</button>
            <button onClick={() => {setRegistering(true)}}>Register</button>
        </form>
    )
}
export default Login;