// ===============================================
// src/pages/BlogDetailPage.jsx
// ===============================================
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would normally come from an API or data file
  // For now, we'll use a simple object mapping
  const blogPosts = {
    1: {
      id: 1,
      title: '10 Tips for First-Time Home Buyers',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
      category: 'Real Estate',
      author: 'Sarah Mitchell',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
      date: 'January 15, 2026',
      readTime: '5 min read',
      tags: ['Home Buying', 'Real Estate', 'Investment', 'Tips'],
      content: `
        <p class="lead">Buying your first home is one of the most significant financial decisions you'll ever make. It's an exciting milestone, but it can also be overwhelming if you're not prepared. Here are ten essential tips to help you navigate the home-buying process with confidence.</p>

        <h2>1. Understand Your Financial Situation</h2>
        <p>Before you start house hunting, take a comprehensive look at your finances. Calculate your monthly income, expenses, and existing debts. This will help you determine how much you can realistically afford to spend on a home. Remember to account for the down payment, closing costs, and ongoing expenses like property taxes, insurance, and maintenance.</p>

        <h2>2. Get Pre-Approved for a Mortgage</h2>
        <p>A pre-approval letter from a lender shows sellers that you're a serious buyer with the financial backing to make a purchase. This can give you a competitive edge in hot real estate markets. During pre-approval, lenders will verify your income, credit score, and financial history to determine how much they're willing to lend you.</p>

        <h2>3. Define Your Needs vs. Wants</h2>
        <p>Make two lists: one of must-haves (like number of bedrooms, location, or accessibility features) and another of nice-to-haves (like a pool or a large backyard). This will help you stay focused during your search and prevent you from getting distracted by properties that don't meet your essential criteria.</p>

        <h2>4. Research Neighborhoods Thoroughly</h2>
        <p>Visit potential neighborhoods at different times of the day and on weekends. Check out local amenities, schools, public transportation, and crime statistics. Talk to residents if possible. The right neighborhood can significantly impact your quality of life and the long-term value of your investment.</p>

        <h2>5. Don't Skip the Home Inspection</h2>
        <p>A professional home inspection can reveal hidden problems that might cost you thousands in repairs. Never waive this contingency, no matter how perfect the house seems. Issues like foundation problems, roof damage, or faulty electrical systems can be expensive to fix and may affect your decision to purchase.</p>

        <h2>6. Factor in Additional Costs</h2>
        <p>Beyond the down payment and monthly mortgage, budget for closing costs (typically 2-5% of the purchase price), property taxes, homeowners insurance, maintenance, and potential HOA fees. Many first-time buyers are surprised by these additional expenses, so plan accordingly.</p>

        <h2>7. Work with a Qualified Real Estate Agent</h2>
        <p>An experienced agent can guide you through the process, help you find properties that meet your criteria, and negotiate on your behalf. They have access to listings, market data, and professional networks that can make your search more efficient. Best of all, the buyer's agent commission is typically paid by the seller.</p>

        <h2>8. Be Patient and Don't Rush</h2>
        <p>The right home is worth waiting for. Don't let pressure from sellers, agents, or fear of missing out push you into a decision you're not comfortable with. It's better to take your time and find a property that truly meets your needs than to rush into a purchase you'll regret.</p>

        <h2>9. Understand All Contract Terms</h2>
        <p>Before signing anything, make sure you understand all terms and conditions. Don't hesitate to ask questions or consult with a real estate attorney. Pay special attention to contingencies, deadlines, and what happens if you need to back out of the deal.</p>

        <h2>10. Plan for the Future</h2>
        <p>Think about your long-term plans. Will this home still work for you in five or ten years? Consider potential life changes like growing family, career moves, or retirement. Also think about the property's resale potential – even if you plan to stay long-term, life can be unpredictable.</p>

        <h2>Conclusion</h2>
        <p>Buying your first home is a significant achievement that requires careful planning and consideration. By following these tips, you'll be better prepared to make informed decisions and find a home that meets your needs and fits your budget. Remember, the goal is not just to buy a house, but to find a place you can truly call home.</p>

        <p>If you're ready to start your home-buying journey, our team at Estate & Construct is here to help. Contact us today to explore our available properties and get expert guidance throughout the process.</p>
      `
    },
    2: {
      id: 2,
      title: 'Sustainable Construction: Building for the Future',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      category: 'Construction',
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      date: 'January 12, 2026',
      readTime: '7 min read',
      tags: ['Sustainability', 'Construction', 'Green Building', 'Environment'],
      content: `
        <p class="lead">The construction industry is undergoing a major transformation as sustainability becomes not just a trend, but a necessity. Modern construction practices are evolving to create buildings that are environmentally friendly, energy-efficient, and beneficial for both people and the planet.</p>

        <h2>The Importance of Sustainable Construction</h2>
        <p>Buildings account for nearly 40% of global energy consumption and carbon emissions. Sustainable construction addresses this by reducing environmental impact through efficient design, renewable materials, and innovative technologies. It's not just good for the environment – it also reduces operating costs and improves occupant health and comfort.</p>

        <h2>Key Principles of Green Building</h2>
        <p>Sustainable construction is built on several core principles: energy efficiency, water conservation, material selection, indoor environmental quality, and site sustainability. Each of these elements works together to create buildings that minimize environmental impact while maximizing performance and occupant wellbeing.</p>

        <h2>Energy-Efficient Design</h2>
        <p>Modern sustainable buildings use passive design strategies like optimal orientation, natural ventilation, and daylighting to reduce energy needs. High-performance insulation, energy-efficient windows, and smart building systems further minimize energy consumption. Solar panels and other renewable energy sources can make buildings net-zero or even energy-positive.</p>

        <h2>Sustainable Materials</h2>
        <p>The choice of building materials has a significant impact on a project's sustainability. Recycled materials, rapidly renewable resources like bamboo, and locally sourced materials reduce embodied carbon and transportation emissions. Low-VOC paints and finishes improve indoor air quality.</p>

        <h2>Water Conservation</h2>
        <p>Sustainable buildings incorporate water-saving fixtures, rainwater harvesting systems, and greywater recycling. Drought-resistant landscaping and permeable paving reduce water usage and manage stormwater runoff effectively.</p>

        <h2>The Future of Construction</h2>
        <p>As technology advances and environmental concerns grow, sustainable construction will become the standard rather than the exception. At Estate & Construct, we're committed to building a better future through responsible construction practices that benefit our clients, communities, and the planet.</p>
      `
    },
    3: {
      id: 3,
      title: 'Maximizing Small Spaces: Interior Design Tips',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200',
      category: 'Design',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
      date: 'January 10, 2026',
      readTime: '6 min read',
      tags: ['Interior Design', 'Small Spaces', 'Home Decor', 'Optimization'],
      content: `
        <p class="lead">Living in a small space doesn't mean sacrificing style or functionality. With smart design choices and creative solutions, you can make even the smallest apartment feel spacious, comfortable, and uniquely yours.</p>

        <h2>1. Use Multi-Functional Furniture</h2>
        <p>Invest in furniture that serves multiple purposes. A sofa bed for guests, an ottoman with storage, or a dining table that doubles as a workspace can significantly increase your space's functionality without adding clutter.</p>

        <h2>2. Embrace Vertical Space</h2>
        <p>When floor space is limited, look up! Wall-mounted shelves, tall bookcases, and hanging organizers make use of vertical space while keeping the floor clear. This creates a sense of openness while providing ample storage.</p>

        <h2>3. Choose Light Colors</h2>
        <p>Light, neutral colors make rooms feel larger and brighter. White, cream, and soft pastels reflect light and create an airy atmosphere. You can add pops of color through accessories that are easy to change.</p>

        <h2>4. Maximize Natural Light</h2>
        <p>Keep window treatments minimal to let in maximum natural light. Mirrors strategically placed across from windows can bounce light around the room and create the illusion of more space.</p>

        <h2>5. Create Zones</h2>
        <p>Even in a studio apartment, you can create distinct areas for sleeping, working, and relaxing. Use area rugs, room dividers, or furniture arrangement to define different zones without building walls.</p>

        <h2>Conclusion</h2>
        <p>Small space living requires thoughtful design, but with these strategies, you can create a home that feels spacious, organized, and perfectly suited to your lifestyle.</p>
      `
    },
    4: {
      id: 4,
      title: 'Real Estate Investment Strategies for 2026',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
      category: 'Investment',
      author: 'John Anderson',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
      date: 'January 8, 2026',
      readTime: '8 min read',
      tags: ['Investment', 'Real Estate', 'Finance', 'Strategy'],
      content: `
        <p class="lead">Real estate continues to be one of the most reliable investment vehicles for building wealth. As we move through 2026, understanding current market trends and employing smart strategies is crucial for success.</p>

        <h2>Understanding Market Cycles</h2>
        <p>Real estate markets move in cycles of expansion, peak, contraction, and recovery. Successful investors recognize these patterns and adjust their strategies accordingly. In 2026, many markets are showing signs of stabilization after recent volatility.</p>

        <h2>Diversification is Key</h2>
        <p>Don't put all your eggs in one basket. Consider diversifying across different property types (residential, commercial, industrial) and geographic locations to spread risk and maximize opportunities.</p>

        <h2>Focus on Cash Flow</h2>
        <p>Positive cash flow should be a priority. Properties that generate rental income exceeding expenses provide stability and passive income, even if appreciation is modest.</p>

        <h2>Location, Location, Location</h2>
        <p>This age-old advice remains true. Look for areas with strong job growth, good schools, infrastructure development, and population growth. These factors drive long-term property value appreciation.</p>

        <h2>Leverage Technology</h2>
        <p>Use data analytics, virtual tours, and digital marketing to make informed decisions and reach potential tenants or buyers more effectively.</p>

        <h2>Final Thoughts</h2>
        <p>Real estate investment requires patience, research, and strategic thinking. With the right approach, it can provide substantial returns and long-term financial security.</p>
      `
    },
    5: {
      id: 5,
      title: 'Smart Home Technology: The Future is Now',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      category: 'Technology',
      author: 'Sarah Mitchell',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
      date: 'January 5, 2026',
      readTime: '6 min read',
      tags: ['Smart Home', 'Technology', 'Automation', 'Innovation'],
      content: `
        <p class="lead">Smart home technology has evolved from a luxury to a standard feature in modern homes. From automated lighting to AI-powered security systems, these innovations are revolutionizing how we live.</p>

        <h2>What is a Smart Home?</h2>
        <p>A smart home uses internet-connected devices to enable remote monitoring and management of appliances and systems. These devices communicate with each other and can be controlled via smartphone, tablet, or voice commands.</p>

        <h2>Key Smart Home Technologies</h2>
        <p>Popular smart home features include intelligent thermostats that learn your preferences, automated lighting systems, smart locks and security cameras, voice-activated assistants, and connected appliances.</p>

        <h2>Benefits of Smart Home Technology</h2>
        <p>Smart homes offer increased convenience, enhanced security, energy efficiency, and cost savings. They also provide peace of mind through remote monitoring and can increase property value.</p>

        <h2>Getting Started</h2>
        <p>Start small with a smart speaker or thermostat, then gradually add devices as you become comfortable with the technology. Ensure all devices are compatible with your chosen ecosystem (Google, Amazon, Apple).</p>

        <h2>The Future</h2>
        <p>As AI and IoT technology advance, smart homes will become even more intuitive, predictive, and seamlessly integrated into our daily lives.</p>
      `
    },
    6: {
      id: 6,
      title: 'Construction Safety: Best Practices and Standards',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
      category: 'Construction',
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      date: 'January 3, 2026',
      readTime: '5 min read',
      tags: ['Safety', 'Construction', 'Best Practices', 'Standards'],
      content: `
        <p class="lead">Safety is paramount in construction. Every worker deserves to return home safely at the end of each day. Learn about the latest safety protocols, equipment, and training that protect workers on job sites.</p>

        <h2>The Importance of Safety Culture</h2>
        <p>A strong safety culture starts at the top. Management must prioritize safety, provide proper training, and ensure all workers have the necessary protective equipment and understand how to use it.</p>

        <h2>Essential Safety Equipment</h2>
        <p>Hard hats, safety glasses, high-visibility clothing, steel-toed boots, and fall protection equipment are non-negotiable on construction sites. Regular inspection and maintenance of this equipment is crucial.</p>

        <h2>Training and Education</h2>
        <p>Ongoing safety training keeps workers informed about best practices, new regulations, and emerging hazards. Toolbox talks and safety meetings should be regular occurrences.</p>

        <h2>Site Management</h2>
        <p>Proper site organization, clear signage, and regular inspections help prevent accidents. Keep work areas clean and well-lit, and ensure emergency procedures are clearly communicated.</p>

        <h2>Our Commitment</h2>
        <p>At Estate & Construct, safety isn't just a requirement – it's our top priority. We maintain rigorous safety standards on all our projects to protect our workers and ensure quality construction.</p>
      `
    }
  };

  // Get the blog post or show not found
  const post = blogPosts[id] || blogPosts[1];

  // Related posts (simple logic - just get other posts)
  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/80 via-primary-900/90 to-primary-900/95 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-accent-600/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-accent-500/30">
              {post.category}
            </span>
          </div>

          <AnimatedSection animation="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up">
          <div className="flex items-center justify-center gap-6 text-gray-300 flex-wrap">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Back Button & Share */}
      <section className="py-6 bg-primary-900 border-b border-primary-800/20">

      <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-gray-300 hover:text-accent-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>

            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm mr-2">Share:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-white/10 hover:bg-accent-600/80 backdrop-blur-md rounded-lg transition-colors border border-white/20"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-white/10 hover:bg-accent-600/80 backdrop-blur-md rounded-lg transition-colors border border-white/20"
                aria-label="Share on Twitter"
              >
                <Twitter size={20} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-white/10 hover:bg-accent-600/80 backdrop-blur-md rounded-lg transition-colors border border-white/20"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-primary-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Author Info */}
            <AnimatedSection animation="fade-up">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-12">
              <div className="flex items-center gap-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent-600"
                />
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-400 text-sm">Published on {post.date}</p>
                </div>
              </div>
            </div>
            </AnimatedSection>

            {/* Article Content */}
            <article className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-12">
            <AnimatedSection animation="fade-up">
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold prose-headings:mb-4
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-accent-600
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-white
                  prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline
                  prose-ul:text-gray-300 prose-li:mb-2
                  prose-lead:text-xl prose-lead:text-gray-200 prose-lead:mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              </AnimatedSection>
            </article>

            {/* Tags */}
            <AnimatedSection animation="fade-up">
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Tag size={20} className="text-accent-600" />
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm hover:border-accent-600 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Related Articles</h2>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up">
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:border-accent-600 transition-all hover:transform hover:scale-105"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="bg-accent-600/20 text-accent-600 px-3 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-accent-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking for your dream home or planning a construction project, we're here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => navigate('/contact')}
                className="bg-accent-600/80 hover:bg-accent-600 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold transition-all border border-accent-500/30"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20"
              >
                View Properties
              </button>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default BlogDetailPage;