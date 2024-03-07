import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";

export default function page() {
  return (
    <div>
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
    </div>
  )
}
