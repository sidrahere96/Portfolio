import React from "react"
import Navbar from "./components/Navbar";
import About from "./section/About";
import Home from "./section/Home";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Services from "./section/Services";
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
      <Services />
      <Testimonials />
      <Footer />  
    </div>
  )

}