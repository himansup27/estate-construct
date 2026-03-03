import React, { useEffect } from 'react';
import { useMode } from '../context/ModeContext';
import Hero from '../components/home/Hero';
import About from '../components/about/About';
import CurrentProjects from '../components/home/CurrentProjects';
import ConstructionServices from '../components/home/ConstructionServices';
import WorkProcess from '../components/home/WorkProcess';
import Gallery from '../components/gallery/Gallery';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

const ConstructionPage = () => {
  const { toggleMode } = useMode();

  useEffect(() => {
    toggleMode('construct');
  }, []);

  return (
    <>
      <Hero />
      <About />
      <CurrentProjects />
      <ConstructionServices />
      <WorkProcess />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default ConstructionPage;