import React from 'react';

const Navbar = () => {
  return (
    <div className='  '>
    <ul className='flex items-center justify-end text-center h-16 bg-black '>
      <li className='p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 w-32 cursor-pointer'>About Us</li>
      <li className='p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 w-32 cursor-pointer'>Skills</li>
      <li className='p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 w-32 cursor-pointer'>Portfolio</li>
      <li className='p-2 bg-white rounded-full text-text-black hover:text-white hover:bg-gray-700 w-32 mr-4 cursor-pointer'>Contact Us</li>

    </ul>
    </div>
  )
}

export default Navbar