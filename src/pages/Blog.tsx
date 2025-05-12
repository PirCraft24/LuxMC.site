
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Unsere Geschichte",
      excerpt: "Wie aus einem Minecraft Realm ein echter Server wurde...",
      date: "15.05.2024",
      author: "PirCraft",
      content: (
        <>
          <p className="mb-4">
            Am Anfang waren wir einfach vier Freunde, die gemeinsam auf einem Minecraft Realm spielten. 
            Wir verbrachten unzählige Stunden damit, unsere Welten zu erkunden und gemeinsam zu bauen.
            Doch mit der Zeit wurde das Realm-Erlebnis für uns zunehmend einschränkend.
          </p>
          <p className="mb-4">
            Die Begrenzungen des Realms und der Wunsch nach mehr Möglichkeiten führten schließlich dazu, 
            dass wir uns entschieden, einen eigenen Server zu mieten. Diese Entscheidung eröffnete uns völlig 
            neue Möglichkeiten - endlich konnten wir eigene Plugins installieren, Spielmodi erstellen und 
            eine richtige Community aufbauen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <img 
              src="/lovable-uploads/c53e45df-2de1-41bc-a11a-65582190cea5.png" 
              alt="Minecraft Landschaft" 
              className="rounded-lg object-cover w-full h-60 brightness-125" 
            />
            <img 
              src="/lovable-uploads/7f138b44-9269-4282-a232-e4cbc559d145.png" 
              alt="Minecraft Konstruktion" 
              className="rounded-lg object-cover w-full h-60 brightness-125" 
            />
          </div>
          <p className="mb-4">
            So wurde LuxMC geboren - ein Projekt, das aus unserer Leidenschaft für Minecraft und dem Wunsch entstand, 
            eine besondere Spielerfahrung zu schaffen. Was als kleines Hobby begann, entwickelt sich nun zu einer 
            wachsenden Gemeinschaft von Spielern, die unsere Vision eines qualitativ hochwertigen und 
            kreativen Minecraft-Servers teilen.
          </p>
          <p>
            Wir sind begeistert, diese Reise fortzusetzen und freuen uns auf alle neuen Spieler, die sich uns anschließen werden. 
            Die Geschichte von LuxMC hat gerade erst begonnen, und wir können es kaum erwarten zu sehen, 
            wohin uns dieser Weg noch führen wird.
          </p>
        </>
      ),
      image: "/lovable-uploads/7f885c6e-53f8-4bb1-bd33-57912c486531.png"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/73971882-5e2f-4bf9-a85b-4296879189c4.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Blog</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Neuigkeiten, Updates und Geschichten aus der Welt von LuxMC
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {blogs.map((blog) => (
              <Card key={blog.id} className="mb-12 bg-black/80 border border-white/10 overflow-hidden">
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover brightness-125" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blog.author}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 glow-text">{blog.title}</h2>
                  <div className="text-gray-300 prose prose-invert max-w-none">
                    {blog.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
