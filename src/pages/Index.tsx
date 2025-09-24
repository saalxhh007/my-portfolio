import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Projects from "@/components/Portfolio/Projects";
import Contact from "@/components/Portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
