'use client'
import { motion } from "framer-motion"
type Props = {}

export default function Projects({}: Props) {
  const projectsReal = [1, 2, 3, 4]
  return (
    <motion.div 
    initial={{
      opacity : 0,
  }}
  animate={{
      opacity : 1,

  }}
  transition={{
      duration : 1.5,

  }} className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
          <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">Projects</h3>
           <div className="relative w-full overflow-x-scroll flex overflow-y-hidden snap-x snap-mandatory z-20">
            {/*Projects*/}
            {projectsReal.map((project, i) => <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={project}>
              <motion.img 
              initial={{
                y : -300,
                opacity : 0,
              
            }}
            whileInView={{
                y : 0,
                opacity : 100,
    
            }}
            transition={{
                duration : 1.2,
    
            }} 
            
            viewport={{once : true}}
            src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4" alt="project-image" />
              <div className="space-y-10 px-0 sm:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline">Case study {i + 1} of {projectsReal.length} :</span> Jumia clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae soluta, suscipit consectetur ad consequuntur iste, perspiciatis libero, doloribus reiciendis impedit nam optio laborum. Id cupiditate ducimus commodi aspernatur pariatur eaque.
                </p>
              </div>
            </div>)}
           </div>
          <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[350px] -skew-y-12"/>

    </motion.div>
  )
}