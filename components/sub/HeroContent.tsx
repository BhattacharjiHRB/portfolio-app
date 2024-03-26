"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideFromTop, slideInFromLeft } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-col-reverse md:flex-row gap-10 items-center justify-center px-20 mt-52 w-full z-[20] '
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideFromTop}
        className='Welcome-box py-[15px] px-[8px] border border-[#7024f88b] opacity-[0.9]' 
        >
            <SparklesIcon className='text-violet-500 mr-[10px] h-6 w-6' />
            <h1 className=' Welcome-text font-bold text-center'>Frontend Developer </h1>
        </motion.div>
        <motion.div
            variants={slideInFromLeft(1)}
            className='flex flex-col gap-10 text-xl md:text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
             Hello, I am 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600'>Hrittik Bhattacharjee </span>
        </motion.div>
        <motion.p
            variants={slideInFromLeft(1.5)}
            className='text-sm md:text-lg text-gray-500 my-5 max-w-[600px]'
        >
            
           I am experienced frontend developer skilled in HTML, CSS, and JavaScript, adept at crafting engaging user interfaces and seamless user experiences. Proficient in responsive design and cross-browser compatibility, with a keen eye for detail and a passion for creating visually appealing websites. Dedicated to staying abreast of industry trends and technologies to deliver cutting-edge solutions
        </motion.p>

        <motion.a
            variants={slideInFromLeft(2)}
            href='/contact'
            className='py-2 button-primary text-center text-white cursor-pointer rounded-xl max-w-[200px] '
        >
            Contact Me
        </motion.a>
      </div>
        <motion.div
            variants={slideInFromLeft(1)}
            className='w-full h-full flex justify-center items-center'
        >
            <Image 
                src={"/heropic.png"}
                alt='Hero Image'
                height={650}
                width={650}
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent;
