import { useEffect, useState } from "react";
import React from 'react';
import logo from "/favicon.ico"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setShowNavbar(true);
  }, []);
  return (
    <nav className={`sticky  bg-black  flex justify-around items-center top-0 left-0 z-[100] shadow-xl transform transition-transform duration-700 ease-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <img src={logo} alt="logo" className="w-16" />
    <ul className='flex items-center justify-end text-center h-16'>
      <li className='mr-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 w-32 cursor-pointer hidden md:block'><a href="#aboutus">About Us</a></li>
      <li className='mr-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 w-32 cursor-pointer hidden md:block'><a href="#skills">Skills</a></li>
      <li className='mr-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 w-32 cursor-pointer hidden md:block'><a href="#projects">Projects</a></li>
      <li className='ml-3 p-2 w-24 bg-white rounded-full text-text-black hover:text-white hover:bg-gray-700 md:w-32 mr-4 cursor-pointer'><a href="#contactus">Contact Us</a></li>

    </ul>
    </nav>
  )
}

export default Navbar