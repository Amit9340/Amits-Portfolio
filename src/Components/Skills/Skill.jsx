import React from 'react'
import TechStack from './TechStack'

function Skill() {
  return (
    <div id='skill' className='lg:h-[345vh] h-[185vh] relative top-32'>
    <h1 className='uppercase text-zinc-100 font-bold relative lg:text-9xl text-[7.5rem] text-center mb-' >Skills</h1>
      <div className='max-w-6xl mx-auto rounded-3xl bg-[#553eb9]'>
        <TechStack />
      </div>
    </div>
  )
}

export default Skill
