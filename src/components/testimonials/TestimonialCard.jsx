import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div 
      className="bg-primary-800/50 backdrop-blur-sm p-8 rounded-xl border border-primary-700 hover:border-accent-600 transition-all duration-300 hover:transform hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Quote Icon */}
      <Quote className="text-accent-600 mb-4" size={32} />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-accent-600 text-accent-600" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-accent-600"
        />
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;