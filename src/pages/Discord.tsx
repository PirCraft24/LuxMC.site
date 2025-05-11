
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Discord = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Discord Server</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Tritt unserem Discord Server bei und bleibe mit der Community verbunden, auch wenn du nicht im Spiel bist.
          </p>
        </div>
      </section>

      {/* Discord Widget Section */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 glow-text">Tritt unserem Discord bei</h2>
                <p className="text-gray-300 mb-6">
                  Unser Discord-Server ist das Herz unserer Community. Hier kannst du:
                </p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Mit anderen Spielern chatten und Freundschaften schließen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Über anstehende Server-Events informiert bleiben</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Support bei Problemen oder Fragen erhalten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Deine Builds und Erfolge mit der Community teilen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>An regelmäßigen Discord-Events teilnehmen</span>
                  </li>
                </ul>
                <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752c4] text-white">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Discord beitreten
                  </Button>
                </a>
              </div>
              
              <div className="flex-1 bg-[#36393f] rounded-lg h-96 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-white text-lg font-semibold mb-2">LuxMC Discord</h3>
                  <p className="text-gray-300 mb-6">https://discord.gg/vwm5Mv93Ye</p>
                  <img 
                    src="/lovable-uploads/ecf35f30-076e-41b5-b3d6-2a82e618b65b.png" 
                    alt="LuxMC Logo" 
                    className="h-24 mx-auto mb-6" 
                  />
                  <p className="text-gray-400 text-sm">
                    Tritt unserem Discord bei, um mit der Community in Kontakt zu treten!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 glow-text text-center">Wir suchen dich!</h2>
          <Card className="bg-black/80 border border-white/10 overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-30">
                <Sparkles className="h-32 w-32 text-accent" />
              </div>
              <div>
                <p className="text-gray-300 mb-6 text-center">
                  LuxMC stellt gerade ein neues Team zusammen – sei dabei!
                </p>
                
                <div className="mb-8">
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
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 glow-text">Wir suchen aktuell:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Entwickler (für Coden, Webseiten usw.)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 glow-text">So bewirbst du dich:</h4>
                  <div className="flex items-center">
                    <MessageCircle className="text-accent mr-2" />
                    <p className="text-gray-300">
                      Eröffne ein Ticket auf unserem Discord und sende uns eine Auswahl deiner bisherigen Arbeiten. Wir freuen uns auf dich!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Discord Rules */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 glow-text text-center">Discord-Regeln</h2>
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold mb-6 glow-text text-center">📜 LuxMC Regeln</h3>
            
            <p className="mb-6 text-center text-gray-300">
              Diese Regeln gelten für den Discord wie auch für unseren Minecraft Server.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">§1 Allgemeines Verhalten</h4>
                <ul className="space-y-2 text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Seid respektvoll im Umgang miteinander. Unpassende oder kopierte Namen sind verboten und werden bestraft.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Diskriminierung, Beleidigungen, Rassismus oder toxisches Verhalten sind verboten.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Inhalte mit Gewalt, NSFW oder anderen unangemessenen Themen sind untersagt.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">§2 Spam & Pings</h4>
                <ul className="space-y-2 text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Spam jeder Art (z. B. Nachrichten, Emojis, CAPS) ist verboten.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Admins und Mods dürfen nicht grundlos gepingt werden.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">§3 Links & Werbung</h4>
                <ul className="space-y-2 text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Das Posten von Links ist nur in #⁠links erlaubt.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Fremdwerbung ist ohne ausdrückliche Erlaubnis verboten.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">§4 Channelnutzung</h4>
                <ul className="space-y-2 text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Nutze die Kanäle nur entsprechend ihres Zwecks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Unpassende Inhalte im falschen Channel werden gelöscht.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">§5 Datenschutz & Sicherheit</h4>
                <ul className="space-y-2 text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Gebt keine persönlichen Daten weiter – weder eure noch die von anderen.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Private Nachrichten mit Belästigung oder Scams sind sofort zu melden.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">§6 Verantwortung & Team</h4>
                <ul className="space-y-2 text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Jeder ist für seinen Account selbst verantwortlich.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Den Anweisungen des Teams ist Folge zu leisten.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">»</span>
                    <span>Das Team behält sich das Recht vor, User zu verwarnen oder zu bannen.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400">
              <p>Zusätzlich gelten die offiziellen Discord Guidelines sowie die Discord Terms of Service.</p>
              <p className="mt-4 text-sm">Regelwerk kann jederzeit angepasst werden – Letzter Stand: 25. April 2025</p>
              <p className="mt-4 text-xs">© 2023-2025 LuxMC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discord;
