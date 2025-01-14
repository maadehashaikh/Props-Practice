// src/App.js
import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./Destinations";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
