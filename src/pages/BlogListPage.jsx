import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedSection from '../components/common/AnimatedSection';

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for First-Time Home Buyers',
      excerpt: 'Buying your first home is an exciting milestone. Here are essential tips to help you navigate the process with confidence and make the best decision.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      category: 'Real Estate',
      author: 'Sarah Mitchell',
      date: 'Jan 15, 2026',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Sustainable Construction: Building for the Future',
      excerpt: 'Explore how modern construction practices are evolving to create environmentally friendly, energy-efficient buildings that benefit both people and planet.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      category: 'Construction',
      author: 'Michael Chen',
      date: 'Jan 12, 2026',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces: Interior Design Tips',
      excerpt: 'Learn professional techniques to make small apartments feel spacious, functional, and stylish without compromising on comfort or aesthetics.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      category: 'Design',
      author: 'Emily Rodriguez',
      date: 'Jan 10, 2026',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Real Estate Investment Strategies for 2026',
      excerpt: 'Discover the latest trends and strategies in real estate investment, including market analysis, risk management, and portfolio diversification.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      category: 'Investment',
      author: 'John Anderson',
      date: 'Jan 8, 2026',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Smart Home Technology: The Future is Now',
      excerpt: 'From automated lighting to AI-powered security systems, discover how smart home technology is revolutionizing modern living.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Technology',
      author: 'Sarah Mitchell',
      date: 'Jan 5, 2026',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Construction Safety: Best Practices and Standards',
      excerpt: 'Safety is paramount in construction. Learn about the latest safety protocols, equipment, and training that protect workers on job sites.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      category: 'Construction',
      author: 'Michael Chen',
      date: 'Jan 3, 2026',
      readTime: '5 min read'
    }
  ];

  const categories = ['all', 'Real Estate', 'Construction', 'Design', 'Investment', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/60 via-primary-900/90 to-primary-900/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600" 
          alt="Blog" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">

          <AnimatedSection animation="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Insights, tips, and updates from the world of real estate and construction
          </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-primary-900">
        <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:border-accent-600 focus:outline-none transition text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-3 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all backdrop-blur-md ${
                    selectedCategory === category
                      ? 'bg-accent-600/80 text-white border border-accent-500/30'
                      : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-primary-800/30">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <AnimatedSection animation="fade-up">
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No articles found matching your criteria.</p>
            </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection animation="fade-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:border-accent-600 transition-all hover:transform hover:scale-105"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="bg-accent-600/20 text-accent-600 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-accent-600 font-medium group-hover:gap-4 transition-all">
                      Read More <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;