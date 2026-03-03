import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import GalleryFilter from './GalleryFilter';
import GalleryItem from './GalleryItem';
import { useMode } from '../../context/ModeContext';
import AnimatedSection from '../common/AnimatedSection';

const Gallery = () => {
  const { mode } = useMode();
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', category: 'interior', title: 'Modern Living Room' },
    { id: 2, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', category: 'interior', title: 'Dining Area' },
    { id: 3, url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600', category: 'interior', title: 'Kitchen Design' },
    { id: 4, url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600', category: 'exterior', title: 'Building Exterior' },
    { id: 5, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', category: 'exterior', title: 'City View' },
    { id: 6, url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600', category: 'facilities', title: 'Amenities' },
    { id: 7, url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600', category: 'interior', title: 'Bedroom' },
    { id: 8, url: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=600', category: 'interior', title: 'Bathroom' },
    { id: 9, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', category: 'exterior', title: 'Architecture' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const content = {
    estate: {
      title: 'Apartment Gallery',
      subtitle: 'Discover the beauty in every detail'
    },
    construct: {
      title: 'Project Gallery',
      subtitle: 'Showcasing our construction excellence'
    }
  };

  return (
    <section id="gallery" className="py-20 bg-primary-800/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
        <SectionTitle 
          title={content[mode].title}
          subtitle={content[mode].subtitle}
        />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up">
        <GalleryFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <div className="grid md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Gallery;