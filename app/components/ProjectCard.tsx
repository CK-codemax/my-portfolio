'use client'
import { motion } from "framer-motion"
type Props = {}

export default function ProjectCard({}: Props) {
  return (
   <article className="flex flex-col snap-center p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] sm:w-[600px] xl:w-[900px]">
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
  className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="https://www.shutterstock.com/shutterstock/photos/2270561027/display_1500/stock-vector-amazon-logo-icon-logo-sign-art-design-symbol-famous-industry-jeff-bezos-corporate-text-isolated-2270561027.jpg" />

  <div className="px-0 sm:px-10">
    <h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
    <p className="font-bold text-2xl mt-1">PAPAFAM</p>
    <div className="flex space-x-2 my-2 ">
       <img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="stack"/>
       <img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="stack"/>
       <img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="stack"/>


    </div>
    <p className="py-5 uppercase text-gray-300">Started work... ended...</p>
    <ul className="list-disc space-y-4 ml-5 text-lg">
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