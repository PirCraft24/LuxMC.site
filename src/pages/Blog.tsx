
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
            {blogPosts.map((blog) => (
              <Card key={blog.id} className="mb-12 bg-black/80 border border-white/10 overflow-hidden hover:border-accent/40 transition-colors">
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
                  <p className="text-gray-300 mb-6">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`}>
                    <Button className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                      <span className="glow-text">Weiterlesen</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
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
