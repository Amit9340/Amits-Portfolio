import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";

function Bottom() {
    const data = [
        {icon:'https://cdn-icons-png.flaticon.com/256/25/25231.png', link:"https://github.com/Amit9340"},
        
        {icon:'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png', link:"https://www.linkedin.com/in/amit-sharma-498757250/"},

        {icon:'https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid', link:"https://www.instagram.com/_amit.04/"},
        
        {icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NC-5_ZvtNQbPkGfPl3Rtzys6sH80JrOQXJ-TZ7353IC3MqgQ0RNZU_tCsSvnCwnQ-Ak&usqp=CAU', link:`https://wa.me/${+918963918661}?text= Hello Amit, Reviewed your Portfolio! Want to connect`},

        {icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-PpRq5o99qLdwaOFS6H4qZO3oVGWQMcyDg&s', link:"https://www.facebook.com/profile.php?id=100071543933799"},
    ]

    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    })

    const handlePreview = () => {
        // Open the PDF in a new tab
        window.open("https://drive.google.com/file/d/1cIWBASiJ49iLdjobXmRy50zAmnMNj0UZ/view?usp=sharing", "_blank");
      };
      
  return (
    <div className='w-full lg:h-[100svh] h-[80vh] flex flex-col items-center justify-center gap-8 p-10 top-20'>
      <div className='Bottom1 w-full flex items-center justify-center text-center'>
        <h1 className='lg:text-[9rem] text-[4rem] lg:leading-[10rem] tracking-tighter lg:text-black text-zinc-100 flex flex-col font-semibold uppercase'><span>Solutions</span> <span>start here</span> <span>let's connect !</span></h1>
        <div className='absolute top-[10rem] left-1/2 flex gap-10 -translate-x-1/2 -translate-y-1/2'>
                        <div className='h-32 w-32 lg:flex hidden items-center justify-center bg-white rounded-full active:translate-y-2 active:border-2 active:border-yellow-300'>
                            <div className='w-2/3 h-2/3 relative  bg-black rounded-full '>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-10'>
                                    <div onClick={handlePreview}  className='w-12 h-12 bg-white rounded-full p-1 text-[0.7rem] font-bold flex items-center justify-center flex-col cursor-pointer active:translate-y-1 active:border-2 active:border-yellow-300'>
                                    <div ><FaDownload /></div>
                                    <h1>Resume</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='h-32 w-32 lg:flex hidden items-center justify-center bg-white rounded-full active:translate-y-2 active:border-2 active:border-yellow-300'>
                            <div className='w-2/3 h-2/3 relative  bg-black rounded-full '>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-10'>
                                    <a href="mailto:6265amitsharma@gmail.com" target='_blank' className='w-12 h-12 bg-white rounded-full text-[0.7rem] font-bold flex flex-col items-center justify-center active:translate-y-1 active:border-2 active:border-yellow-300'>
                                        <div className=' text-sm' ><TbMailOpenedFilled /></div>
                                        <h1>Me</h1>
                                    </a>
                                </div>
                            </div>

                        </div>

        </div>
      </div>
      <div className='bottom2 w-full flex items-center justify-center gap-10 mb-10'>
        {data.map((elem, index)=>(
            <a key={index} href={elem.link} target='_blank' rel="noopener noreferrer"><img className='lg:h-20 h-10 md:h-20 w-20 rounded-full hover:scale-105 hover:shadow-md hover:shadow-black transition ease duration-300 active:translate-y-1 active:scale-90 active:border-2 active:border-yellow-300' src={elem.icon} alt="" /></a>
        ))}
      </div>
    </div>
  )
}

export default Bottom
