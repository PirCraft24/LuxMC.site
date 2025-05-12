
import React, { useState, useEffect } from 'react';

const AnimatedBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: -300, y: 100 });
  
  // Animation effect
  useEffect(() => {
    const showBanner = () => {
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
    };
    
    // Initial delay before first appearance
    setTimeout(() => {
      showBanner();
      
      // Show banner every 10 seconds
      const intervalId = setInterval(showBanner, 10000);
      
      return () => clearInterval(intervalId);
    }, 2000);
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
      <div className="bg-gradient-to-r from-black/80 to-black/90 p-4 rounded-lg border border-white/20 backdrop-blur-md w-64">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-3 animate-bounce">
            <img 
              src="/lovable-uploads/3b9a358c-978d-448c-bcf9-f9423ecbf123.png" 
              alt="LuxMC Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h3 className="text-lg font-bold mb-2 glow-text">LuxMC</h3>
          <p className="text-sm text-center text-white mb-2">
            Der beste Minecraft Server für dein Gaming-Erlebnis!
          </p>
          <div className="text-accent text-xs animate-pulse">
            Jetzt beitreten: play.luxmc.net
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
