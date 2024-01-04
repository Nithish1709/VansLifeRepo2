import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){

    const activeStyles ={
       
        // backgroundColor:"#2c2c87",
        borderBottom:"5px solid #2c2c87"
       
    }

    return(
        <header className="header">
            <NavLink to="/" className="home--btn" style={{fontWeight:"bolder",fontSize:"1.5rem",color:"#1C1CF0",}}>#VANLIFE</NavLink>
            <NavLink className="aside" to="/host" style={({ isActive }) => isActive ? activeStyles : null}>Host</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink>
            <NavLink to="/vans" style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
            
        </header>
    )
}