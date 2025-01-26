import React from 'react'
import './Button.css'
function Button({btnTextLg='Contact Me', btnText='Contact Me'}) {
  return (
    <div className='text-box cursor-pointer relative lg:left-0 left-[1.5rem]'>
      <div className='btnLg btn-white btn-animate lg:rounded-3xl h-10 lg:w-40 px-10 py-2 pl-16 text-lg font-semibold bg-blue-100 hidden lg:flex items-center justify-center text-blue-800 active:translate-y-1 active:border-2 active:border-yellow-300'>{btnTextLg}</div>
      <div className='btn btn-white btn-animate rounded-[2.1rem] h-10 md:h-14 w-[82vw] md:w-[76vw] px-10 py-2 pl-[5.5rem] text-lg font-semibold bg-blue-100 flex lg:hidden items-center justify-center text-blue-800'>{btnText}</div>
    </div>
  )
}

export default Button
