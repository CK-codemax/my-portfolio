'use client'
import { motion } from "framer-motion"
import Slide from "./Slide"

type Props = {}

const images = [
  "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_28 PM.png",
  "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_37 PM.png",
  "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_49 PM.png",
  "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_58 PM.png",
 
]

export default function HuluClone({}: Props) {
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

    }}
     className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-20 sm:top-8 uppercase tracking-[20px] text-gray-500 text-base sm:text-xl">hulu clone</h3>
         <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
            {/*experience card*/}

            {
              images.map((image, i) => <Slide key={image + i} src={`${image}`} />)
            }
           
{/* 
  <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-screen">
    <motion.img 
    initial={{
      y : -100,
      opacity : 0,
   
  }}

  whileInView={{
     y : 0,
      opacity : 1,
  }}
  transition={{
      duration : 1.2,

  }} 
  viewport={{once : true,}}
  className="w-full h-auto flex-grow object-cover object-center" src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_43 PM.png" />
   </article>

   <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-screen">
    <motion.img 
    initial={{
      y : -100,
      opacity : 0,
   
  }}

  whileInView={{
     y : 0,
      opacity : 1,
  }}
  transition={{
      duration : 1.2,

  }} 
  viewport={{once : true,}}
  className="w-full h-auto flex-grow object-cover object-center" src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_54_31 PM.png" />
   </article>

   <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-screen">
    <motion.img 
    initial={{
      y : -100,
      opacity : 0,
   
  }}

  whileInView={{
     y : 0,
      opacity : 1,
  }}
  transition={{
      duration : 1.2,

  }} 
  viewport={{once : true,}}
  className="w-full h-auto flex-grow object-cover object-center" src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_49 PM.png" />
   </article>

 */}
         </div>
    </motion.div>
  )
}