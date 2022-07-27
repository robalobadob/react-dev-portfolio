import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-caput bg-ghost body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      
      <Contact />
      <Footer />
    </main>
  );
}
