
import React, { useState, useEffect } from 'react';

const AnimatedBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: -300, y: 100 });
  
  // Animation effect - only appears once
  useEffect(() => {
    // Initial delay before appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Create "magical" jittery movement
      const jitterInterval = setInterval(() => {
        setPosition({
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5
        });
      }, 100);
      
      // Hide banner after 5 seconds
      setTimeout(() => {
        clearInterval(jitterInterval);
        setIsVisible(false);
      }, 5000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      className="fixed z-50 transition-all duration-300 animate-pulse"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        right: isVisible ? '20px' : '-300px',
        top: '30%',
        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
      }}
    >
      <div className="bg-gradient-to-r from-black/80 to-black/90 p-3 rounded-lg border border-white/20 backdrop-blur-md w-48">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 mb-2 animate-bounce">
            <img 
              src="/lovable-uploads/3b9a358c-978d-448c-bcf9-f9423ecbf123.png" 
              alt="LuxMC Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h3 className="text-sm font-bold mb-1 glow-text">LuxMC</h3>
          <p className="text-xs text-center text-white mb-1">
            Der beste Minecraft Server!
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
