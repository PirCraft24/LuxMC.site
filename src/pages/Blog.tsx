
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-10 bg-black relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/73971882-5e2f-4bf9-a85b-4296879189c4.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Blog</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Neuigkeiten, Updates und Geschichten aus der Welt von LuxMC
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((blog) => (
              <Card key={blog.id} className="mb-8 bg-black/80 border border-white/10 overflow-hidden hover:border-accent/40 transition-colors">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover brightness-125" 
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-3 mb-2 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {blog.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 glow-text">{blog.title}</h2>
                  <p className="text-gray-300 text-sm mb-4">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`}>
                    <Button size="sm" className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                      <span className="glow-text text-sm">Weiterlesen</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
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
