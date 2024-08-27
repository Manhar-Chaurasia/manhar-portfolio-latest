import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Contact />
      </HashRouter>
      {/* <span className="text-2xl text-white bg-[#191919]">Hello</span> */}
    </>
  );
};

export default App;
