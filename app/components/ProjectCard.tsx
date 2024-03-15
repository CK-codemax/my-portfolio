'use client'
import { motion } from "framer-motion"
type Props = {}

export default function ProjectCard({}: Props) {
  return (
   <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-[90vw] sm:w-[600px] xl:w-[900px]">
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
  className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="https://www.shutterstock.com/shutterstock/photos/2270561027/display_1500/stock-vector-amazon-logo-icon-logo-sign-art-design-symbol-famous-industry-jeff-bezos-corporate-text-isolated-2270561027.jpg" />

  <div className="px-0 xl:flex-grow sm:px-10">
    <h4 className="text-xl sm:text-2xl lg:text-3xl font-light">CEO of PAPAFAM</h4>
    <p className="font-bold text-2xl mt-1">PAPAFAM</p>
    <div className="flex space-x-2 my-2 ">
       <img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="stack"/>
       <img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="stack"/>
       <img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="stack"/>


    </div>
    <ul className="list-disc space-y-2 sm:space-y-4 ml-5 text-sm sm:text-lg">
      <li>Summary points</li>
      <li>Summary points</li>
      <li>Summary points</li>
      <li>Summary points</li>
      <li>Summary points</li>
    </ul>
  </div>
   </article>
  )
}