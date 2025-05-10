
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-xl font-bold glow-text">MineCraft Community</Link>
            <p className="mt-2 text-gray-400 max-w-xs">
              Eine freundliche Minecraft-Community für Spieler aller Erfahrungsstufen.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Über uns</Link></li>
                <li><Link to="/servers" className="text-gray-400 hover:text-white transition-colors">Server</Link></li>
                <li><Link to="/discord" className="text-gray-400 hover:text-white transition-colors">Discord</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Server</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Survival</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creative</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Minigames</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Regeln</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MineCraft Community. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            <span>Minecraft ist eine eingetragene Marke von Mojang AB.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
