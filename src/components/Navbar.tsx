
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="glow-text text-xl font-bold">
            MineCraft Community
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="glow-text hover:opacity-80 transition-opacity">
              Home
            </Link>
            <Link to="/about" className="glow-text hover:opacity-80 transition-opacity">
              Über uns
            </Link>
            <Link to="/servers" className="glow-text hover:opacity-80 transition-opacity">
              Server
            </Link>
            <Link to="/discord" className="glow-text hover:opacity-80 transition-opacity">
              Discord
            </Link>
            <Button variant="outline" className="border border-white/20 hover:bg-white/10">
              <span className="glow-text">Join Us</span>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
