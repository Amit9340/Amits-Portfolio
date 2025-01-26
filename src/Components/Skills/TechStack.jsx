import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function TechStack() {
  const data = [
    {Skill:"Frontend Development", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737603896/Frontend_dnungp.mp4", img:"https://i.pinimg.com/736x/fd/ad/31/fdad31ee1263190fe2be0dd4890acaf5.jpg", img2:"https://i.pinimg.com/474x/0b/7a/15/0b7a154748436d6839ae1431512d1b2c.jpg", img3:"https://i.pinimg.com/474x/6d/60/ec/6d60ecf9ab52a54117a67e91b555482a.jpg"},

    {Skill:"Backend Development", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737603495/Backend_mpxnhg.mp4", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0glSd8O-A-3WStCibxdPT0AW0yQtI9_YsB_a_u7z2EJmLxxTffAOH6u1StgdWcpovvYg&usqp=CAU", img2:"https://i.pinimg.com/736x/7b/84/d3/7b84d3b9face1d250446a214bd9e3025.jpg", img3:"https://i.pinimg.com/736x/9d/48/8f/9d488f57161b42f485e14b290c48a885.jpg"},

    {Skill:"Libraries & Framework", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737603919/Libraries_zzbzjf.mp4", img:"https://i.pinimg.com/474x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg", img2:"https://i.pinimg.com/474x/c4/04/75/c40475dce4bc3872e531b453610ddada.jpg", img3:"https://i.pinimg.com/474x/34/fc/40/34fc403d45286c5df31d315d6f397d2f.jpg",},

    {Skill:"Extra Skills", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737603844/ExtraSkills_rtdfie.mp4", img:"https://i.pinimg.com/474x/c4/49/da/c449dae8835cbf529ccd07999c2bc5aa.jpg", img2:"https://i.pinimg.com/474x/bb/58/f9/bb58f95d8eb376f8f4bce8c57d4cebe9.jpg", img3:"https://i.pinimg.com/474x/00/bf/3f/00bf3f64409379b03e8005c54e92ac55.jpg",}
  ]

  const skillsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all <h1> elements inside the component
    const headings = skillsRef.current.querySelectorAll("h1");

    headings.forEach((hElem) => {
      let clutter = "";
      const text = hElem.textContent;
      const splittedText = text.split("");

      splittedText.forEach((char) => {
        clutter += `<span>${char}</span>`;
      });

      hElem.innerHTML = clutter;

      gsap.to(hElem.querySelectorAll("span"), {
        color: "#AFEEEE",
        stagger: 0.1,
        scrollTrigger: {
          trigger: hElem,
          scroller: "body",
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    const images = skillsRef.current.querySelectorAll("img");
    images.forEach((image) => {
      // Apply scale-in and scale-out animation
      gsap.to(image, {
        scale: () => gsap.utils.random(0.7, 1.1), // Scale between 0.8x and 1.2x
        duration: 1.5, // Duration of each scale
        ease: "power1.inOut",
        repeat: -1, // Infinite repetition
        yoyo: true, // Reverse animation back to the original
      });
    });
  }, []);

  return (
    <div ref={skillsRef} className='w-[60vw] relative md:pl-6'>
      {data.map((elem, index)=>(
        <div key={index} className=' bg-black lg:h-[60vh] h-[32vh] lg:w-[60vw] w-[85vw] flex lg:flex-row flex-col justify-between items-center lg:p-10 lg:mt-10 p-4 ml-8 mt-5 lg:even:left-[20%] relative rounded-3xl overflow-hidden'>
        <video autoPlay muted loop src={elem.video} className='absolute top-0 left-0 object-cover h-[60vh] w-[95vw] opacity-50'></video>
        <h1 className='lg:w-[45%] w-full lg:min-h-[18vh] text-zinc-100 lg:text-5xl text-4xl font-bold text-center z-20'>{elem.Skill}</h1>
        <div className='lg:h-[16rem] lg:w-[20rem] h-[10rem] w-[15rem] rounded-3xl bg-green-500 flex justify-evenly hover:scale-110 hover:bg-[#2e9b46] transition ease-in-out duration-300 z-20'>
          <div className='flex flex-col justify-evenly'>
              {elem.img && <img className='lg:h-[7rem] lg:w-[8rem] h-[5rem] w-[6rem] rounded-3xl' src={elem.img} alt="" />}
              {elem.img2 && <img className='lg:h-[7rem] lg:w-[8rem] h-[5rem] w-[6rem] rounded-3xl' src={elem.img2} alt="" />}
          </div>
          <div className='flex flex-col justify-evenly'>
              {elem.img3 && <img className='lg:h-[7rem] lg:w-[8rem] h-[5rem] w-[6rem] rounded-3xl' src={elem.img3} alt="This is an Image" />}
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default TechStack
