import React from "react"
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { aunthenticateUser } from "../assets/auth"



export function loader({request}){
   const message = new URL(request.url).searchParams.get("message")
   return message
}

export async function action({request}){

   const path = new URL(request.url).searchParams.get("redirectto")

   const re = path?path:"/host";

   try{
    await aunthenticateUser(request)
    return redirect(re);
   }catch(err){
    return err.message
   }
}


export default function Login() {
    const message = useLoaderData();
    const errmessage = useActionData();



    return (
       <div className="main-content login--container">
            <div className="login-content">
                <h1>Sign in to your account</h1>
                {message && <>{message}</>}
                {errmessage && <>{errmessage}</>}
                <Form method="post" className="login-form" replace>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                       
                    />
                    <button>Log in</button>
                </Form>
            </div>
       </div>
    )

}