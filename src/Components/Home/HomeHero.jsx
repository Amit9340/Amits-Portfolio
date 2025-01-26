import React from 'react'
import Button from '../Button/Button'
import { FaDownload } from "react-icons/fa";

function HomeHero() {
  const handlePreview = () => {
    // Open the PDF in a new tab
    window.open("https://drive.google.com/file/d/1BzrwtKm1pbBEIzw5rO7nfAll_8Hq_eBU/view?usp=sharing", "_blank");
  };
  return (
    <div className='lg:max-w-6xl max-w-[95vw] h-[90svh] mx-auto lg:pt-10 lg:mt-0 mt-[4rem]'>
      <div className='h-[85vh] w-full flex lg:flex-row flex-col'>
      <div className='textDiv flex flex-col justify-center lg:items-start items-center tracking-wide lg:text-[8rem] text-[4.4rem] md:text-[7rem] lg:leading-[8rem] leading-[5.5rem] md:leading-[7rem]'>
        <h1>Creative</h1>
        <h1>Designer &</h1>
        <h1>Developer</h1>
      </div>
      <div onClick={handlePreview} className='resumeBtnDiv absolute md:left-16 lg:top-[90vh] top-[88vh] md:top-[93vh] cursor-pointer group '>
        <div className='w-fit absolute top-[36%] md:top-[42%] lg:top-[36%] lg:left-9 left-28 md:left-60 text-sm text-blue-800 group-hover:-translate-y-1 lg:group-hover:-translate-y-0 transition ease z-10'><FaDownload /></div>
        <Button btnTextLg='Resume' btnText='Download Resume'/>
      </div>
      <div className='imageDiv flex items-center justify-center md:w-[100vw] md:left-12 md:h-[3vh] lg:h-[44vh] h-[32.5vh] lg:w-[25vw]  max-w-[80vw] rounded-[2.1rem] relative lg:top-60 md:top-52 top-28 bg-black lg:left-[8.8rem] left-5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition ease duration-100 '>
        <img className='absolute -top-32 rounded-[2.1rem] lg:h-[65vh] h-[48vh] md:w-full w-fit md:h-[50vh] md:-top-48 lg:mt-16' src="https://res.cloudinary.com/djcx1skzq/image/upload/v1737520516/AMT_FINAL_3_HD_b0nywf.png" alt="Profile Image" />
      </div>
      </div>
      <div className='playfair-display lg:flex hidden justify-end text-lg relative left-[62rem] w-fit'>
        <h1>Scroll To Explore</h1>
      </div>
    </div>
  )
}

export default HomeHero
