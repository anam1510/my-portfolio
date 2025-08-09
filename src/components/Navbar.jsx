import React from "react";

const Navbar=()=>{
    return(
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex  justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
                <ul className=" hidden md:flex gap-6 text-gray-700 font-medium">
                    <li><a href="#home" className="hover:text-blue-600 cursor-pointer">Home</a></li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li><a href="#projects" className="hover:text-blue-600 cursor-pointer">Projects</a></li>
                    <li className="hover:text-blue-600 cursor-pointer">Contacts</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;