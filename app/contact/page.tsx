"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import sendEmail from '@/actions/sendEmail'

const contactPage = () => {
  
  const textMessage = "Contact Me"

  return (
 
  <div className='h-full '>
    <div className='flex flex-col lg:flex-row h-full p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 '>
      <div  className=" h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center gap-2 mt-10 text-2xl md:text-3xl lg:text-4xl xl:text-6xl" >
        <div>
          {textMessage.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 3,
                repeat: Infinity,
               }}
               className='text-purple-50'
            >
              {letter} 
            </motion.span>
          ))}
          😊
        </div>
      </div>
      <form 
      className='h-1/2 lg:h-full lg:w-1/2 flex flex-col bg-slate-950/80 rounded text-sm lg:text-xl gap-4 justify-center p-10 lg:p-24  ' 
      action={async (formData) => {
          await sendEmail(formData)
      }}
      >
      <label>Email Address</label>
      <input
        name='senderEmail' 
        type='email' 
        required     
        className=' bg-transparent border-b-2 border-purple-100' 
      />
        <label>Dear Hrittik,</label>
        <textarea
        name='message' 
        rows={10}
        required
        className=' bg-transparent border-b-2 border-purple-100' 
        />
        <button 
          type='submit' 
          className='bg-purple-900 hover:bg-purple-300 hover:text-purple-950 py-2 mt-5'
        >
          Send
        </button>
      </form>
    </div>
  </div>
  )
}

export default contactPage;
