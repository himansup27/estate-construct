import React from 'react';

const GalleryItem = ({ image, index }) => {
  return (
    <div 
      className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img 
        src={image.url} 
        alt={image.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full">
          <h3 className="text-white font-bold text-lg">{image.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;