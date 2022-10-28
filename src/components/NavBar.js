import React from "react";
import { NavLink, Route } from "react-router-dom";
import {default as Logout} from "./Logout";

const NavBar = ({loggedIn, registered, setToken, setLoggedIn, token}) => {
    return (
        <header id="header">
        <h1>Stranger's Things</h1>
        <nav id="NavBar">
            {token ? <NavLink className="NavLink" to="/">Home</NavLink> : null }
            <NavLink className="NavLink" to="/posts">Posts</NavLink>
            {token ? <NavLink className="NavLink" to="/profile">Profile</NavLink> : null}
            {token ? <Logout setToken={setToken}/> : <NavLink className="NavLink" to="/login">Login</NavLink>}
            {token ? null : <NavLink className="NavLink" to="/register">Register</NavLink>}
        </nav>
        </header>
        
    )
}


export default NavBar;