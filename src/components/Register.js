import {React, useEffect} from "react";
import { fetchAPI } from "../api/api";

const Register = ({setRegistering}) => {
        useEffect(() => {fetchAPI("users/register").then((result) => {
            console.log(result);
        })}, []);
        return (
        <form id="registerForm" onSubmit={(event) => {
            event.preventDefault();
            setRegistering(false);
        }}>
            <input type="text" required placeholder="Username"/>
            <input type="password" minLength="8" required placeholder="Password"/>
            <input type="password" minLength="8" required placeholder="Password Check"/>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;