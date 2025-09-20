import React from "react";
const NavBar = () => {
    return(
        <div className="flex justify-around h-16 items-center border-2 border-black">
            <h1 className="text-xl font-bold">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-blue-200 px-5 py-2 rounded-lg cursor-pointer">Home</button>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-700 cursor-pointer">Sign In</button>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer">Sign Up</button>
            </div>

        </div>
    )}
    export default NavBar