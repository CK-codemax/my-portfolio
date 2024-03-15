'use client'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircles from './BackGroundCircles';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words : ["Hi, my name's Ochuko!", "I am a developer", "And I love Javascript."],
        loop : true,
        delaySpeed : 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackGroundCircles />
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={'/ochuko.jpg'} alt='profile-image' width={200} height={200} />
       
         <div className='z-20'>
            <h2 className='text-xs sm:text-sm uppercase text-nowrap text-gray-500 tracking-[7px] sm:tracking-[15px] pb-2'>frontend developer</h2>
         <h1 className='text-xl sm:text-4xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
        </h1>

        
        <div className='pt-5 '>
            <Link href={'#about'}><button className='heroButton'>About</button></Link>
            <Link href={'#experience'}><button className='heroButton'>Experience</button></Link>
            <Link href={'#skills'}><button className='heroButton'>Skills</button></Link>
            <Link href={'#projects'}><button className='heroButton'>Projects</button></Link>
         </div>
         </div>

    </div>
  )
}