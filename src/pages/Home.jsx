import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const to = location.state && location.state.scrollTo;
    if (to) {
      const el = document.querySelector(to);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
