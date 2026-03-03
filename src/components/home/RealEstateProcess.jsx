// ===============================================
// UPDATE: src/components/home/RealEstateProcess.jsx
// STANDARD SIZES & PROPER ALIGNMENT
// ===============================================

import React from 'react';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const RealEstateProcess = () => {
  const steps = [
    {
      emoji: '🧭',
      number: '01',
      title: 'Market Intelligence',
      description: 'Growth analysis, demand study, and location research to identify high-value real estate opportunities.'
    },
    {
      emoji: '📍',
      number: '02',
      title: 'Property Identification',
      description: 'Strategic land and property selection with strong connectivity, future potential, and legal clarity.'
    },
    {
      emoji: '📜',
      number: '03',
      title: 'Legal Due Diligence',
      description: 'Clear title verification, zoning checks, and statutory compliance for risk-free transactions.'
    },
    {
      emoji: '🏷️',
      number: '04',
      title: 'Asset Positioning',
      description: 'Pricing strategy, property structuring, and market positioning to maximize value and demand.'
    },
    {
      emoji: '📢',
      number: '05',
      title: 'Marketing & Sales',
      description: 'Targeted marketing, site visits, and transparent booking and transaction management.'
    },
    {
      emoji: '🔁',
      number: '06',
      title: 'Post-Sales Advisory',
      description: 'Registration support, resale, leasing, and long-term asset value enhancement.'
    }
  ];

  return (
    <section id="real-estate-process" className="py-20 bg-primary-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Our Real Estate Process"
            subtitle="A systematic approach to finding your perfect property"
          />
        </AnimatedSection>

        {/* Process Flow - Zigzag Layout */}
        <div className="max-w-5xl mx-auto mt-12">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up"
            //   delay={index * 100}
            >
              <div className={`flex flex-col md:flex-row items-center gap-6 mb-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-accent-500 transition-all duration-300 group">
                    <div className={`flex items-center gap-2 mb-3 ${
                      index % 2 === 1 ? 'md:justify-end justify-center' : 'justify-center md:justify-start'
                    }`}>
                      <div className="bg-accent-500/20 px-3 py-1 rounded-full">
                        <span className="text-accent-500 font-bold text-xs">STEP {step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-grey-100 group-hover:text-accent-500 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-grey-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon Side */}
                <div className="relative flex-shrink-0">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-accent-500 to-transparent"></div>
                  )}
                  
                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center shadow-lg shadow-accent-500/20">
                      <span className="text-4xl">{step.emoji}</span>
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white text-accent-700 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateProcess;