
import React, { useState } from 'react';
import { Sparkles, Users, CheckCircle, Trophy, Coins, Swords, Heart, Mail, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LuxEconomyBanner = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const openTrailer = () => {
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-accent/20 via-black to-accent/10 relative overflow-hidden border-y border-accent/30">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/30c1624d-e93b-4e0d-8a08-a8f3581a716f.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur border border-accent/40 rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-accent font-bold">JETZT NEU</span>
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text leading-tight">
              Lust auf einen aktiven Minecraft Server mit einer netten Community?
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-accent glow-text-accent">
              Joine LuxEconomy! 🥳
            </h3>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
            
            {/* Prominent Trailer Button */}
            <div className="mb-8">
              <Button 
                onClick={openTrailer}
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-xl rounded-full border-2 border-red-500 shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="mr-3 h-6 w-6 fill-current" />
                🎬 TRAILER ANSEHEN
              </Button>
            </div>
            
            <div className="glass-panel p-8 mb-8">
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                Endlich ist es soweit! LuxEconomy startet, das 3. Projekt von LuxMC! 🥳<br />
                Auf diesem Server erwartet euch ein Economy-System, welches euch erlauben wird bei Händler in der Markstadt Geld zu verdienen indem ihr Items verkauft! 💵<br />
                Mehr Informationen findet ihr auf unserem Discord Server 🔗
              </p>
              
              <h4 className="text-2xl font-bold mb-6 glow-text">Was euch erwartet:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-white/10">
                  <Users className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-white">eine nette Community 🤝</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-white/10">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-white">ein aktives Team ✅</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-white/10">
                  <Trophy className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-white">spannende Events 🤩</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-white/10">
                  <Coins className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-white">Economy System 💵</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-white/10">
                  <Swords className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-white">PvP System für PvP'er ⚔️</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-white/10">
                  <Heart className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-white">friedlich spielen 👍</span>
                </div>
              </div>
              
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-6">
                <p className="text-lg text-gray-300 mb-4">
                  Es ist für jeden etwas dabei, wenn du Interesse hast, dann schreibe mir einfach eine DM 📩
                </p>
                <p className="text-xl font-bold glow-text">
                  Wir freuen uns auf dich!
                </p>
                <p className="text-accent font-bold mt-2">
                  Dein LuxMC Team
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent hover:bg-accent/80 text-white font-bold px-8 py-3 text-lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Discord beitreten
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="border-accent/50 text-accent hover:bg-accent/10 font-bold px-8 py-3 text-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeTrailer}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Z_b0o-kPGxA?autoplay=1&rel=0"
                title="LuxEconomy Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LuxEconomyBanner;
