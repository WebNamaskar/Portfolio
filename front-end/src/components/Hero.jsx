import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;
    const x = clientX - currentTarget.offsetLeft;
    const y = clientY - currentTarget.offsetTop;
    const xPercent = x / offsetWidth; // Calculate X percentage
    const yPercent = y / offsetHeight; // Calculate Y percentage

    // Calculate rotation based on mouse position
    const tiltX = (yPercent - 0.5) * 20; // Adjust the factor for tilt amount
    const tiltY = (xPercent - 0.5) * -20; // Adjust the factor for tilt amount

    // Apply the transformation
    currentTarget.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset tilt
    }
  };
  return (
    <>
      <div
        id="hero"
        className="md:min-h-screen h-auto  w-screen md:w-auto md:m-10 flex flex-col md:flex-row relative overflow-hidden isolate  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 "
      >
        {/* Left Section - White with Skew */}
        <div
          className="md:w-1/2  flex flex-col justify-center items-center p-8 relative z-10 text-center w-full md:gap-12 bg-contain bg-no-repeat bg-center"
          style={{ "backgroundImage": "url('/heroleft.png')" }}
        >
          <div className="text-box text-3xl text-white font-bold shadow-xl">
            <Typewriter
              options={{
                strings: [
                  "Welcome to WebNamaskar!",
                  "Here to make your websites!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="md:text-3xl font-bold text-white md:mb-8 text-lg m-5 p-5 md:p-0 hover:scale-125">
            From concept to creation, We make it happen
          </p>

          {/* Social Media Buttons */}
          <div className="flex space-x-4 justify-center items-center">
            <a
              href="https://github.com" // Replace with your GitHub profile or repository
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition-transform transform hover:scale-125 duration-300" // Adjusted scaling on hover
            >
              <FaGithub className="w-6 h-6" /> {/* GitHub icon */}
            </a>
            <a
              href="https://x.com/WebNamaskar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl hover:text-gray-600 transition duration-300"
            >
              <lord-icon
                src="https://cdn.lordicon.com/yizwahhw.json"
                trigger="hover"
                style={{ width: 50, height: 50 }}
              ></lord-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/web-namaskar-a3a628331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl hover:text-gray-600 transition duration-300"
            >
              <lord-icon
                src="https://cdn.lordicon.com/dsdlqjde.json"
                stroke="bold"
                colors="primary:#121331,secondary:#000000"
                trigger="hover"
                style={{ width: 65, height: 65 }}
              ></lord-icon>
            </a>
          </div>
        </div>

        {/* Right Section - Black with Skew */}
        <div className="p-2 m-2 rounded-lg md:hidden">
          <img
            src="/assets/laptop-image.jpeg"
            alt=""
            className="flex md:hidden  object-fit opacity-75 rounded-md"
          />
        </div>
        <div className="md:w-1/2 z-10 justify-center items-center md:flex hidden ">
          <div
            className="relative w-2/3 h-2/3 perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
          >
            <img
              src="/assets/laptop-image.jpeg"
              // src = "/assets/laptop-image2.avif"
              alt="3D Card Image"
              className="absolute rounded-full inset-0 h-full object-cover shadow-xl transition-transform duration-200"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
