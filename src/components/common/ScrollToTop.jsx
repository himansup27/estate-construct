import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(progress > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Version - Left Side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          className="writing-vertical text-grey-100 hover:text-accent-500 font-medium text-sm tracking-wider transition-all duration-300 cursor-pointer rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll to Top
        </button>

        <div className="relative w-0.5 h-40 bg-white/20 rounded-full overflow-hidden">
          <div
            className="absolute bottom-0 left-0 w-full bg-accent-500 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-accent-400 blur-sm"></div>
          </div>
        </div>

        <div className="w-2 h-2 bg-accent-500 rounded-full shadow-lg shadow-accent-500/50"></div>
      </div>

      {/* Mobile Version - Bottom Left (showing only when chatbot is on right) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 lg:hidden bg-accent-500 hover:bg-accent-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={24} />
        {/* Progress Ring */}
        <svg className="absolute inset-0 -rotate-90" width="100%" height="100%">
          <circle
            cx="50%"
            cy="50%"
            r="20"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="20"
            fill="none"
            stroke="#C9A24D"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-300"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTop;