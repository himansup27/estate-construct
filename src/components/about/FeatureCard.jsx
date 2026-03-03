import React from 'react';
import * as Icons from 'lucide-react';

const FeatureCard = ({ feature, index }) => {
  const Icon = Icons[feature.icon];

  return (
    <div 
      className="bg-primary-800/50 backdrop-blur-sm p-8 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300 group hover:transform hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Icon 
        className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300" 
        size={48} 
      />
      <h3 className="text-xl font-bold mb-3 text-grey-100">{feature.title}</h3>
      <p className="text-grey-400">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;