import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){

    const activeStyles ={
        textDecoration : "underline",
        fontWeight: "bold"
    }

    return(
        <header className="header">
            <NavLink to="/" className="home--btn">#VANLIFE</NavLink>
            <div className="head--aside">
                <NavLink to="/host" style={({ isActive }) => isActive ? activeStyles : null}>Host</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink>
                <NavLink to="/vans" style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
            </div>
        </header>
    )
}