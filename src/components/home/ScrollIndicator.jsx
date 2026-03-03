import React from 'react';
import { ChevronRight } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <ChevronRight className="rotate-90 text-accent-600" size={32} />
    </div>
  );
};

export default ScrollIndicator;