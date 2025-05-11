
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Diamond, Download, Sparkles } from 'lucide-react';

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
                <span className="text-red-400">Beendet</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                  <span className="text-white">LuxAttack 2</span>
                </div>
                <span className="text-red-400">Beendet</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                  <span className="text-white">LuxMC Economy</span>
                </div>
                <span className="text-yellow-400">Start am 11. Juli 2025</span>
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
              <div className="h-48 bg-[url('/lovable-uploads/0dbd8a78-0e5e-4b7f-ad61-5d9ac7509932.png')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">LuxAttack 1</CardTitle>
                <CardDescription className="text-gray-400">
                  CraftAttack-Server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Unser CraftAttack-orientierter Server mit speziellen Arenen und einzigartigen 
                  Spielmodi. Dieser Server ist jetzt beendet, aber als Download verfügbar!
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-red-400">Beendet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.21.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>CraftAttack</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a href="https://shorturl.at/NP6EQ" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20">
                    <Download className="mr-2 h-4 w-4" />
                    <span className="glow-text">Download</span>
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* LuxAttack 2 Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('/lovable-uploads/014d25f5-16b0-4e37-adf5-26551e614d15.png')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">LuxAttack 2</CardTitle>
                <CardDescription className="text-gray-400">
                  CraftAttack-Server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Die verbesserte Version unseres CraftAttack-Servers mit mehr Features und optimierter Performance.
                  Dieser Server ist jetzt beendet.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-red-400">Beendet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span>1.21.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>CraftAttack</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20" disabled>
                  <span className="text-red-400">Abgebrochen</span>
                </Button>
              </CardFooter>
            </Card>

            {/* LuxMC Economy Server */}
            <Card className="glass-panel overflow-hidden border-white/10">
              <div className="h-48 bg-[url('/lovable-uploads/53cc1368-5c96-4d4e-ac52-1c7c7a0b9c2c.png')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle className="glow-text">LuxMC Economy</CardTitle>
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
                    <span>1.21.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spielmodus:</span>
                    <span>Survival</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PvP:</span>
                    <span>Nein</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/10 backdrop-blur hover:bg-white/20" disabled>
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span className="glow-text">Bald verfügbar</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* More Server Images */}
      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 glow-text text-center">Server Impressionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/lovable-uploads/3b9a358c-978d-448c-bcf9-f9423ecbf123.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/21088e98-dffc-4a09-9444-4de28c805478.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/f05e2558-4559-4e9e-8c77-ec8ca08f2e5b.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
            <img src="/lovable-uploads/e6f089f2-3c23-4217-8bc5-d2b116ccb2aa.png" alt="Minecraft Scene" className="rounded-lg hover:scale-105 transition-all duration-300 w-full h-48 object-cover brightness-125" />
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
