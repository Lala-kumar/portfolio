import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;