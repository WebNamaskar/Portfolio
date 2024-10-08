import React from 'react'
import Slider from "react-slick";
import { FaCode, FaMobileAlt, FaDesktop, FaDatabase } from "react-icons/fa";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const projects = [
    { icon: <FaCode className="text-purple-500" />, name: "Qkart", description: "Always stay with the trend. Browse, select and, checkou",link:"https://hemantpanwar399-me-qkart-frontend-v2.vercel.app/" },
    { icon: <FaMobileAlt className="text-blue-500" />, name: "Doctor Management System", description: "Book Appoinment with your doctors!",link:"https://doctor-management-system-frontend.onrender.com/" },
    { icon: <FaDesktop className="text-green-500" />, name: "Qtrip", description: "A dynamic trip planner buit on MERN stack",link:"https://qtrip-dynamic-topaz-beta.vercel.app/" },
    // { icon: <FaDatabase className="text-red-500" />, name: "Database", description: "MongoDB database project with large-scale data handling." },
    // { icon: <FaCode className="text-indigo-500" />, name: "API Development", description: "RESTful APIs built using Node.js and Express." },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto py-10 px-4 overflow-x-hidden" id='projects'>
    <h2 className="text-4xl text-white underline font-bold text-center mb-8">Projects</h2>
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="text-6xl mb-4"><a target='_blank' href={project.link}>{project.icon}</a></div>
            <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
            <p className="text-center text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Project
