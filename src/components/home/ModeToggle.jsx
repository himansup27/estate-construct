import React from 'react';
import { Home, Hammer } from 'lucide-react';
import { useMode } from '../../context/ModeContext';

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <div className="flex justify-center mb-12 animate-slide-up animation-delay-300">
      <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full p-2 flex gap-2">
        <button
          onClick={() => toggleMode('estate')}
          className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-500 flex items-center gap-2 border-2 ${
            mode === 'estate'
              ? 'bg-accent-500 border-accent-500 text-white shadow-lg scale-105'
              : 'bg-transparent border-accent-500 text-accent-500 hover:bg-accent-500/10'
          }`}
        >
          <Home size={20} />
          REAL ESTATE
        </button>
        <button
          onClick={() => toggleMode('construct')}
          className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-500 flex items-center gap-2 border-2 ${
            mode === 'construct'
              ? 'bg-accent-500 border-accent-500 text-white shadow-lg scale-105'
              : 'bg-transparent border-accent-500 text-accent-500 hover:bg-accent-500/10'
          }`}
        >
          <Hammer size={20} />
          CONSTRUCTION
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;