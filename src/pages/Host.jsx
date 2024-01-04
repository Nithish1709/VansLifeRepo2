import React from "react";
import  HostLayout  from "./hostContents/HostLayout";
import { Outlet } from "react-router-dom";

export default function Host(){
    return(

        <div className="host-container main-content">
            <HostLayout />
            <Outlet />
        </div>
    )
}