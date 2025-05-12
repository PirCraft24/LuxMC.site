
import React from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: React.ReactNode;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Unsere Geschichte",
    excerpt: "Wie aus einem Minecraft Realm ein echter Server wurde...",
    date: "15.05.2024",
    author: "PirCraft",
    slug: "unsere-geschichte",
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

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
