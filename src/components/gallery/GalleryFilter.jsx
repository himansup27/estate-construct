import React from 'react';

const GalleryFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'Show All' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'facilities', label: 'Facilities' }
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-2 rounded-[14px] transition-all duration-300 font-medium backdrop-blur-md ${
            activeFilter === filter.id
              ? 'bg-accent-500 text-white shadow-lg border-2 border-accent-500'
              : 'bg-white/10 text-grey-400 hover:bg-white/20 border-2 border-white/20 hover:border-white/30'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;