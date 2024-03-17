'use client'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircles from './BackGroundCircles';
import { useEffect, useState } from 'react';
type Props = {}

export default function Hero({}: Props) {

  
    const [text, count] = useTypewriter({
        words : ["Hi✋, my name's Ochuko😊!", "I am a Fullstack developer😎", "And I love Javascript😁."],
        loop : true,
        delaySpeed : 2000,
    })
  
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackGroundCircles />
       
         <div className='z-20'>
            <h2 className='text-xs sm:text-sm uppercase text-nowrap text-gray-500 tracking-[7px] sm:tracking-[15px] pb-2'>fullstack developer</h2>
         <h1 className='text-xl sm:text-4xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
        </h1>
         </div>

    </div>
  )
}