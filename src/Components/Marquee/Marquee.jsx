import { motion } from 'framer-motion'
import React from 'react'
import './Marquee.css'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2"  className='overflow-hidden bebas-neue-regular relative top-32 lg:flex hidden text-[14rem] mx-auto font-extrabold uppercase'>
      <div className='bg-[#286949] rounded-3xl w-[99vw] h-[85vh]'>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:30, repeat: Infinity, repeatType: "loop",}} className='marquee w-[1905vw] flex h-[60vh] items-center relative top-28 border-b border-t border-zinc-100'>
      <p className='marquee-text relative pr-20 lg:mb-12'>Ready to contribute |</p>
      <p className='marquee-text relative pr-20 lg:mb-12'>Your next problem-solver |</p>
      <p className='marquee-text relative pr-20 lg:mb-12'>Ready to code, collaborate, and create impact |</p>
      <p className='marquee-text relative lg:mb-12'>Innovative, Collaborative, Succeed</p>
      </motion.div>
      </div>
    </div>
  )
}

export default Marquee
