import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function Project({ workName, description, img, video, link }) {
  const projectRef = useRef(null); // Create a reference for this Project instance

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const pElement = projectRef.current.querySelector("p");
    if (pElement) {
      let clutter = "";
      const text = pElement.textContent;
      const splittedText = text.split("");

      // Wrap each character with a span
      splittedText.forEach((char) => {
        clutter += `<span>${char}</span>`;
      });

      // Set the innerHTML of the p element
      pElement.innerHTML = clutter;

      // GSAP animation for the spans inside this Project instance
      gsap.to(pElement.querySelectorAll("span"), {
        color: "#E3E3C4",
        stagger: 0.1,
        scrollTrigger: {
          trigger: projectRef.current, // Use the specific Project instance as the trigger
          scroller: "body",
          // markers: true, // Uncomment for debugging
          start: "top 50%",
          end: "top 10%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div
      className="last-of-type:border-none"
      ref={projectRef} // Attach the ref to the root div of this Project
    >
      <div className="page1 flex lg:flex-row flex-col lg:items-center lg:justify-evenly items-start gap-5 text-justify h-[65vh] md:h-[50vh] max-w-6xl mx-auto md:w-full w-full md:pl-8 border-b  border-zinc-300">
        <h1 className="lg:w-[12%] w-full lg:text-center text-3xl lg:m-10 mt-10 mb-5 lg:pl-0 pl-4 font-bold text-zinc-100 md:text-center">{workName}</h1>
        <p className="lg:w-[40%] w-[95%] lg:p-10 px-3">{description}</p>
        
        <div className="relative lg:top-0 h-[16rem] lg:w-[35%] w-[90%] lg:ml-0 lg:pr-10 ml-4 rounded-3xl group hover:scale-95 transition duration-300 ease-out ">
        <a href={link} target='_blank'>
        <video className="absolute h-[16rem] lg:w-[90%] w-full rounded-[1.5rem] object-cover lg:hidden flex lg:group-hover:flex" autoPlay muted loop src={video}></video>
        </a>
          <img
            className="lg:flex hidden h-[16rem] w-full rounded-3xl object-fit lg:group-hover:hidden"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
