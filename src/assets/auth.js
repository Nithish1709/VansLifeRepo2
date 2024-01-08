import { redirect } from "react-router-dom";

const email = "gnithishkumar2002@gmail.com"
const pass = "123";

localStorage.setItem("isLoggedIn", false)

export async function loginCheck(){
   return localStorage.getItem("isLoggedIn")
    
}

export async function aunthenticateUser(request){
  
    const data =await request.formData();
    if(data.get("email") === email && data.get("password") === pass){
        localStorage.setItem("isLoggedIn",true)
        return redirect("/host")

    }else{
        throw new Error("coudn`t find the user")
    }
}