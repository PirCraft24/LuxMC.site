
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/723019e5-16c9-4269-af96-62d1ef70fb9e.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <img 
            src="/lovable-uploads/2138cf7d-4b05-4fc8-982d-3b4b4210c0a3.png" 
            alt="LuxAttack Logo" 
            className="h-32 mx-auto mb-8" 
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text tracking-tight">
            Deine Minecraft Welt <br /> wartet auf dich
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            Willkommen bei LUX-MC – deiner kreativen Minecraft-Welt! Bei uns steht der Spielspaß an erster Stelle.
            Unsere Community ist freundlich, hilfsbereit und immer offen für neue Spieler.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/servers">
              <Button size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                <span className="glow-text">Server entdecken</span>
              </Button>
            </Link>
            <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border border-white/20 hover:bg-white/10">
                <span className="glow-text">Discord beitreten</span>
              </Button>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="h-8 w-8 transform rotate-90 text-white/70" />
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center glow-text">
            Über LUX-MC
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Seit 2024 entwickeln wir mit einem kleinen, engagierten Team einzigartige Serverkonzepte 
              mit viel Herzblut und Ideenreichtum. Ob actiongeladene PvP-Schlachten oder wirtschaftlich 
              durchdachte Survival-Welten – bei uns steht der Spielspaß an erster Stelle.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tauch ein in unsere Welt – gemeinsam bauen wir das nächste große Abenteuer!
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-black/95 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/13df85ac-810a-4dc2-933d-c6fa2fd99678.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center glow-text">
            Unsere Server Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">PVP Schlachten</h3>
              <p className="text-gray-400">
                Spannende und actiongeladene PvP-Erlebnisse auf speziell gestalteten Maps.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Survival Economy</h3>
              <p className="text-gray-400">
                Wirtschaftlich durchdachte Survival-Welten mit ausgeklügelten Wirtschaftssystemen.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Gemeinschaft</h3>
              <p className="text-gray-400">
                Werde Teil einer freundlichen und hilfsbereiten Community von Minecraft-Spielern.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-black/90 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text max-w-4xl mx-auto leading-tight">
            Bereit, Teil unserer LuxAttack-Community zu werden?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Starte noch heute dein Abenteuer. Schließe dich unserem Server an und entdecke
            neue Freunde, epische Bauten und aufregende Events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/servers">
              <Button size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                <span className="glow-text">Server entdecken</span>
              </Button>
            </Link>
            <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border border-white/20 hover:bg-white/10">
                <span className="glow-text">Discord beitreten</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
