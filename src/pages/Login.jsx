import React from "react";
import boy from "/404 Not Font/404Boy.png";
import Input from "../Components/Input";
import logo from '/SITE/auth-logo.png'
export default function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="Auth_banner flex justify-center items-center flex-1 bg-sky-500 pt-5 min-h-screen overflow-hidden">
        <img className="h-full mt-4" src={boy} alt="" />
      </div>
      <div className="Auth_form flex-1 flex justify-center items-center">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center"> 
          <img className="h-40 mx-auto" src={logo} alt="" />
            <div className="divider w-5/6 mx-auto"></div>
           <h3 className="text-2xl mt-5">Log in to your account</h3> 
          </div>
          <form className="max-w-xl mx-auto" action="">
            <Input label="Email" placeholder="Type you Email"></Input>
            <Input label="Password" placeholder="Type your Password"></Input>
            <button type="submit" className="btn  mt-8 text-white hover:bg-sky-500 bg-sky-500 w-full">Log in</button>

          </form>
          
        </div>
      </div>
    </div>
  );
}
