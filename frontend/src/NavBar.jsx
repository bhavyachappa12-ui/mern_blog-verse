import React from "react";
import {Link} from 'react-router-dom'
const NavBar = () => {
    return(
        <div className="flex justify-around h-16 items-center w-full border-2 border-black">
            <h1 className="md:text-s font-bold">BlogVerse</h1>
            <Link to="/" className="text-gray-700 hover:bg-blue-200 px-1 py-1 rounded-lg cursor-pointer md:px-3 md:py-3">Home</Link>
            <div className="flex gap-5">
                <Link to="/signin" className="font-semibold text-gray-700 cursor-pointer px-1 py-1 md:px-3 md:py-3">Sign In</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-1 py-1 rounded-xl cursor-pointer md:px-3 md:py-3">Sign Up</Link>
            </div>

        </div>
    )}
    export default NavBar