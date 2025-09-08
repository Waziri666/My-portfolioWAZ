import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Summary from "./sections/Summary";
import About from "./sections/About";
import MyTestimonials from "./sections/MyTestimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Summary />
      <MyTestimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
