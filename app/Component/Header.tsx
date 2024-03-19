'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
import ChangeTheme from "./ChangeTheme"
import SideBarModal from "./SideBarModal"
import { scrollToElement } from "../helpers/scrollTo"
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-gray-200 z-50 top-0 dark:bg-[#242424] h-[70px] w-full shadow-md sticky justify-between px-3 lg:px-7 flex items-center">
   
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
            duration : 0.75,

        }} className="flex items-center space-x-2 sm:space-x-3">
            <Link href={'https://github.com/CK-codemax'} className="w-[50px] group h-[50px] cursor-pointer flex items-center justify-center rounded-full bg-transparent hover:bg-gray-500 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out">
                <FaGithub className="text-[28px] group-hover:text-[32px] text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-900 group-hover:text-gray-900 transition-all duration-300 ease-in-out" />
            </Link>

            <Link href={'https://www.linkedin.com/in/ochuko-whoro-214b6328b/'} className="w-[50px] group h-[50px] cursor-pointer flex items-center justify-center rounded-full bg-transparent hover:bg-gray-500 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out">
                <FaLinkedin className="text-[28px] group-hover:text-[32px] text-gray-700  dark:text-gray-200 dark:group-hover:text-gray-900 group-hover:text-gray-900 transition-all duration-300 ease-in-out" />
            </Link>

            <Link href={'https://twitter.com/OchukoWH'} className="w-[50px] group h-[50px] cursor-pointer flex items-center justify-center rounded-full bg-transparent hover:bg-gray-500 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out">
                <FaTwitter className="text-[28px] group-hover:text-[32px] text-gray-700  dark:text-gray-200 dark:group-hover:text-gray-900 group-hover:text-gray-900 transition-all duration-300 ease-in-out" />
            </Link>

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
            duration : 0.75,

        }} className="flex items-center space-x-2 sm:space-x-3">

       
        <ChangeTheme />
        <SideBarModal>
           <SideBarModal.Open />
            <SideBarModal.Window />

        </SideBarModal>

        <div className="hidden lg:flex items-center space-x-3">

            <Link className="rounded-md tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'#hero'}>Home</Link> 
            <Link className="rounded-md tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'#projects'}>Projects</Link>
            <Link className="rounded-md tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'#skills'}>Tech stack</Link>
            <Link className="rounded-md tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'#contact'}>ContactMe</Link>


        </div>
        </motion.div>

    </header>
  )
}