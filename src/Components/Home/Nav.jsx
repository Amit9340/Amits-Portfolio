import React, { useState } from 'react'
import { TbGridDots } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import './NavBtn.css'

function Nav() {

  const [showNav, setShowNav] = useState(false)
  const toggleNAv = ()=>{
    setShowNav(!showNav)
  }
  const data = [
    {txt:"Projects", id:"work"},
    {txt:"Skills", id:"skill"},
    {txt:"Contact Me", id:"contact"},
  ]
  return (
    <div className='playfair-display fixed z-40 bg-transparent backdrop-blur-3xl text-zinc-100 w-full h-16 text-xl flex items-center overflow-hidden'>
      <div className='flex justify-between p-5 lg:p-0 items-center max-w-6xl mx-auto w-full h-16 tracking-wider'>
        <h1>AS</h1>
        <h1 className='hidden lg:flex'>Amit Sharma</h1>
        <div className='flex items-center w-[10vw] justify-center lg:text-lg text-sm lg:gap-10 gap-5 lg:mr-0 mr-8 z-50'>
            <div onClick={toggleNAv} className='Navbtn btn-blue btn-animate more cursor-pointer rounded-md text-black bg-gradient-to-r from-sky-700 from-0% via-sky-400  to-sky-400 to-99% flex items-center justify-around w-[24vw] lg:w-[20vw] h-10 p-5 lg:p-0 z-50 lg:after:bg-gradient-to-r lg:after:from-sky-700 lg:after:from-0% lg:after:via-sky-400  lg:after:to-sky-400 to-99%'>
            <div className='flex items-center lg:gap-5 gap-2'>
            <h1>{showNav ? "Close" : "More"}</h1>
            <div> {showNav ? <IoCloseSharp className='h-6 w-6' style={{ strokeWidth: 2 }} /> : <TbGridDots className='h-5 w-5' />} </div>
            </div>
            </div>
            <div className={`clickedNav bg-sky-900 text-zinc-100 lg:w-[30rem] w-[15rem] h-[2.5rem] lg:translate-y-0 -translate-y-[0.05rem] flex items-center rounded-md lg:gap-10 gap-4 absolute lg:right-[6.8rem] right-[5.8rem] md:right-[8rem] lg:p-5 p-2 ${showNav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              {data.map((elem, index)=>(
                <a key={index} target="_blank"
                href={`#${elem.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(elem.id).scrollIntoView({ behavior: "smooth" });
                  setShowNav(false);
                }}
                ><span>{elem.txt}</span></a>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
