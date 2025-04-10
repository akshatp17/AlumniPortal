import React, { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../data/NavItems";

const Navbar = () => {

    return (
        <nav className="bg-[#0b5a99] text-[#f1f8fe] w-screen h-16">
            <ul className="flex justify-between items-center h-full">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="h-full hover:bg-[#0d4c7f] w-full py-3 px-6 flex justify-center items-center text-center"
                    >
                        {item.link ? (
                            <Link to={item.link} className="hover:underline cursor-pointer">
                                {item.name}
                            </Link>
                        ) : (
                            <button className="hover:underline cursor-pointer">{item.name}</button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
