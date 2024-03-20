'use client'

import Image from "next/image";
import { HiMiniXMark } from "react-icons/hi2";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaRegEye } from "react-icons/fa";

// Define the shape of the context value
interface ResumeModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
 }
 
const ResumeModalContext = createContext<ResumeModalContextValue>({
 isOpen: false,
 openModal: () => {},
 closeModal: () => {},
});




interface ResumeModalProps {
  children: React.ReactNode; // Define the type for the children prop
 }


function ResumeModal({children} : ResumeModalProps){
  const [isOpen, setIsOpen] = useState(false);
 
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
 
  // Provide the context value to child components
  return (
     <ResumeModalContext.Provider value={{ isOpen, openModal, closeModal }}>
       {children}
     </ResumeModalContext.Provider>
  );
 };
 

  function Open() {
  const { openModal, isOpen } = useContext(ResumeModalContext);

  return (
   <div onClick={openModal} className="rounded-md cursor-pointer flex items-center space-x-1 tracking-wide sm:tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-2 sm:px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" >
    <FaRegEye className="text-sm" />
    <span>resume</span>
    </div>
  )
}


function Window(){
    const { closeModal, isOpen } = useContext(ResumeModalContext);
    const ResumeRef = useRef<HTMLDivElement | null>(null);

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
       setMounted(true)
 
       return () => setMounted(false)
    }, [])

   

  useEffect(() => {
    // Define the event handler function
    const handleClick = (e: MouseEvent) => {
       if (ResumeRef.current && !ResumeRef.current.contains(e.target as Node)) {
         closeModal();
       }
    };
   
    // Add the event listener
    document.addEventListener('click', handleClick);
   
    // Cleanup function to remove the event listener
    return () => {
       document.removeEventListener('click', handleClick);
    };
   }, [closeModal])
         if(!mounted)return
         if(!isOpen)return null
         return createPortal(
            <div className="w-full bg-[rgba(255, 255, 255, 0.1)] h-screen z-50 fixed top-0 left-0 backdrop-blur-sm transition-all duration-500">
            <div ref={ResumeRef} className="fixed border  w-[90%] sm:w-[70%] lg:w-[400px] top-[50%] bg-[#fff] shadow-[0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)] rounded-[9px] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <Image className="object-cover w-[100%] h-auto" src={'/Ochuko whoro.jpg'} alt="my-resume" width={500} height={500} />
                <div onClick={closeModal} className="w-[50px] fixed top-1 right-1 group h-[50px] cursor-pointer flex items-center justify-center rounded-full bg-transparent hover:bg-gray-500 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out"> 
                <HiMiniXMark className="text-[28px]" />
                </div>
            </div>
         </div>,
           document.body
         )
      
    
}

ResumeModal.Open = Open;
ResumeModal.Window = Window;


export default ResumeModal


