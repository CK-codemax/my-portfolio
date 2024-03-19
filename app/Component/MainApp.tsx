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
    
     <div className="overflow-y-scroll overflow-x-hidden snap-y snap-mandatory h-screen scroll-smooth">
        <Header />
        <section className="snap-start" id="home">
         <Hero />
       </section>

       <section className="snap-start" id="projects">
         <Projects />
       </section>

       <section className="snap-start" id="experience">
         <Experience />
       </section>

       <section className="snap-center" id="skills">
         <Skills  />
       </section>

       <section className="snap-center" id="contact">
         <ContactMe  />
       </section>

       <Footer />
     </div>
  )
}
