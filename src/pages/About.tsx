import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  // Team Mitglieder (basierend auf den bereitgestellten Informationen)
  const team = [
    { 
      name: "PirCraft", 
      role: "CEO", 
      description: "Leiter des Projekts, der ständig daran arbeitet, neue Ideen umzusetzen und spannende Spielmodi zu entwickeln.",
      avatar: "/lovable-uploads/30361288-6d11-4905-838a-47881a0921fe.png"
    },
    { 
      name: "Crafter1566", 
      role: "Team Mitglied", 
      description: "Kümmert sich vor allem um das Wohlbefinden der Spieler auf dem Minecraft Server",
      avatar: "/lovable-uploads/69c4b240-bdf7-49ce-9dc4-b494a74c83fd.png"
    },
    { 
      name: "JoeLux353", 
      role: "Team Mitglied", 
      description: "Builder auf dem Server der Spawns. Bringt viele neue Ideen.",
      avatar: "/lovable-uploads/bb005357-26c6-4746-8172-87a40d61ad07.png"
    },
    { 
      name: "SenseiJules", 
      role: "Team Mitglied", 
      description: "Experte für Server-Management und Spielerentwicklung im LuxMC-Team."
    },
    { 
      name: "NoTimeToFear", 
      role: "Content Creator", 
      description: "Content Creator auf Lux-MC. Macht hauptsächlich Videos und Livestreams auf Youtube über den Server.",
      avatar: "/lovable-uploads/0230713a-5adc-4c3d-ab87-25f6f787f965.png"
    }
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
            Lerne das Team hinter LuxMC kennen und erfahre mehr über unsere Mission, 
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
                Willkommen bei LuxMC – deiner kreativen Minecraft-Welt! Seit 2024 entwickeln wir 
                mit einem kleinen, engagierten Team einzigartige Serverkonzepte mit viel Herzblut und Ideenreichtum.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-black/80 border border-white/10">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {member.avatar ? (
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                        <AvatarFallback className="text-2xl glow-text">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <span className="glow-text text-2xl">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-1 text-center glow-text">{member.name}</h3>
                  <p className="text-accent text-center mb-4">{member.role}</p>
                  <p className="text-gray-400 text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Join Our Team Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-black/80 border border-white/10 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4">
                  <Sparkles className="h-24 w-24 text-accent/20" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 glow-text">Wir suchen dich!</h3>
                  <p className="text-gray-300 mb-6">
                    LuxMC stellt gerade ein neues Team zusammen – sei dabei!
                  </p>
                  
                  <div className="text-left mb-8">
                    <h4 className="text-xl font-semibold mb-4 glow-text">Was dich erwartet:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Ein freundliches und engagiertes Team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Spannende Projekte und kreative Freiheit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Eine aktive Community</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left mb-8">
                    <h4 className="text-xl font-semibold mb-4 glow-text">Wir suchen aktuell:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Entwickler (für Coden, Webseiten usw.)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="text-xl font-semibold mb-4 glow-text">So bewirbst du dich:</h4>
                    <p className="text-gray-300">
                      Eröffne ein Ticket auf unserem Discord und sende uns eine Auswahl deiner bisherigen Arbeiten. Wir freuen uns auf dich!
                    </p>
                  </div>
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
                Eine starke, freundliche Community ist das Herzstück von LuxMC.
                Wir schätzen jeden einzelnen Spieler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Server Images */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 glow-text text-center">Impressionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/lovable-uploads/7f885c6e-53f8-4bb1-bd33-57912c486531.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/7f138b44-9269-4282-a232-e4cbc559d145.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/8072d65c-d276-4162-8bc4-7cfae6a3ac35.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/caf3f7da-9e39-493f-b3c6-566b753f5a63.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
