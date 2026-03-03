import React from 'react';
import { useMode } from '../../context/ModeContext';
import SectionTitle from '../common/SectionTitle';
import FeatureCard from './FeatureCard';
import { estateFeatures } from '../../data/estateData';
import { constructFeatures } from '../../data/constructData';
import AnimatedSection from '../common/AnimatedSection';

const About = () => {
  const { mode } = useMode();
  const features = mode === 'estate' ? estateFeatures : constructFeatures;

  const content = {
    estate: {
      title: 'Our Real Estate Excellence',
      subtitle: 'Experience luxury living with premium amenities and prime locations'
    },
    construct: {
      title: 'Our Construction Excellence',
      subtitle: 'Delivering world-class construction with precision and innovation'
    }
  };

  return (
    <section id="about" className="py-20 bg-primary-800/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
        <SectionTitle 
          title={content[mode].title}
          subtitle={content[mode].subtitle}
        />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;