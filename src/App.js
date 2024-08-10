import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import ContactClick from "./Components/Contact/ContactClick";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Check from "./Check";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactClick />} />
      </Routes>
      <Check />
    </Router>
  );
};

export default App;
