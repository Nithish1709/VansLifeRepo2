import React from "react";
import { NavLink } from "react-router-dom";

export default function About(){
    return(
        <div>About page
            <NavLink to="/vans">Explore our vans</NavLink>
        </div>
    )
}