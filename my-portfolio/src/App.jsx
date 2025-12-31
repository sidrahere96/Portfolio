import React from "react"
import Navbar from "./components/Navbar";
import About from "./section/About";
import CustomCursor from "./components/CustomCursor";
import Home from "./section/Home";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Footer from "./section/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  return (
    <div className="relative gradient-bg text-white">
      {/* <ParticlesBackground /> */}
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}
