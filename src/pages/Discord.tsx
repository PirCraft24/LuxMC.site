
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

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
                <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752c4] text-white">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Discord beitreten
                </Button>
              </div>
              
              <div className="flex-1 bg-[#36393f] rounded-lg h-96 flex items-center justify-center">
                {/* Dies würde normalerweise ein eingebettetes Discord Widget sein */}
                <div className="text-center">
                  <p className="text-white mb-2">Discord Widget</p>
                  <p className="text-gray-400 text-sm">
                    (Hier würde das eingebettete Discord-Widget angezeigt werden)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Features */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 glow-text text-center">Discord Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Spezialisierte Kanäle</h3>
              <p className="text-gray-300">
                Eigene Kanäle für verschiedene Server, Build-Showcases, Support und mehr.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Server-Integration</h3>
              <p className="text-gray-300">
                Sehe, wer online ist und kommuniziere mit Spielern auf dem Server direkt über Discord.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Musik-Bot</h3>
              <p className="text-gray-300">
                Höre Musik in den Voice-Channels während du mit deinen Freunden spielst.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Event-Ankündigungen</h3>
              <p className="text-gray-300">
                Verpasse keine Events mehr dank automatischer Benachrichtigungen.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Support-Tickets</h3>
              <p className="text-gray-300">
                Erstelle private Support-Tickets für Hilfe bei Problemen oder Fragen.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 glow-text">Rollen-System</h3>
              <p className="text-gray-300">
                Verdiene dir Rollen basierend auf deiner Aktivität und deinem Beitrag zur Community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Rules */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 glow-text text-center">Discord-Regeln</h2>
          <div className="glass-panel p-8">
            <ol className="list-decimal list-inside space-y-4 text-gray-300 pl-4">
              <li>Respektiere alle Mitglieder. Keine Beleidigungen oder Belästigungen.</li>
              <li>Keine NSFW-Inhalte. Halte den Server familienfreundlich.</li>
              <li>Kein Spam oder übermäßiges Senden von Nachrichten.</li>
              <li>Keine Werbung für andere Server ohne Erlaubnis.</li>
              <li>Verwende die richtigen Kanäle für deine Nachrichten.</li>
              <li>Keine politischen oder kontroversen Diskussionen.</li>
              <li>Befolge die Anweisungen der Moderatoren.</li>
              <li>Melde unangemessenes Verhalten an die Moderatoren.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discord;
