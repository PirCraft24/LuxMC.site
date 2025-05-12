
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';

const Support = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8072d65c-d276-4162-8bc4-7cfae6a3ac35.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Support</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Brauchst du Hilfe? Unser Team steht dir gerne zur Verfügung!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Discord Support */}
              <Card className="bg-black/80 border border-white/10 overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <MessageCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 glow-text">Discord Support</h3>
                  <p className="text-gray-300 mb-6">
                    Tritt unserem Discord-Server bei für schnellen Support, Updates und um Teil unserer Community zu werden.
                  </p>
                  <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      <span className="glow-text">Discord beitreten</span>
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              {/* Email Support */}
              <Card className="bg-black/80 border border-white/10 overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 glow-text">E-Mail Support</h3>
                  <p className="text-gray-300 mb-6">
                    Bei komplexeren Anfragen oder für Vorschläge kannst du uns auch eine E-Mail senden.
                  </p>
                  <a href="mailto:luxmc2024@gmail.com">
                    <Button className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                      <Mail className="mr-2 h-4 w-4" />
                      <span className="glow-text">luxmc2024@gmail.com</span>
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 glow-text text-center">Häufige Fragen</h2>
              <div className="space-y-6">
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-semibold mb-2 glow-text">Wie kann ich dem Server beitreten?</h3>
                  <p className="text-gray-400">
                    Du kannst unserem Server über die IP luxmc.net beitreten. Stelle sicher, dass du die richtige Minecraft-Version verwendest.
                  </p>
                </div>
                
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-semibold mb-2 glow-text">Welche Regeln gelten auf dem Server?</h3>
                  <p className="text-gray-400">
                    Alle Serverregeln findest du auf unserem Discord-Server sowie beim Spieleinstieg. Die wichtigsten Regeln sind Respekt gegenüber anderen Spielern und kein Cheaten.
                  </p>
                </div>
                
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-semibold mb-2 glow-text">Wie kann ich dem Team beitreten?</h3>
                  <p className="text-gray-400">
                    Informationen zur Bewerbung für das Team findest du auf unserer "Über uns"-Seite oder in unserem Discord-Server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
