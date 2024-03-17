import About from "./components/About";
import ContactMe from "./component/ContactMe";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import WorkExperience from "./components/WorkExperience";
import JumiaClone from "./components/JumiaClone";
import FaceBookClone from "./components/FaceBookClone";
import HuluClone from "./components/HuluClone";
import HuluWeb from "./components/HuluWeb";
import Footer from "./Component/Footer";


export default function page() {
  return (
    // <div className="overflow-y-scroll overflow-x-hidden text-white snap-y snap-mandatory h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
    //  <Header />
    //   <section className="snap-start" id="hero">
    //     <Hero />
    //   </section>
    //   <section className="snap-center" id="about">
    //     <About />
    //   </section>
    //   <section className="snap-center" id="experience">
    //     <WorkExperience />
    //   </section>

    //   <section className="snap-center">
    //     <JumiaClone />
    //   </section>

    //   <section className="snap-center">
    //     <HuluClone />
    //   </section>

    //   <section className="snap-center">
    //     <FaceBookClone />
    //   </section>

    //   <section className="snap-center">
    //     <HuluWeb />
    //   </section>

    //   <section className="snap-start" id="skills">
    //     <Skills  />
    //   </section>

    //   <section className="snap-start" id="projects">
    //     <Projects  />
    //   </section>

    //   <section className="snap-start" id="contact">
    //     <ContactMe  />
    //   </section>
    // </div>

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
