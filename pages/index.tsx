import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setnav] = useState(false);
  const openNav = () => setnav(true);
  const closeNav = () => setnav(false);

  return (
    <div className="overflow-x-hidden flex flex-col">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
      </div>
      <div className="relative">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
