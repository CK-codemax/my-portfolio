'use client'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="flex items-start justify-between sticky top-0 max-w-6xl mx-auto z-20 xl:items-center p-5">
        {/*Left*/}
        <motion.div
        initial={{
            x : -500,
            opacity : 0,
            scale : 0.5,

        }}
        animate={{
            x : 0,
            opacity : 100,
            scale : 1,

        }}
        transition={{
            duration : 1.5,

        }}

        className="flex items-center">
            {/*Social icons*/}
            <SocialIcon url="https://twitter.com" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://linkedin.com" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://github.com" fgColor="gray" bgColor="transparent" />
        </motion.div>
        <motion.div 
          initial={{
            x : 500,
            opacity : 0,
            scale : 0.5,

        }}
        animate={{
            x : 0,
            opacity : 100,
            scale : 1,

        }}
        transition={{
            duration : 1.5,

        }}
        className="flex items-center text-gray-300 cursor-pointer">
            <SocialIcon network="email" url="whoroochuko@gmail.com" className="cursor-pointer" fgColor="gray" bgColor="transparent" />
            <p className="uppercase hidden text-sm text-gray-400 sm:inline-flex">get in touch</p>
        </motion.div>
    </div>
  )
}