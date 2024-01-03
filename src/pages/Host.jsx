import React from "react";
import  HostLayout  from "./hostContents/HostLayout";
import { Outlet } from "react-router-dom";

export default function Host(){
    return(

        <div className="host-container">
            <HostLayout />
            <Outlet />
        </div>
    )
}