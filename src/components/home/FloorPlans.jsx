import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { Maximize, Bed, Bath, Home, Download } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const FloorPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const floorPlans = [
    {
      id: 1,
      name: '2 BHK Premium',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      rooms: [
        { name: 'Living Room', size: '22 m²' },
        { name: 'Dining Room', size: '15 m²' },
        { name: 'Kitchen', size: '15 m²' },
        { name: 'Master Bedroom', size: '16 m²' },
        { name: 'Kids Bedroom', size: '12 m²' },
        { name: 'Bath Room', size: '6 m²' },
        { name: 'Guest Toilet', size: '2 m²' },
        { name: 'Balcony', size: '5 m²' },
        { name: 'Storage Room', size: '3 m²' }
      ]
    },
    {
      id: 2,
      name: '3 BHK Luxury',
      bedrooms: 3,
      bathrooms: 3,
      area: '1,850 sq ft',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      rooms: [
        { name: 'Living Room', size: '28 m²' },
        { name: 'Dining Room', size: '18 m²' },
        { name: 'Kitchen', size: '18 m²' },
        { name: 'Master Bedroom', size: '20 m²' },
        { name: 'Bedroom 2', size: '16 m²' },
        { name: 'Bedroom 3', size: '14 m²' },
        { name: 'Master Bath', size: '8 m²' },
        { name: 'Common Bath', size: '6 m²' },
        { name: 'Balcony', size: '8 m²' }
      ]
    },
    {
      id: 3,
      name: '4 BHK Penthouse',
      bedrooms: 4,
      bathrooms: 4,
      area: '3,200 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      rooms: [
        { name: 'Living Room', size: '35 m²' },
        { name: 'Dining Room', size: '22 m²' },
        { name: 'Kitchen', size: '20 m²' },
        { name: 'Master Bedroom', size: '25 m²' },
        { name: 'Bedroom 2', size: '18 m²' },
        { name: 'Bedroom 3', size: '16 m²' },
        { name: 'Bedroom 4', size: '14 m²' },
        { name: 'Master Bath', size: '10 m²' },
        { name: 'Terrace', size: '15 m²' }
      ]
    }
  ];

  const plan = floorPlans[selectedPlan];

  return (
    <section id="floor-plans" className="py-20 bg-primary-900">
      <AnimatedSection animation="fade-up">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Floor Plans"
          subtitle="Explore our meticulously designed layouts"
        />

        {/* Plan Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {floorPlans.map((plan, index) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur-md ${
                selectedPlan === index
                  ? 'bg-accent-600/80 text-white border border-accent-500/30 shadow-lg'
                  : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Floor Plan Image */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
            <img 
              src={plan.image} 
              alt={plan.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6">{plan.name}</h3>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Bed className="text-accent-600 mx-auto mb-2" size={28} />
                  <p className="text-2xl font-bold">{plan.bedrooms}</p>
                  <p className="text-sm text-gray-400">Bedrooms</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Bath className="text-accent-600 mx-auto mb-2" size={28} />
                  <p className="text-2xl font-bold">{plan.bathrooms}</p>
                  <p className="text-sm text-gray-400">Bathrooms</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Maximize className="text-accent-600 mx-auto mb-2" size={28} />
                  <p className="text-2xl font-bold">{plan.area.split(' ')[0]}</p>
                  <p className="text-sm text-gray-400">Sq Ft</p>
                </div>
              </div>

              {/* Room List */}
              <div className="space-y-2 mb-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Home size={20} className="text-accent-600" />
                  Room Details
                </h4>
                {plan.rooms.map((room, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
                  >
                    <span className="text-gray-300">{room.name}</span>
                    <span className="font-semibold text-accent-600">{room.size}</span>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <button className="w-full bg-accent-600/80 hover:bg-accent-600 backdrop-blur-md text-white py-3 rounded-lg font-semibold transition-all border border-accent-500/30 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Floor Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default FloorPlans;