import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"

export default function Layout(){
    return(
         <div className="body">
            <Header />
            <Outlet />
            <Footer />
         </div>
       
    )
}