import React from 'react';
import { useMode } from '../../context/ModeContext';
import ModeToggle from './ModeToggle';
import ScrollIndicator from './ScrollIndicator';
import { MapPin } from 'lucide-react';

const Hero = () => {
  const { mode } = useMode();

  const heroContent = {
    estate: {
      title: (
        <>
          <span className="text-grey-100">Live Comfortably.</span>{' '}
          <span className="text-accent-500 font-light tracking-wide-elegant">Live Centrally</span>
        </>
      ),
      subtitle: 'Discover premium properties in prime locations with world-class amenities and modern living spaces',
      bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600'
    },
    construct: {
      title: (
        <>
          <span className="text-grey-100">Building Dreams.</span>{' '}
          <span className="text-accent-500 font-light tracking-wide-elegant">Creating Reality</span>
        </>
      ),
      subtitle: 'Expert construction services delivering quality projects on time, every time with precision and innovation',
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600'
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Deep Gradient Overlay - Bottom to Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-800/70 to-primary-600/40 z-10"></div>
      
      {/* Background Image with Transition */}
      <img 
        key={mode}
        src={heroContent[mode].bgImage} 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 animate-fade-in"
      />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20">
            <span className="text-gray-100 font-medium">Premium Living & Construction Excellence</span>
          </div>
        </div>
        
        {/* Improved Title with Better Typography */}
        <h1 key={mode + '-title'} className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up tracking-elegant">
          {heroContent[mode].title}
        </h1>
        
        {/* Subtitle */}
        <p key={mode + '-subtitle'} className="text-xl md:text-2xl text-grey-400 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
          {heroContent[mode].subtitle}
        </p>

        {/* Mode Toggle */}
        <ModeToggle />

      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;