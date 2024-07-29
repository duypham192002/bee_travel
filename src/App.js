import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Countries from "./components/countries";
import Destination from "./components/destination";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Hero />
          <Countries />
          <Destination />
          <Testimonial />
          <Contact />
          <Footer />
        </Router>
      </div>
    </>
  );
}
