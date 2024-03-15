'use client'
import { motion } from "framer-motion"

type Props = {
    src: string,
}

export default function Slide({ src }: Props) {
  return (
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
  className="w-full h-auto flex-grow object-cover object-center" src={src} />
   </article>

  )
}