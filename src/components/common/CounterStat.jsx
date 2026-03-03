import React from 'react';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

const CounterStat = ({ icon: Icon, value, label, suffix = '', prefix = '' }) => {
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
  const { count, elementRef } = useCounterAnimation(numericValue, 2000);

  // Format the count with suffix (%, +, etc.)
  const getDisplayValue = () => {
    if (value.toString().includes('%')) {
      return `${count}%`;
    }
    if (value.toString().includes('+')) {
      return `${count}+`;
    }
    return `${prefix}${count}${suffix}`;
  };

  return (
    <div 
      ref={elementRef}
      className="bg-gradient-to-br from-accent-500/20 to-primary-700/20 backdrop-blur-md border border-accent-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
    >
      <Icon className="text-accent-500 mx-auto mb-3" size={40} />
      <p className="text-4xl font-bold mb-2 text-grey-100">{getDisplayValue()}</p>
      <p className="text-grey-400">{label}</p>
    </div>
  );
};

export default CounterStat;