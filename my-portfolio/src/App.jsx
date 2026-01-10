import React from "react";
// Components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./section/Footer";

// Sections
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Experience from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-900 text-white selection:bg-cyan-500 selection:text-white">
      {/* Background & Effects */}
      <ParticlesBackground />
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center">
        <Home />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">
          <About />
          <Skills />
          <Project />
          <Experience />
          <Testimonials />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
