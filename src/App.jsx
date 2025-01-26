import React from 'react'
import Home from "./Components/Home/Home"
import Marquee from './Components/Marquee/Marquee'
import LocomotiveScroll from 'locomotive-scroll';
import Work from './Components/Work/Work';
import Skill from './Components/Skills/Skill';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Home/Nav';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' h-fit w-full overflow-hidden bg-gradient-to-t from-[#22177A] via-purple-500 to-[#1d1d33]'>
         <Nav/>
         <Home />
        <Marquee/>
        <Work/>
        <Skill/>
        <Footer/>
    </div>
  )
}

export default App
