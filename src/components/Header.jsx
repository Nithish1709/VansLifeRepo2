import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){

    const activeStyles ={
       
        // backgroundColor:"#2c2c87",
        borderBottom:"4px solid #2c2c87"
       
    }

    return(
        <header className="header">
            <NavLink to="/" className="home--btn" style={{fontWeight:"bold",fontSize:"1rem",color:"white",}}>#VANLIFE</NavLink>
            <NavLink className="aside" to="/host" style={({ isActive }) => isActive ? activeStyles : null}>Host</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink>
            <NavLink to="/vans" style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
            <NavLink to="/login" style={({ isActive }) => isActive ? activeStyles : null}>login</NavLink>
        </header>
    )
}