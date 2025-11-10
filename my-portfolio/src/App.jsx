import React from "react"
import Navbar from "./components/Navbar";
import About from "./section/About";
import Home from "./section/Home";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return(
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Experience />
      <Testimonials />
      <Footer />  
    </div>
  )

}