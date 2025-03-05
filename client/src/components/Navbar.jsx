import React from "react";
import { Link } from "react-router-dom";
import { Menu, UserRound } from "lucide-react";
import DSCE from "../assets/dsce.png";

const Navbar = () => {
    return (
        <nav className="bg-gray-100 shadow-md px-6 py-2 flex items-center justify-between">

            <div>
                <img src="../assets/dsce.png" alt="dsce" width={20} />
            </div>

            <h1 className="text-lg font-bold">DSCE Alumni-Portal</h1>

            <Link to={'/user'} className="flex gap-2 bg-gray-800 text-white px-4 py-1 rounded-md text-sm">
                <UserRound size={18} />
                YourProfile
            </Link>
        </nav >
    );
};

export default Navbar;
