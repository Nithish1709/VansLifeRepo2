import React from "react";
import  HostLayout  from "./hostContents/HostLayout";
import { Outlet,redirect } from "react-router-dom";
import { loginCheck } from "../assets/auth";

export async function loader({request}){
  const url = new URL(request.url);
    const isLogged = await loginCheck();
    if(isLogged === "false"){
        return redirect(`/login?message=please login&redirectto=${url.pathname}`);
    }else{
        return null
    }
}

export default function Host(){
    return(

        <div className="host-container main-content">
            <HostLayout />
            <Outlet />
        </div>
    )
}