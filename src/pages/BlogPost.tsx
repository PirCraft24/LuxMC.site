
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = getBlogPostBySlug(id || "");
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  // Get next post for navigation
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section with Image */}
      <section className="h-80 md:h-96 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover brightness-90" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 glow-text">{post.title}</h1>
            <div className="flex justify-center gap-6 mb-4 text-sm text-gray-300">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="mb-12 bg-black/80 border border-white/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-gray-300 prose prose-invert max-w-none">
                  {post.content}
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation */}
            <div className="flex justify-between mb-12">
              <div>
                {prevPost && (
                  <Link to={`/blog/${prevPost.slug}`}>
                    <Button variant="outline" className="bg-white/5">
                      ← Vorheriger Beitrag
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                {nextPost && (
                  <Link to={`/blog/${nextPost.slug}`}>
                    <Button variant="outline" className="bg-white/5">
                      Nächster Beitrag →
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            
            {/* Back to all posts */}
            <div className="text-center mb-12">
              <Link to="/blog">
                <Button className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20">
                  <span className="glow-text">Alle Beiträge anzeigen</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
