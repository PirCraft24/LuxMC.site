
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  // Team Mitglieder (basierend auf den bereitgestellten Informationen)
  const team = [
    { 
      name: "PirCraft", 
      role: "CEO", 
      description: "Leiter des Projekts, der ständig daran arbeitet, neue Ideen umzusetzen und spannende Spielmodi zu entwickeln."
    }
    // Weitere Teammitglieder könnten hier hinzugefügt werden
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/9df68dd6-fb8d-47c8-b3fc-ccaba105766c.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Über Uns</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Lerne das Team hinter LUX-MC kennen und erfahre mehr über unsere Mission, 
            ein einzigartiges Minecraft-Erlebnis zu schaffen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 glow-text text-center">Unsere Geschichte</h2>
            <div className="glass-panel p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Willkommen bei LUX-MC – deiner kreativen Minecraft-Welt! Seit 2024 entwickeln wir 
                mit einem kleinen, engagierten Team einzigartige Serverkonzepte mit viel Herzblut und Ideenreichtum.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ob actiongeladene PvP-Schlachten oder wirtschaftlich durchdachte Survival-Welten – bei uns 
                steht der Spielspaß an erster Stelle. Unsere Community ist freundlich, hilfsbereit und 
                immer offen für neue Spieler.
              </p>
              <p className="text-gray-300 leading-relaxed">
                LuxMC steht für Qualität, Kreativität und eine starke Gemeinschaft. 
                Tauch ein in unsere Welt – gemeinsam bauen wir das nächste große Abenteuer!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 glow-text text-center">Unser Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-black/80 border border-white/10">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="glow-text text-2xl">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-1 text-center glow-text">{member.name}</h3>
                  <p className="text-accent text-center mb-4">{member.role}</p>
                  <p className="text-gray-400 text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-black/80 border border-white/10">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-4 glow-text">Werde Teil unseres Teams</h3>
                  <p className="text-gray-400">
                    Wir suchen immer nach enthusiastischen und kreativen Köpfen, die unser Team verstärken möchten.
                    Wenn du Interesse hast, besuche unseren Discord-Server und kontaktiere uns dort.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 glow-text text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 glow-text">Qualität</h3>
              <p className="text-gray-400">
                Wir legen großen Wert auf hohe Qualität in allen Aspekten unseres Servers,
                von der Spielerfahrung bis zur Community.
              </p>
            </div>
            
            <div className="glass-panel p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 glow-text">Kreativität</h3>
              <p className="text-gray-400">
                Wir fördern kreative Ideen und innovative Spielkonzepte,
                um unseren Spielern immer neue Erlebnisse zu bieten.
              </p>
            </div>
            
            <div className="glass-panel p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 glow-text">Gemeinschaft</h3>
              <p className="text-gray-400">
                Eine starke, freundliche Community ist das Herzstück von LUX-MC.
                Wir schätzen jeden einzelnen Spieler.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
