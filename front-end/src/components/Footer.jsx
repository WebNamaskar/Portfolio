import insta from '/assets/icons/instagram-original.svg';
import gmail from '/assets/icons/envelope-regular.svg';
import github from '/assets/icons/github-brands-solid.svg';
import linkedin from '/assets/icons/linkedin-brands-solid.svg';
import { FaAnglesUp } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-items-center text-center'>
      <a href="#hero" className='pt-6 flex justify-center items-center gap-3'><FaAnglesUp />Back to top</a>
      <div  className='social flex justify-center text-center py-8' style={{filter:'invert(100%) brightness(2)'}}>
      <img  className='h-6  px-4 cursor-pointer' src={insta} alt="insta" />
      <img className='h-6  px-4 cursor-pointer' src={gmail} alt="insta" />
      <img className='h-6  px-4 cursor-pointer' src={github} alt="insta" />
      <img className='h-6  px-4 cursor-pointer' src={linkedin} alt="linkedin" />
      </div>
      <p className='pb-8'>&#64;2022 all right reserve</p>
    </div>
  )
}

export default Footer