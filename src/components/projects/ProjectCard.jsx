import React from 'react';
import { MapPin, Bed, Bath, Maximize, Calendar, Clock } from 'lucide-react';

const ProjectCard = ({ project, mode }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-primary-800 hover:shadow-2xl hover:shadow-accent-600/20 transition-all duration-300 hover:transform hover:scale-105">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-accent-600 px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg">
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        
        {mode === 'estate' ? (
          <>
            <p className="text-gray-400 flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-accent-600" />
              {project.location}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <Bed size={16} />
                {project.bedrooms} Beds
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />
                {project.bathrooms} Baths
              </span>
              <span className="flex items-center gap-1">
                <Maximize size={16} />
                {project.area}
              </span>
            </div>
            <p className="text-2xl font-bold text-accent-600 mb-4">{project.price}</p>
          </>
        ) : (
          <>
            <p className="text-gray-400 flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-accent-600" />
              {project.type}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {project.year}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {project.duration}
              </span>
            </div>
          </>
        )}

        <button className="w-full bg-white/10 hover:bg-accent-600/80 backdrop-blur-md py-2 rounded-lg transition-colors duration-300 font-medium text-white border border-white/20 hover:border-accent-500/30">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;