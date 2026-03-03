import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 relative';
  
  const variants = {
    primary: 'bg-accent-500 hover:bg-gradient-to-r hover:from-accent-500 hover:to-accent-700 text-white shadow-lg hover:shadow-xl rounded-[16px]',
    secondary: 'bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 hover:bg-white/20 text-white rounded-[16px]',
    outline: 'border-2 border-accent-500 backdrop-blur-md bg-transparent text-accent-500 hover:bg-accent-500 hover:text-white rounded-[16px]',
    ghost: 'text-white hover:bg-white/10 backdrop-blur-md rounded-[16px]'
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Button;