"use client"
import { AnimatePresence } from 'framer-motion'
import React, { ReactNode } from 'react'
import Navbar from '../main/Navbar'
import StarsCanvas from '../main/Starbg'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'


const AnimationProvider = ({children}:{children: ReactNode}) => {

    const pathName = usePathname()

  return (
    <AnimatePresence mode='wait' >
        <div
        key={pathName}
        className="w-screen h-screen"
        >
        <motion.div 
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='h-screen w-screen bg-gradient-to-b from-[#030014] to-violet-950 rounded-b-[100px] z-40' />
        <motion.div 
        initial={{opacity:1}}
        animate = {{opacity:0}}
        exit={{opacity:1}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='fixed m-auto left-0 right-0 top-0 bottom-0 text-8xl cursor-default text-purple-500 z-50 w-fit h-fit' > {pathName.substring(1).toUpperCase()} </motion.div>
        
        <motion.div 
        initial={{ height: "140vh" }}
        animate={{ height: "0vh", transition: { delay: 0.5, ease: "easeOut" } }}
        className='h-screen w-screen bg-gradient-to-b from-[#030014] to-purple-950 rounded-t-[100px] z-40' />
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
        </div>
    </AnimatePresence>
  )
}

export default AnimationProvider
