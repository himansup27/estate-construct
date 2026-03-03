import React, { useEffect } from 'react';
import { useMode } from '../context/ModeContext';
import Hero from '../components/home/Hero';
import About from '../components/about/About';
import CurrentProjects from '../components/home/CurrentProjects';
import UpcomingProjects from '../components/home/UpcomingProjects';
import FloorPlans from '../components/home/FloorPlans';
import Gallery from '../components/gallery/Gallery';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import RealEstateProcess from '../components/home/RealEstateProcess';

const EstatePage = () => {
  const { toggleMode } = useMode();

  useEffect(() => {
    toggleMode('estate');
  }, []);

  return (
    <>
      <Hero />
      <About />
      <CurrentProjects />
      <UpcomingProjects />
      <RealEstateProcess />
      {/* <FloorPlans /> */}
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default EstatePage;