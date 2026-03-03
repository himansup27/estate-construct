import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/about/About';
import CurrentProjects from '../components/home/CurrentProjects';
import UpcomingProjects from '../components/home/UpcomingProjects';
import FloorPlans from '../components/home/FloorPlans';
import ConstructionServices from '../components/home/ConstructionServices';
import WorkProcess from '../components/home/WorkProcess';
import Gallery from '../components/gallery/Gallery';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import { useMode } from '../context/ModeContext';
import RealEstateProcess from '../components/home/RealEstateProcess';

const HomePage = () => {
  const { mode } = useMode();

  return (
    <>
      <Hero />
      <About />
      
      {mode === 'estate' ? (
        <>
          <CurrentProjects />
          <UpcomingProjects />
          {/* <FloorPlans /> */}
          <RealEstateProcess />
        </>
      ) : (
        <>
          <CurrentProjects />
          <ConstructionServices />
          <WorkProcess />
        </>
      )}
      
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;