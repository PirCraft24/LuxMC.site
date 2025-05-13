
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="glow-text text-xl font-bold flex items-center">
            <img 
              src="/lovable-uploads/ecf35f30-076e-41b5-b3d6-2a82e618b65b.png" 
              alt="LuxMC Logo" 
              className="h-10 mr-2" 
            />
            <span>LuxMC</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="glow-text hover:opacity-80 transition-opacity flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Home
            </Link>
            <Link to="/about" className="glow-text hover:opacity-80 transition-opacity flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Über uns
            </Link>
            <Link to="/servers" className="glow-text hover:opacity-80 transition-opacity flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Server
            </Link>
            <Link to="/blog" className="glow-text hover:opacity-80 transition-opacity flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Blog
            </Link>
            <Link to="/support" className="glow-text hover:opacity-80 transition-opacity flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Support
            </Link>
            <Link to="/discord" className="glow-text hover:opacity-80 transition-opacity flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              Discord
            </Link>
            <Button variant="outline" className="border border-white/20 hover:bg-white/10">
              <span className="glow-text">Join Us</span>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 mt-4 rounded-lg border border-white/10 p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="glow-text hover:opacity-80 transition-opacity py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Home
              </Link>
              <Link 
                to="/about" 
                className="glow-text hover:opacity-80 transition-opacity py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Über uns
              </Link>
              <Link 
                to="/servers" 
                className="glow-text hover:opacity-80 transition-opacity py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Server
              </Link>
              <Link 
                to="/blog" 
                className="glow-text hover:opacity-80 transition-opacity py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Blog
              </Link>
              <Link 
                to="/support" 
                className="glow-text hover:opacity-80 transition-opacity py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Support
              </Link>
              <Link 
                to="/discord" 
                className="glow-text hover:opacity-80 transition-opacity py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Discord
              </Link>
              <Button variant="outline" className="border border-white/20 hover:bg-white/10 w-full">
                <span className="glow-text">Join Us</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
