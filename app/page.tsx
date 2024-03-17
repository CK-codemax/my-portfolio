import ContactMe from "./Component/ContactMe";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";

import Footer from "./Component/Footer";


export default function page() {
  return (
    
     <div className="overflow-y-scroll overflow-x-hidden snap-y snap-mandatory h-screen">
        <Header />
        <section className="snap-start" id="hero">
         <Hero />
       </section>

       <section className="snap-start" id="projects">
         <Projects />
       </section>

       <section className="snap-start" id="skills">
         <Skills  />
       </section>

       <section className="snap-start" id="contact">
         <ContactMe  />
       </section>

       <Footer />

    <p>
      page
    </p>
     </div>
  )
}
