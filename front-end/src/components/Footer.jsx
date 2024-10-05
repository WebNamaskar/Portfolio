import insta from '../../public/assets/icons/instagram-original.svg';
import gmail from '../../public/assets/icons/envelope-regular.svg';
import github from '../../public/assets/icons/github-brands-solid.svg';
import linkedin from '../../public/assets/icons/linkedin-brands-solid.svg';


const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-items-center text-center'>
      <h2 className='pt-6'>Back to top</h2>
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