'use client'
import ContactMe from "./ContactMe";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

import Footer from "./Footer";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Experience from "./Experience";


export default function MainApp() {
  const [mounted, setMounted] = useState(false)

    useEffect(() => {
       setMounted(true)
 
       return () => setMounted(false)
    }, [])
    if(!mounted)return <Loader />
  return (
    
     <div className="overflow-y-scroll overflow-x-hidden h-screen scroll-smooth">
        <Header />
        <section id="home">
         <Hero />
       </section>

       <section id="projects">
         <Projects />
       </section>

       <section id="experience">
         <Experience />
       </section>

       <section  id="skills">
         <Skills  />
       </section>

       <section  id="contact">
         <ContactMe  />
       </section>

       <Footer />
     </div>
  )
}
