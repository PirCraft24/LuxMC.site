
import React, { useState, useEffect } from 'react';

const AnimatedBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect - only appears once
  useEffect(() => {
    // Initial delay before appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Hide banner after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      className="fixed z-50 transition-all duration-500 animate-pulse"
      style={{
        right: isVisible ? '20px' : '-300px',
        top: '30%',
        filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
      }}
    >
      <div className="bg-gradient-to-r from-black/80 to-black/90 p-2 rounded-lg border border-accent/30 backdrop-blur-md w-36">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 mb-1 animate-bounce">
            <img 
              src="/lovable-uploads/3b9a358c-978d-448c-bcf9-f9423ecbf123.png" 
              alt="LuxMC Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h3 className="text-xs font-bold mb-1 glow-text">LuxMC</h3>
          <p className="text-xs text-center text-white mb-1">
            Der beste Server!
          </p>
          <div className="text-accent text-xs animate-pulse">
            play.luxmc.net
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
