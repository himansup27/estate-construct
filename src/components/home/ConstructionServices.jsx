import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { Building2, Home, Store, Factory, Hotel, Building } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const ConstructionServices = () => {
  const services = [
    {
      icon: Building2,
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential complexes built to perfection',
      features: ['Custom Design', 'Quality Materials', 'Timely Delivery']
    },
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Office spaces, business centers, and corporate headquarters',
      features: ['Modern Design', 'Smart Systems', 'Sustainability']
    },
    {
      icon: Store,
      title: 'Retail Spaces',
      description: 'Shopping malls, retail outlets, and commercial showrooms',
      features: ['Strategic Layout', 'High Traffic Flow', 'Brand Integration']
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Warehouses, factories, and industrial facilities',
      features: ['Robust Structure', 'Safety Standards', 'Scalable Design']
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Hotels, resorts, and entertainment venues',
      features: ['Luxury Finishes', 'Guest Experience', 'Operational Efficiency']
    },
    {
      icon: Home,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with modern upgrades',
      features: ['Space Optimization', 'Modern Updates', 'Budget Friendly']
    }
  ];

  return (
    <section id="construction-services" className="py-20 bg-primary-800/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
        <SectionTitle 
          title="Construction Services"
          subtitle="Comprehensive solutions for all your construction needs"
        />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-accent-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <service.icon className="text-accent-600 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-accent-600 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up">
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent-600/20 to-primary-700/20 backdrop-blur-md border border-accent-600/30 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get a free consultation and detailed quote for your construction project
            </p>
            <button className="bg-accent-600/80 hover:bg-accent-600 backdrop-blur-md text-white px-10 py-4 rounded-lg font-semibold transition-all border border-accent-500/30 text-lg">
              Request Free Quote
            </button>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ConstructionServices;