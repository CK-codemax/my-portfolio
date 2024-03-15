'use client'
import { motion } from "framer-motion"

type Props = {
    percentage : number,
    src: string,
    directionLeft?: boolean,
}

export default function Skill({percentage, src, directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
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
        className="rounded-full border border-gray-500 object-cover w-[75px] h-[75px] sm:w-28 sm:h-28 lg:h-32 lg:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[75px] h-[75px] sm:w-28 sm:h-28 lg:h-32 lg:w-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{percentage}%</p>
            </div>
        </div>
    </div>
  )
}