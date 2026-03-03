import React from 'react';
import { useMode } from '../../context/ModeContext';
import { Calendar } from 'lucide-react';
import Button from '../common/Button';
import ContactInfo from './ContactInfo';
import AnimatedSection from '../common/AnimatedSection';

const Contact = () => {
  const { mode } = useMode();

  const content = {
    estate: {
      title: 'Schedule Your Visit Today',
      subtitle: 'Visit our premium properties and experience luxury living firsthand',
      cta: 'Schedule a Visit'
    },
    construct: {
      title: 'Get Your Free Quote',
      subtitle: 'Let us bring your construction vision to life with expert craftsmanship',
      cta: 'Request Quote'
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-800 to-primary-900">
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {content[mode].title}
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            {content[mode].subtitle}
          </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up">
          <ContactInfo />
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
          <Button 
            variant="primary" 
            size="lg"
            icon={Calendar}
            className="shadow-2xl shadow-accent-600/40 hover:shadow-accent-600/60 mt-8"
          >
            {content[mode].cta}
          </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;