import React from "react"
import Navbar from "./components/Navbar";
import About from "./section/About";
import Home from "./section/Home";

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