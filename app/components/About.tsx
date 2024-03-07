'use client'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity : 0,
     
    }}
  
    whileInView={{

        opacity : 1,
    }}
    transition={{
        duration : 1.5,

    }} className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">About</h3>
        <motion.img 
        initial={{
            x : -200,
            opacity : 0,
         
        }}
      
        whileInView={{
            x : 0,
            opacity : 1,
        }}
        transition={{
            duration : 1.2,

        }}
       
       className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[280px] xl:h-[420px]' src={'/ochuko.jpg'} alt='profile-image'/>
       
       <div className="mt-10 space-y-4 sm:space-y-10 sm:mt-0 px-0 md:px-10">
        <h4 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
            Here is a <span className="underline decoration-[#f7ab0a]/50">little</span> background
        </h4>
        <p className="text-sm sm:text-base">
        Hi, welcome and thanks for checking out my GitHub profile.
I’m CK popularly called the Javascript Doctor because I actually love writing Javascript. I am a Frontend developer with about a year's experience writing React and NextJS.
👀 I’m interested in backend development, cloud engineering, AI, and machine learning.
🌱 I’m currently learning react native, nodeJS, SQL, Typescript, microservices.
💞️ I’m looking to collaborate on building amazing systems with my knowledge in React and NextJS. I am also open to learning new Tech as required.
        </p>
       </div>
    </motion.div>
  )
}