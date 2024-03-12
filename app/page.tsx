import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

export default function page() {
  return (
    <div className="overflow-y-scroll overflow-x-hidden text-white snap-y snap-mandatory h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
     <Header />
      <section className="snap-start" id="hero">
        <Hero />
      </section>
      <section className="snap-center" id="about">
        <About />
      </section>
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>

      <section className="snap-start" id="skills">
        <Skills  />
      </section>

      <section className="snap-start" id="projects">
        <Projects  />
      </section>

      <section className="snap-start" id="contact">
        <ContactMe  />
      </section>
    </div>
  )
}
