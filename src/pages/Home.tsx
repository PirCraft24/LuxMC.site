
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text tracking-tight">
            Deine Minecraft Welt <br /> wartet auf dich
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            Tritt unserer engagierten Community bei und erlebe Minecraft wie nie zuvor.
            Ein einzigartiges Spielerlebnis mit freundlichen Spielern und innovativen Features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
              <span className="glow-text">Server beitreten</span>
            </Button>
            <Button variant="outline" size="lg" className="border border-white/20 hover:bg-white/10">
              <span className="glow-text">Discord Server</span>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="h-8 w-8 transform rotate-90 text-white/70" />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center glow-text">
            Unsere Server Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Survival Mode</h3>
              <p className="text-gray-400">
                Erkunde eine riesige Welt, baue epische Strukturen und überlebe mit Freunden.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Creative Mode</h3>
              <p className="text-gray-400">
                Entfessle deine Kreativität ohne Einschränkungen und baue beeindruckende Strukturen.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Aktive Community</h3>
              <p className="text-gray-400">
                Werde Teil einer freundlichen und hilfsbereiten Gemeinschaft von Spielern.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-black/90 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text max-w-4xl mx-auto leading-tight">
            Bereit, Teil unserer Minecraft-Community zu werden?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Starte noch heute dein Abenteuer. Schließe dich unserem Server an und entdecke
            neue Freunde, epische Builds und aufregende Events.
          </p>
          <Link to="/servers">
            <Button size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
              <span className="glow-text">Mehr Entdecken</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
