import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Internship } from "./components/Internship";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-fuchsia-100 selection:text-fuchsia-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Internship />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
