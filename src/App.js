/* Importing Files */
import { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./componants/Home";
import About from "./componants/About";
import Contact from "./componants/Contact";
import Project from "./componants/Project";
import { StrictMode } from "react";
import "./CSS/loader.css";

/* Creating Navigations with Routes */
function App() {
  return (
    <StrictMode>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Project />}></Route>
          </Routes>
        </BrowserRouter>
        
    </StrictMode>
  );
}

export default App;
