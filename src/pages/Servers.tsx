
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Servers = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Unsere Server</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Erlebe Minecraft auf unseren speziell eingerichteten Servern. 
            Jeder Server bietet ein einzigartiges Spielerlebnis.
          </p>
        </div>
      </section>

      {/* Server Cards */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Survival Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1623937228271-992646fb0fba?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">Survival Server</CardTitle>
                <CardDescription className="text-gray-400">
                  IP: survival.example.com
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Unser Hauptserver mit einer großen offenen Welt. Baue, erkunde und überlebe 
                  zusammen mit anderen Spielern in einer freundlichen Umgebung.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.20.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>Survival</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schwierigkeit:</span>
                    <span>Normal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plugins:</span>
                    <span>20+</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20">
                  <span className="glow-text">Server beitreten</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Creative Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">Creative Server</CardTitle>
                <CardDescription className="text-gray-400">
                  IP: creative.example.com
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ein Ort für Baumeister und kreative Köpfe. Hier kannst du ohne Einschränkungen 
                  bauen und deine kreative Vision verwirklichen.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.20.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>Creative</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WorldEdit:</span>
                    <span>Aktiviert</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plot-System:</span>
                    <span>Ja</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20">
                  <span className="glow-text">Server beitreten</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Minigames Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">Minigames Server</CardTitle>
                <CardDescription className="text-gray-400">
                  IP: games.example.com
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Spiele eine Vielzahl von unterhaltsamen Minispielen mit Freunden und anderen 
                  Community-Mitgliedern. Von PvP bis zu kooperativen Spielen.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.19.2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodi:</span>
                    <span>Diverse</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spieler pro Spiel:</span>
                    <span>2-16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eigene Maps:</span>
                    <span>12+</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20">
                  <span className="glow-text">Server beitreten</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Server Rules */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 glow-text text-center">Server-Regeln</h2>
          <div className="glass-panel p-8">
            <ol className="list-decimal list-inside space-y-4 text-gray-300 pl-4">
              <li>Respektiert alle Spieler und seid freundlich zueinander.</li>
              <li>Griefing, Stehlen und Zerstören anderer Bauten ist verboten.</li>
              <li>Keine Beleidigungen, Hassrede oder unangemessene Diskussionen.</li>
              <li>Keine Spam- oder Werbebotschaften im Chat.</li>
              <li>Hacks, Cheats und unautorisierte Mods sind nicht erlaubt.</li>
              <li>Keine Ausnutzung von Server-Bugs oder -Exploits.</li>
              <li>Folge den Anweisungen der Moderatoren und Administratoren.</li>
              <li>Halte den Chat familienfreundlich und angemessen.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servers;
