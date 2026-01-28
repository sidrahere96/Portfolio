import React, { Suspense, lazy } from "react";
// Components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./section/Footer";

// Lazy load heavy sections if needed for performance
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Experience from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";

const App = () => {
  return (
    // Added 'scroll-smooth' for better navigation behavior
    <div className="relative min-h-screen overflow-x-hidden bg-slate-900 text-white selection:bg-cyan-300 selection:text-slate-900 scroll-smooth">
      
      {/* Background & Effects - Fixed position so they don't scroll away */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground/>
      </div>
      
      <CustomCursor />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section often stands alone for full-height impact */}
        <section id="home" className="w-full">
          <Home />
        </section>

        {/* Content Wrapper */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Project /></section>
          <section id="experience"><Experience /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="contact"><Contact /></section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
