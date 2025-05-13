
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ecf35f30-076e-41b5-b3d6-2a82e618b65b.png" 
                alt="LuxMC Logo" 
                className="h-8 mr-2" 
              />
              <span className="text-xl font-bold glow-text">LuxMC</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-xs">
              Eine freundliche Minecraft-Community für Spieler aller Erfahrungsstufen.
              Qualität, Kreativität und eine starke Gemeinschaft.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Über uns</Link></li>
                <li><Link to="/servers" className="text-gray-400 hover:text-white transition-colors">Server</Link></li>
                <li><Link to="/videos" className="text-gray-400 hover:text-white transition-colors">Videos</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                <li><Link to="/discord" className="text-gray-400 hover:text-white transition-colors">Discord</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Server</h3>
              <ul className="space-y-2">
                <li><Link to="/servers" className="text-gray-400 hover:text-white transition-colors">LuxAttack 1</Link></li>
                <li><Link to="/servers" className="text-gray-400 hover:text-white transition-colors">LuxAttack 2</Link></li>
                <li><Link to="/servers" className="text-gray-400 hover:text-white transition-colors">LuxMC Economy</Link></li>
                <li><Link to="/servers" className="text-gray-400 hover:text-white transition-colors">Regeln</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                <li><a href="mailto:luxmc2024@gmail.com" className="text-gray-400 hover:text-white transition-colors">E-Mail</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LuxMC. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            <span>Nicht mit Mojang oder Microsoft verbunden.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
