// src/app/page.tsx
import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
