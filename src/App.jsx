import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner/>
      <About/>
      <Skills/>
    </>
  );
};

export default App;