import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
