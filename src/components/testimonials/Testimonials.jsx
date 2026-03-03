import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonialsData';
import AnimatedSection from '../common/AnimatedSection';

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
        <SectionTitle 
          title="What Our Clients Say"
          subtitle="Trusted by hundreds of satisfied customers"
        />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;