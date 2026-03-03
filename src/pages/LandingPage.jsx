import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Hammer,
  ArrowRight,
  CheckCircle,
  Award,
  Shield,
  Clock,
  Users,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";
import CounterStat from "../components/common/CounterStat";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import { testimonials } from "../data/testimonialsData";
import AnimatedSection from "../components/common/AnimatedSection";

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background carousel images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600'
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: CheckCircle,
      title: "End-to-End Execution",
      description:
        "Complete project management from land acquisition to handover",
    },
    {
      icon: Shield,
      title: "Legal Transparency",
      description: "Clear documentation and complete regulatory compliance",
    },
    {
      icon: Award,
      title: "Quality Materials",
      description:
        "Premium materials with international standards certification",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "98% on-time completion rate across all projects",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Skyline Residency",
      category: "Ongoing",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      status: "60% Complete",
    },
    {
      id: 2,
      title: "Green Valley Villas",
      category: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      status: "Q2 2026",
    },
    {
      id: 3,
      title: "Ocean View Apartments",
      category: "Completed",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      status: "Delivered",
    },
    {
      id: 4,
      title: "Downtown Commercial",
      category: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      status: "75% Complete",
    },
  ];

  const stats = [
    { icon: Building2, value: "100+", label: "Projects Delivered" },
    { icon: Users, value: "500+", label: "Happy Families" },
    { icon: Award, value: "15+", label: "Years Excellence" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      {/* Hero Section with Carousel Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-0">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Deep Gradient Overlay - Bottom to Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-800/70 to-primary-600/40 z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-8 md:pt-0">
          <AnimatedSection animation="fade-down" delay={0}>
            <div className="mb-6 md:mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 md:px-8 py-2 md:py-3 border border-white/20 inline-block">
                <span className="text-grey-100 font-medium text-xs md:text-base">
                  Integrated Real Estate & Construction Solutions
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-elegant">
              <span className="text-grey-100">Building Tomorrow's</span>{' '}
              <span className="text-accent-500 font-light tracking-wide-elegant">Estates Today</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0}>
            <p className="text-xl md:text-2xl text-grey-400 mb-12 max-w-3xl mx-auto">
              Where visionary real estate meets expert construction - creating spaces that inspire, endure, and deliver exceptional value
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0}>
            <div className="flex flex-wrap gap-6 justify-center">
              <button
                onClick={() => navigate('/projects')}
                className="bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-10 py-4 rounded-[14px] font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-10 py-4 rounded-[14px] font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Consult Us
                <ArrowRight size={20} />
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Carousel Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-accent-500 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <SectionTitle 
                title="Who We Are"
                subtitle="Your Complete Real Estate & Construction Partner"
              />
              <p className="text-grey-400 text-lg leading-relaxed">
                Esate & Construct is a pioneering integrated real estate and construction company that brings together the best of both worlds. 
                We don't just build structures; we create communities. From land acquisition and legal clearances to architectural design, 
                construction, and handover - we manage every aspect of your project with precision, transparency, and unwavering commitment to quality.
              </p>
              <p className="text-grey-400 text-lg leading-relaxed">
                we are not defined by scale alone, but by intention. We create environments that feel calm, purposeful, and built to last—for people who value trust, design integrity, and meaningful spaces
              </p>
            </div>
          </AnimatedSection>

          {/* Stats */}
            <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
                <CounterStat
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
          </div>
              </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-primary-800/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <SectionTitle 
              title="Featured Projects"
              subtitle="Excellence in every development"
            />
          </AnimatedSection>

            <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
                <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:border-accent-500 transition-all hover:transform hover:scale-105">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-accent-500/20 text-accent-500 px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="text-grey-400 text-xs">{project.status}</span>
                    </div>
                    <h3 className="text-xl font-bold text-grey-100 mb-2">{project.title}</h3>
                    <button className="text-accent-500 hover:text-accent-400 transition flex items-center gap-2 text-sm font-medium">
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
            ))}
          </div>
            </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <SectionTitle 
              title="Why Choose Estate & Construct"
              subtitle="Unmatched expertise, uncompromising quality"
            />
          </AnimatedSection>

            <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-accent-500 transition-all group text-center  min-h-[240px]">
                  <feature.icon className="text-accent-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-xl font-bold mb-3 text-grey-100">{feature.title}</h3>
                  <p className="text-grey-400">{feature.description}</p>
                </div>
            ))}
          </div>
            </AnimatedSection>
        </div>
      </section>

      {/* BIG MODE SELECTOR */}
      <section className="py-32 bg-gradient-to-b from-primary-800/50 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600')] opacity-10 bg-cover bg-center"></div>

        <div className="container mx-auto px-4 relative z-10">

          <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grey-100">
              Choose Your Path
            </h2>
            <p className="text-xl text-grey-400">
              Explore our specialized services tailored to your needs
            </p>
          </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Real Estate Card */}
              <div
                onClick={() => navigate("/estate")}
                className="group relative bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-3xl p-12 hover:border-accent-500 transition-all duration-500 cursor-pointer hover:transform hover:scale-105 hover:bg-white/10"
              >
                <div className="absolute top-6 right-6">
                  <div className="bg-accent-500/20 p-3 rounded-full">
                    <Home className="text-accent-500" size={32} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold mb-4 text-grey-100 group-hover:text-accent-500 transition-colors">
                  Real Estate
                </h3>
                <p className="text-grey-400 text-lg mb-6">
                  Discover premium properties, luxury apartments, and investment
                  opportunities in prime locations
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-grey-300">
                    <CheckCircle size={20} className="text-accent-500" />
                    Residential Properties
                  </li>
                  <li className="flex items-center gap-3 text-grey-300">
                    <CheckCircle size={20} className="text-accent-500" />
                    Commercial Spaces
                  </li>
                  <li className="flex items-center gap-3 text-grey-300">
                    <CheckCircle size={20} className="text-accent-500" />
                    Investment Opportunities
                  </li>
                </ul>

                <div className="flex items-center gap-2 text-accent-500 font-semibold group-hover:gap-4 transition-all">
                  Explore Properties
                  <ArrowRight size={20} />
                </div>
              </div>

              {/* Construction Card */}
              <div
                onClick={() => navigate("/construction")}
                className="group relative bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-3xl p-12 hover:border-accent-500 transition-all duration-500 cursor-pointer hover:transform hover:scale-105 hover:bg-white/10"
              >
                <div className="absolute top-6 right-6">
                  <div className="bg-accent-500/20 p-3 rounded-full">
                    <Hammer className="text-accent-500" size={32} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold mb-4 text-grey-100 group-hover:text-accent-500 transition-colors">
                  Construction
                </h3>
                <p className="text-grey-400 text-lg mb-6">
                  Expert construction services for residential, commercial, and
                  industrial projects with guaranteed quality
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-grey-300">
                    <CheckCircle size={20} className="text-accent-500" />
                    Residential Construction
                  </li>
                  <li className="flex items-center gap-3 text-grey-300">
                    <CheckCircle size={20} className="text-accent-500" />
                    Commercial Projects
                  </li>
                  <li className="flex items-center gap-3 text-grey-300">
                    <CheckCircle size={20} className="text-accent-500" />
                    Renovation Services
                  </li>
                </ul>

                <div className="flex items-center gap-2 text-accent-500 font-semibold group-hover:gap-4 transition-all">
                  View Services
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor & Landowner CTA */}
      <section className="py-20 bg-primary-800/30">
      <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Landowner CTA */}
            <div className="bg-gradient-to-br from-accent-500/10 to-primary-700/10 backdrop-blur-md border border-accent-500/30 rounded-2xl p-10 text-center hover:border-accent-500 transition-all group">
              <Handshake
                className="text-accent-500 mx-auto mb-6 group-hover:scale-110 transition-transform"
                size={64}
              />
              <h3 className="text-3xl font-bold mb-4 text-grey-100">
                Own Land?
              </h3>
              <p className="text-grey-400 text-lg mb-8">
                Partner with us for joint development. We handle everything from
                planning to execution while you enjoy the returns.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-accent-500 hover:bg-accent-700 text-white px-8 py-3 rounded-[14px] font-semibold transition-all"
              >
                Partner With Us
              </button>
            </div>

            {/* Investor CTA */}
            <div className="bg-gradient-to-br from-accent-500/10 to-primary-700/10 backdrop-blur-md border border-accent-500/30 rounded-2xl p-10 text-center hover:border-accent-500 transition-all group">
              <TrendingUp
                className="text-accent-500 mx-auto mb-6 group-hover:scale-110 transition-transform"
                size={64}
              />
              <h3 className="text-3xl font-bold mb-4 text-grey-100">
                Looking to Invest?
              </h3>
              <p className="text-grey-400 text-lg mb-8">
                Explore lucrative investment opportunities in upcoming projects
                with guaranteed returns and transparent processes.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-accent-500 hover:bg-accent-700 text-white px-8 py-3 rounded-[14px] font-semibold transition-all"
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Trusted by hundreds of satisfied customers"
          />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
