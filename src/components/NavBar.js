import React from "react";
import { NavLink, Route } from "react-router-dom";

const NavBar = () => {
    return (
        <header id="header">
        <h1>Stranger's Things</h1>
        <nav id="NavBar">
            <NavLink className="NavLink" to="/home">Home</NavLink>
            <NavLink className="NavLink" to="/posts">Posts</NavLink>
            <NavLink className="NavLink" to="/profile">Profile</NavLink>
        </nav>
        </header>
    )
}


export default NavBar;