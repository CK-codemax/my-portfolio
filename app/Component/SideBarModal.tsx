'use client'

import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SideBarModalContext = createContext();


type Props = {
  children: React.ReactNode;
}

function SideBarModal({children}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen((open) => !open);

  return (
    <SideBarModalContext.Provider value={{closeModal, openModal, isOpen }}>
     {children}
    </SideBarModalContext.Provider>
  );
}

  function Open() {
  const { openModal, isOpen } = useContext(SideBarModalContext);

  return (
    <>

  <div onClick={openModal} className="relative lg:hidden bg-transparent group cursor-pointer w-[50px]">
     <div className={`absolute w-full bg-gray-700 hover:bg-gray-900  dark:bg-gray-200 ${!isOpen ? 'rotate-0 -translate-y-[14px]' : 'rotate-45 translate-y-0'} dark:hover:bg-white transition-all duration-300 ease-in-out rounded-md h-2`} />
     <div className={`absolute w-full bg-gray-700 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-white ${!isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out rounded-md h-2`} />
     <div className={`absolute w-full bg-gray-700 hover:bg-gray-900 ${!isOpen ? 'rotate-0 translate-y-[14px]' : '-rotate-45 translate-y-0'} dark:bg-gray-200 dark:hover:bg-white transition-all duration-300 ease-in-out rounded-md h-2`} />
  </div>
  </>
  )
}


function Window(){
    const { closeModal, isOpen } = useContext(SideBarModalContext);
    const sideBarRef = useRef()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
       setMounted(true)
 
       return () => setMounted(false)
    }, [])

   
    
   useEffect(
     function(){
     function handleClick(e){
       if(sideBarRef.current && !sideBarRef.current.contains(e.target)){
         closeModal()
       }
     }

     document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
     },
     [closeModal]
  )

         if(!mounted)return
         return createPortal(<>
        {isOpen && (<div className="lg:hidden bg-black/10 w-full bg-[rgba(255, 255, 255, 0.1)] z-30 h-screen fixed top-0 left-0"/>
                )}  
           <div className={`lg:hidden h-screen w-[80%] bg-gray-100 dark:bg-gray-800  fixed z-30 top-[70px] right-0  ${isOpen ? 'translate-x-0' : 'translate-x-[100%]' } transition-all duration-500 linear origin-right`}>
          
         
             <div ref={sideBarRef} className="pt-4 w-full h-full bg-gray-100 dark:bg-gray-800 flex flex-col ">
        

<Link onClick={closeModal} className="tracking-widest h-[50px] flex justify-center items-center text-xs uppercase w-full text-center  dark:text-gray-100 dark:hover:text-white text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'/'}>Home</Link>
<Link onClick={closeModal} className="tracking-widest h-[50px] flex justify-center items-center text-xs uppercase w-full text-center dark:text-gray-100 dark:hover:text-white text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'/'}>Tech stack</Link>
<Link onClick={closeModal} className="tracking-widest h-[50px] flex justify-center items-center text-xs uppercase w-full text-center dark:text-gray-100 dark:hover:text-white text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'/'}>Projects</Link>
<Link onClick={closeModal} className="tracking-widest h-[50px] flex justify-center items-center text-xs uppercase w-full text-center dark:text-gray-100 dark:hover:text-white text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={'/'}>ContactMe</Link>

    </div>

             
           </div>
           </>,
           document.body
         )
      
    
}

SideBarModal.Open = Open;
SideBarModal.Window = Window;


export default SideBarModal


