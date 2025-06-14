import React from 'react';
import { ArrowRight, Sparkles, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LuxEconomyBanner from '@/components/LuxEconomyBanner';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/30c1624d-e93b-4e0d-8a08-a8f3581a716f.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <img 
            src="/lovable-uploads/ecf35f30-076e-41b5-b3d6-2a82e618b65b.png" 
            alt="LuxMC Logo" 
            className="h-32 mx-auto mb-8" 
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text tracking-tight">
            Deine Minecraft Welt <br /> wartet auf dich
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            Willkommen bei LuxMC – deiner kreativen Minecraft-Welt! Bei uns steht der Spielspaß an erster Stelle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/servers">
              <Button size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                <Sparkles className="mr-2 h-4 w-4" />
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
      
      {/* LuxEconomy Promotional Banner */}
      <LuxEconomyBanner />
      
      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center glow-text">
            Über LuxMC
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Seit 2024 entwickeln wir mit einem kleinen, engagierten Team einzigartige Serverkonzepte 
              mit viel Herzblut und Ideenreichtum. Tauch ein in unsere Welt – gemeinsam bauen wir das nächste große Abenteuer!
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section with New Images */}
      <section className="py-24 bg-black/95 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4d577066-6f21-4346-9778-df81a97d8e70.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center glow-text">
            Unsere Server Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl"><Diamond className="h-8 w-8" /></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Spannende Server</h3>
              <p className="text-gray-400">
                Von CraftAttack bis zu wirtschaftlichen Survival-Servern - für jeden Spielertyp ist etwas dabei.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl"><Diamond className="h-8 w-8" /></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">LuxMC Economy</h3>
              <p className="text-gray-400">
                Wirtschaftlich durchdachte Survival-Welten mit ausgeklügelten Wirtschaftssystemen.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="glow-text-accent text-2xl"><Diamond className="h-8 w-8" /></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 glow-text">Gemeinschaft</h3>
              <p className="text-gray-400">
                Werde Teil einer freundlichen und hilfsbereiten Community von Minecraft-Spielern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minecraft Images Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/lovable-uploads/cdbbb7a6-fec6-4459-880c-c3a00338535e.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/73971882-5e2f-4bf9-a85b-4296879189c4.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/84b8584b-ae32-447c-ac08-a125892a9842.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/c53e45df-2de1-41bc-a11a-65582190cea5.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-black/90 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text max-w-4xl mx-auto leading-tight">
            Bereit, Teil unserer LuxMC-Community zu werden?
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

      {/* Team Recruitment Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/7f885c6e-53f8-4bb1-bd33-57912c486531.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center glow-text">
            Wir suchen dich!
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto glass-panel p-8">
            <p className="text-xl text-gray-300 mb-6 text-center">
              LuxMC stellt gerade ein neues Team zusammen – sei dabei!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-3 glow-text">Was dich erwartet:</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Ein freundliches und engagiertes Team</li>
                  <li>Spannende Projekte und kreative Freiheit</li>
                  <li>Eine aktive Community</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 glow-text">Wir suchen aktuell:</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Entwickler (für Coden, Webseiten usw.)</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold mb-3 glow-text">So bewirbst du dich:</h3>
              <p className="text-gray-300 mb-6">
                Eröffne ein Ticket auf unserem Discord und sende uns eine Auswahl deiner bisherigen Arbeiten.
                Wir freuen uns auf dich!
              </p>
              
              <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span className="glow-text">Zum Discord</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
