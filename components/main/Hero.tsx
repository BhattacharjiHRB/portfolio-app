import React from 'react'
import HeroContent from '../sub/HeroContent'


const Hero = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-transparent dark:bg-dot-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <HeroContent />
      
    </div>

   
  )
}

export default Hero
