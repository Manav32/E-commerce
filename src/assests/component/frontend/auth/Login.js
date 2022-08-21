import React from "react";

import Nav from "../../../Layout/frontend/Nav";
const Login = () =>{
    return (
        <div>
        <Nav />
         {/* Login box */}
         <div className="w-4/5 lg:w-3/6 mx-auto mt-16 font-bold rounded border-2 border-gray-300">
            <h2 className="text-2xl text-center bg-gray-200 p-2 border-2 border-b-gray-300">Register</h2>
            <form className="p-5 flex flex-col space-y-2 font-medium">
                <label>Email ID</label>
                <input type="email" className="p-2 rounded border-2 focus:outline-gray-400"/>
                <label>Password</label>
                <input type="password" className="p-2 rounded border-2 focus:outline-gray-400"/>
                <input type="submit"  className="p-3 bg-gray-800 text-white font-bold w-fit mx-auto rounded px-5 "/>
            </form>
        </div>
        </div>
    );
}
export default Login;