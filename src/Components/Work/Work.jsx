import React from 'react'
import Project from './Project'
import { div } from 'framer-motion/client'

function Work() {
    const data = [
        {workName:"Four Lakes", description:"I developed a responsive Four Lakes website clone using React.js and Tailwind CSS, ensuring seamless mobile and desktop experiences. This project highlights my expertise in modern front-end development, responsive design.", img:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737520228/4Lakes_ormfgz.mp4", link:"https://four-lakes.vercel.app/"},

        {workName:"Temperature Converter", description:"The Temperature Converter is a web app that converts Celsius, Fahrenheit, and Kelvin with a clean interface and real-time input, built using HTML, CSS, and JavaScript to demonstrate front-end and interactive development skills.", img:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737519452/TemperatureConverter_wsrbbm.mp4", link:"https://github.com/Amit9340/Temperature-Converter"},

        {workName:"Portfolio Webpage", description:"A personal portfolio webpage built with HTML, CSS, and JavaScript, showcasing my skills, projects, and achievements through an introduction, gallery, skills section, and contact form with a focus on responsive, user-friendly design.", img:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmt8ZW58MHx8MHx8fDA%3D", video:"https://res.cloudinary.com/djcx1skzq/video/upload/v1737519274/Portfolio_dswogu.mp4", link:"https://github.com/Amit9340/Portfolio-Amits"}

    ]
  return (
    <div id='work' className='h-fit relative top-32 flex flex-col gap-10'>
      <h1 className='text-zinc-100 font-bold relative text-9xl text-center uppercase'>My Work</h1>
      <div className='relative  bg-[#6f3bb8] max-w-6xl mx-auto rounded-3xl'>
      {data.map((elem, index)=>(
        <Project 
        key={index} 
        workName={elem.workName} 
        description={elem.description} 
        img={elem.img}
        video={elem.video}
        link={elem.link}
        />                                                   
      ))}
    </div>
    </div>
  )
}

export default Work
