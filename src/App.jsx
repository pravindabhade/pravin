import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaCode, FaMobileAlt, FaServer, FaPalette, FaDatabase, FaCloud } from "react-icons/fa";
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
""