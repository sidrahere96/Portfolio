import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden flex items-center justify-center">
    <ParticlesBackground />
    <div classname="absolute inset-0">
      <div 
      classname="absolute -top-32 -left-32
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse
      ">

      </div>
      <div>
      
      </div>
    </div>
    </section>
  );
}