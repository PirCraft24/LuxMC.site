
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  // Team Mitglieder (Dummy-Daten)
  const team = [
    { 
      name: "Alex", 
      role: "Server Admin", 
      description: "Gründer und Hauptadministrator des Servers."
    },
    { 
      name: "Sam", 
      role: "Community Manager", 
      description: "Kümmert sich um Events und Community-Engagement."
    },
    { 
      name: "Jordan", 
      role: "Builder", 
      description: "Erschafft beeindruckende Strukturen für den Server."
    },
    { 
      name: "Robin", 
      role: "Moderator", 
      description: "Hält den Chat freundlich und unterstützt neue Spieler."
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Über Uns</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Wir sind eine leidenschaftliche Gemeinschaft von Minecraft-Spielern, 
            die seit 2020 zusammen spielen, bauen und Abenteuer erleben.
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
                Alles begann mit einer kleinen Gruppe von Freunden, die nach einem Ort suchten, 
                an dem sie ihre kreativen Ideen in Minecraft ausleben konnten. Was als privater 
                Server begann, wuchs schnell zu einer blühenden Community.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Über die Jahre haben wir zahlreiche Events veranstaltet, atemberaubende Bauprojekte 
                umgesetzt und eine Gemeinschaft aufgebaut, die auf gegenseitigem Respekt und der 
                Freude am gemeinsamen Spielen basiert.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Heute sind wir stolz darauf, einen Ort geschaffen zu haben, an dem Spieler aus aller 
                Welt zusammenkommen, um ihrer Kreativität freien Lauf zu lassen und gemeinsam Abenteuer zu erleben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 glow-text text-center">Unser Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>
    </div>
  );
};

export default About;
