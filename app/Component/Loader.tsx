import React from 'react'

type Props = {}

export default function Loader({}: Props) {
  return (
   <div className='w-screen h-screen flex items-center justify-center'>

          <div className="bg-transparent gap-[2px] mx-auto grid grid-cols-3 grid-rows-3 h-[70px] w-[70px]">
              <div style={{animationDelay : '0.4s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.6s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.8s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.2s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.4s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.6s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.2s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
              <div style={{animationDelay : '0.4s'}} className="origin-center scale-0 loader-box bg-[#242424] dark:bg-gray-100" />
      
      
          </div>
   </div>
      
  )
}