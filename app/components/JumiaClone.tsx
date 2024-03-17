// 'use client'
// import { motion } from "framer-motion"
// import Slide from "./Slide"

// type Props = {}

// const images = [
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_43 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_49 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_54_31 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_54_45 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_55_26 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_55_37 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_56_03 PM.png",
//   "/jumia/Jumia clone - Google Chrome 3_15_2024 3_56_05 PM.png",
// ]

// export default function JumiaClone({}: Props) {
//   return (
//     <motion.div 
//     initial={{
//         opacity : 0,
     
//     }}
  
//     whileInView={{

//         opacity : 1,
//     }}
//     transition={{
//         duration : 1.5,

//     }}
//      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
//          <h3 className="absolute top-20 sm:top-8 uppercase tracking-[20px] text-gray-500 text-base sm:text-xl">jumia clone</h3>
//          <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
//             {/*experience card*/}

//             {
//               images.map((image, i) => <Slide key={image + i} src={`${image}`} />)
//             }
           
// {/* 
//   <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-screen">
//     <motion.img 
//     initial={{
//       y : -100,
//       opacity : 0,
   
//   }}

//   whileInView={{
//      y : 0,
//       opacity : 1,
//   }}
//   transition={{
//       duration : 1.2,

//   }} 
//   viewport={{once : true,}}
//   className="w-full h-auto flex-grow object-cover object-center" src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_43 PM.png" />
//    </article>

//    <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-screen">
//     <motion.img 
//     initial={{
//       y : -100,
//       opacity : 0,
   
//   }}

//   whileInView={{
//      y : 0,
//       opacity : 1,
//   }}
//   transition={{
//       duration : 1.2,

//   }} 
//   viewport={{once : true,}}
//   className="w-full h-auto flex-grow object-cover object-center" src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_54_31 PM.png" />
//    </article>

//    <article className="flex flex-col xl:flex-row snap-center p-4 sm:p-10 bg-[#292929] opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-lg items-center space-y-3 sm:space-y-7 xl:space-y-0 xl:justify-center xl:items-center xl:space-x-5 flex-shrink-0 w-screen">
//     <motion.img 
//     initial={{
//       y : -100,
//       opacity : 0,
   
//   }}

//   whileInView={{
//      y : 0,
//       opacity : 1,
//   }}
//   transition={{
//       duration : 1.2,

//   }} 
//   viewport={{once : true,}}
//   className="w-full h-auto flex-grow object-cover object-center" src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_49 PM.png" />
//    </article>

//  */}
//          </div>
//     </motion.div>
//   )
// }

import React from 'react'

type Props = {}

export default function ({}: Props) {
  return (
    <div className='grid grid-cols-2 justify-center gap-2 items-center pr-10'>
      <div className='flex flex-col justify-center items-center space-y-3'>
        <p>Jumia clone</p>
        <p className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 cursor-pointer text-gray-200 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out'>View Live</p>
        <p>Source code</p>
      </div>
      <img className='flex-grow' src="/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_43 PM.png" alt="jumia-image" />
    </div>
  )
}