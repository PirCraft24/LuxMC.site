
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

      {/* Server Status */}
      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 glow-text text-center">Server Status</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                  <span className="text-white">LuxAttack 1</span>
                </div>
                <span className="text-red-400">Offline</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                  <span className="text-white">LuxAttack 2</span>
                </div>
                <span className="text-red-400">Offline</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                  <span className="text-white">Lux-MC Economy</span>
                </div>
                <span className="text-yellow-400">Start am 11. Juli 2025</span>
              </div>
              
              <div className="mt-6 text-center text-gray-400 text-sm">
                IP-Adresse wird bald veröffentlicht
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* LuxAttack 1 Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('/lovable-uploads/4a6ca49e-3dde-43ba-81af-b474ef75de50.png')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">LuxAttack 1</CardTitle>
                <CardDescription className="text-gray-400">
                  PVP-Server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Unser PVP-orientierter Server mit actiongeladenen Kämpfen, speziellen Arenen 
                  und einzigartigen Spielmodi.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-red-400">Offline</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.20.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>PVP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maps:</span>
                    <span>5+</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20" disabled>
                  <span className="glow-text">Bald verfügbar</span>
                </Button>
              </CardFooter>
            </Card>

            {/* LuxAttack 2 Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('/lovable-uploads/fc452eb0-cc38-43fa-8699-aff5c4f6349a.png')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">LuxAttack 2</CardTitle>
                <CardDescription className="text-gray-400">
                  Mini-Games Server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Eine Sammlung von spannenden Minispielen für Einzelspieler und Teams.
                  Viel Abwechslung und Spaß garantiert!
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-red-400">Offline</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.20.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodi:</span>
                    <span>8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spieleranzahl:</span>
                    <span>2-16</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20" disabled>
                  <span className="glow-text">Bald verfügbar</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Lux-MC Economy Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('/lovable-uploads/723019e5-16c9-4269-af96-62d1ef70fb9e.png')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">Lux-MC Economy</CardTitle>
                <CardDescription className="text-gray-400">
                  Wirtschafts-Survival
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ein durchdachtes Wirtschaftssystem in einer Survival-Umgebung. Baue, handle, werde reich
                  und erschaffe dein eigenes Imperium!
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-yellow-400">Start am 11. Juli 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.20.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>Survival</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wirtschafts-Plugins:</span>
                    <span>10+</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20" disabled>
                  <span className="glow-text">Bald verfügbar</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Server Rules */}
      <section className="py-20 bg-black/95">
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
