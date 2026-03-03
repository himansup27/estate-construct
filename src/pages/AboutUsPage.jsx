import React from 'react';
import { Award, Users, Building2, Target, Eye, Heart } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import CounterStat from '../components/common/CounterStat';
import AnimatedSection from '../components/common/AnimatedSection';

const AboutUsPage = () => {
  const stats = [
    { icon: Building2, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Target, value: '98%', label: 'Success Rate' }
  ];

  const team = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: '20+ years in real estate development'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Construction',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Expert in sustainable construction'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Award-winning architectural designer'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Specialized in luxury developments'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional real estate and construction solutions that exceed expectations and create lasting value for our clients.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted and innovative real estate and construction company, setting new standards of excellence in the industry.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, quality, innovation, and customer satisfaction are the cornerstones of everything we do.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/65 via-primary-700/75 to-primary-800/85 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-grey-400">About Estate & Construct</h1>
          <p className="text-xl md:text-2xl text-grey-400">
            Building dreams and creating spaces that inspire for over 15 years
          </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-primary-900">
        <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <CounterStat
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-primary-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
            <SectionTitle 
              title="Our Story"
              subtitle="From humble beginnings to industry leaders"
            />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 space-y-6 text-grey-400 leading-relaxed">
              <p>
                Founded in 2025, Estate & Construct began with a simple vision: to create exceptional spaces that enhance lives and communities. What started as a small team of passionate builders has grown into one of the region's most trusted real estate and construction companies.
              </p>
              <p>
                While the brand is young, its foundation is built on over five years of hands-on experience in the real estate and construction industry. Long before Estate & Construct took form, its leadership was deeply involved in planning, execution, and on-ground project delivery—gaining practical insight into what truly defines quality, longevity, and trust in development.Over these past years, we've worked and completed more than 60 projects, ranging from luxury residential apartments to large-scale commercial developments. Our commitment to quality, innovation, and customer satisfaction has earned us the trust of hundreds of clients and numerous industry appreciation.
              </p>
              <p>
                Today, we continue to push boundaries, embracing sustainable building practices and cutting-edge technology to deliver projects that stand the test of time. Every building we create is a testament to our dedication to excellence and our passion for transforming visions into reality. 
              </p>
              <p>
                Our story is still unfolding. Yet from its very beginning, Estate & Construct stands for building with intention, guided by experience, and committed to creating value that endures.
              </p>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">

          <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Our Foundation"
            subtitle="The principles that guide everything we do"
          />
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-accent-500 transition-all group"
              >
                <value.icon className="text-accent-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-grey-100">{value.title}</h3>
                <p className="text-grey-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-800/30">
        <div className="container mx-auto px-4">

          <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The experts behind your dream projects"
          />
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:border-accent-500 transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-grey-100">{member.name}</h3>
                  <p className="text-accent-500 font-medium mb-3">{member.role}</p>
                  <p className="text-grey-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;