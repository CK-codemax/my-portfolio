'use client'
import { motion } from "framer-motion"

type Props = {
    percentage : number,
    src: string,
    directionLeft?: boolean,
    name?: string;
}

export default function Skill({percentage, src, name, directionLeft}: Props) {
  return (
    <div className="group relative flex lg:flex-col lg:space-y-2 items-center justify-center cursor-pointer">
        {/* <motion.img 
        initial={{
            x : directionLeft ? -200 : 200,
            opacity : 0,
        }}

        whileInView={{
            x : 0,
            opacity : 1,
        }}

        transition={{
            duration : 1,
        }} */}
        <img
        src={src}
        alt="tech-image"
        className="rounded-full border border-gray-500 object-cover w-[75px] h-[75px] group-hover:scale-105 sm:w-28 sm:h-28 lg:h-32 lg:w-32 filter group-hover:grayscale transition-all duration-300 ease-in-out"
        />

        <div className="absolute top-0 lg:translate-x-1 lg:-translate-y-2 left-0 opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:bg-red-500 dark:group-hover:bg-white w-[75px] h-[75px] sm:w-28 sm:h-28 lg:h-32 lg:w-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{percentage}%</p>
            </div>
        </div>
        <p className="hidden lg:inline-flex rounded-md tracking-widest text-xs uppercase group:hover:border dark:border-gray-200 border-[#242424] px-5 py-2 group-hover:bg-gray-500 dark:group-hover:bg-gray-200  dark:text-gray-100 dark:group-hover:text-gray-900 text-gray-700 group-hover:text-gray-900 transition-all duration-300 ease-in-out">{name}</p>
    </div>
  )
}