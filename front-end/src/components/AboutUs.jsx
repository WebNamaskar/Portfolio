import React, { useEffect, useState, useRef } from 'react'
import Slider from "react-slick"
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Trigger the animation
        } else {
          setIsVisible(false); // Hide again if needed when scrolled out of view
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the div is in the viewport
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  const projects = [
    { name: "DESIGN", description: "Our design approach focuses on creating visually captivating, intuitive, and user-centered experiences. We believe that great design is not just about aesthetics but also about functionality." },
    { name: "DEVELOPMENT", description: "Our development process is centered around efficiency, functionality, and user experience. We build websites that are not only fast and responsive but also tailored to your specific needs." },
    { name: "MAINTENANCE", description: "We provide ongoing maintenance to ensure your website stays fast, secure, and up-to-date. From regular updates to troubleshooting, we handle all the technical aspects, so you can focus on what you do best." },
  ];
  const settings = {
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
    <>
    <div className="text-center p-6 sm:p-12  hidden md:block md:mb-10" id='aboutus'>
    <h4 className="text-4xl font-bold mb-10 my-8 text-white underline">About Us</h4>
    <p className="max-w-6xl mx-auto text-black text-xl">
    At WebNamskar, we are a passionate team dedicated to bringing your ideas to life through tailored projects that meet your unique needs. Our goal is to enhance your online presence by creating fast, user-friendly, and visually stunning websites. Whether it's improving functionality or boosting design, we’re here to deliver solutions that make your work smoother and your digital experience more impactful. Let us help you turn your vision into reality!
    </p>
  
    
    <h6 className="text-3xl font-bold mb-10 my-8 text-white">EXPLORE</h6>
  
  
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 ">
      <div  ref={divRef} className={`shadow-lg rounded-lg p-6 max-w-2xl mx-auto  hover:scale-105  bg-black text-white transform transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        } text-white p-8 rounded-lg shadow-lg`} >
        <h4 className="text-2xl font-semibold mb-4">DESIGN</h4>
        <p className="text-gray-200">
        Our design approach focuses on creating visually captivating, intuitive, and user-centered experiences. We believe that great design is not just about aesthetics but also about functionality.
        </p>
      </div>
      <div ref={divRef} className={` shadow-lg rounded-lg p-6 max-w-2xl mx-auto  hover:scale-105  bg-black text-white transform transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        } text-white p-8 rounded-lg shadow-lg`}>
        <h4 className="text-2xl font-semibold mb-4">DEVELOPMENT</h4>
        <p className="text-gray-200">
        Our development process is centered around efficiency, functionality, and user experience. We build websites that are not only fast and responsive but also tailored to your specific needs.
        </p>
      </div>
    </div>
  
    
    <div className="mt-10 ">
      <div ref={divRef} className={`shadow-lg rounded-lg p-6 max-w-2xl mx-auto  hover:scale-105  bg-black text-white transform transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        } text-white p-8 rounded-lg shadow-lg`}>
        <h4 className="text-2xl font-semibold mb-4">MAINTENANCE</h4>
        <p className="text-gray-200">
        We provide ongoing maintenance to ensure your website stays fast, secure, and up-to-date. From regular updates to troubleshooting, we handle all the technical aspects, so you can focus on what you do best.
        </p>
      </div>
    </div>
  </div>
  <div className="block md:hidden w-screen text-center container mx-auto py-10 px-4 overflow-x-hidden" id='aboutus'>
    <h1 className='text-4xl text-white font-bold mt-10 underline'>About us</h1>
    <p className="max-w-2xl mx-auto text-gray-600 m-5 p-5">
    At WebNamskar, we are a passionate team dedicated to bringing your ideas to life through tailored projects that meet your unique needs. Our goal is to enhance your online presence by creating fast, user-friendly, and visually stunning websites. Whether it's improving functionality or boosting design, we’re here to deliver solutions that make your work smoother and your digital experience more impactful. Let us help you turn your vision into reality!
    </p>
  <Slider {...settings}>
  {projects.map((project, index) => (
        <div key={index} className="p-4 ">
          <div className="flex flex-col items-center bg-black text-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
            <p className="text-center text-gray-600">{project.description}</p>
          </div>
        </div>))}

    </Slider>

  </div>
  </>
  )
}

export default AboutUs
