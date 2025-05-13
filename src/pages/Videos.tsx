
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  type: 'tutorial' | 'trailer';
}

const videoData: VideoItem[] = [
  {
    id: 'J5SL9Lw8vC0',
    title: 'LuxMC Economy - Server Trailer',
    description: 'Entdecke unseren neuen Economy-Server mit spannenden Features und einer aktiven Community.',
    type: 'trailer'
  },
  {
    id: 'Y6JV5IR1mCQ',
    title: 'LuxMC Survival - Tutorial für Anfänger',
    description: 'In diesem Tutorial zeigen wir dir, wie du auf unserem Server startest und was dich alles erwartet.',
    type: 'tutorial'
  },
  {
    id: 'jZTxylUQdwM',
    title: 'LuxAttack 2 - Die besten Momente',
    description: 'Schau dir die besten Momente von unserem beliebten LuxAttack 2 Server an.',
    type: 'trailer'
  },
  {
    id: 'uqdEQPJ9FT4',
    title: 'Item-Shop Tutorial - So funktioniert\'s',
    description: 'Lerne, wie du den Item-Shop auf unserem Economy-Server optimal nutzen kannst.',
    type: 'tutorial'
  }
];

const Videos = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Unsere Videos</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Schau dir unsere Tutorials und Trailer an, um mehr über unsere Server zu erfahren.
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Trailer Section */}
            <h2 className="text-3xl font-bold mb-8 glow-text">Server Trailer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {videoData.filter(video => video.type === 'trailer').map(video => (
                <div key={video.id} className="glass-panel overflow-hidden">
                  <div className="w-full">
                    <AspectRatio ratio={16/9}>
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="border-0"
                      ></iframe>
                    </AspectRatio>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 glow-text">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tutorials Section */}
            <h2 className="text-3xl font-bold mb-8 glow-text">Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoData.filter(video => video.type === 'tutorial').map(video => (
                <div key={video.id} className="glass-panel overflow-hidden">
                  <div className="w-full">
                    <AspectRatio ratio={16/9}>
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="border-0"
                      ></iframe>
                    </AspectRatio>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 glow-text">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Videos CTA */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-panel p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 glow-text">Dein Video hier?</h2>
            <p className="text-gray-300 mb-6">
              Hast du ein eigenes Video zu unseren Servern erstellt? Wir freuen uns über deine Kreationen!
              Teile dein Video mit uns auf Discord, und vielleicht wird es hier mit aufgenommen.
            </p>
            <a href="https://discord.gg/vwm5Mv93Ye" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-white transition-colors">
              <span className="glow-text">Zum Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
