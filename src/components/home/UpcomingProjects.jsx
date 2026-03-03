import React from 'react';
import { useMode } from '../../context/ModeContext';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../projects/ProjectCard';
import { estateProjects, constructProjects } from '../../data/estateData';
import { Calendar, TrendingUp } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const UpcomingProjects = () => {
  const { mode } = useMode();
  
  const upcomingEstateProjects = estateProjects.filter(p => p.status === 'Upcoming');
  const upcomingConstructProjects = constructProjects.filter(p => p.status === 'Upcoming');
  
  const projects = mode === 'estate' ? upcomingEstateProjects : upcomingConstructProjects;

  if (projects.length === 0) return null;

  const content = {
    estate: {
      title: 'Upcoming Properties',
      subtitle: 'Coming soon - Pre-booking available'
    },
    construct: {
      title: 'Upcoming Projects',
      subtitle: 'Future developments in planning'
    }
  };

  return (
    <section id="upcoming-projects" className="py-20 bg-primary-800/30">
      
      <div className="container mx-auto px-4">
        {/* Badge */}
        <AnimatedSection animation="fade-up">
        <div className="flex justify-center mb-8">
          <div className="bg-accent-600/20 backdrop-blur-md rounded-full px-6 py-2 border border-accent-600/30 inline-flex items-center gap-2">
            <TrendingUp size={20} className="text-accent-600" />
            <span className="text-accent-600 font-medium">Coming Soon</span>
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <SectionTitle 
          title={content[mode].title}
          subtitle={content[mode].subtitle}
        />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} mode={mode} />
          ))}
        </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up">
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
            <Calendar className="text-accent-600 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Get Early Access</h3>
            <p className="text-gray-300 mb-6">
              Register your interest and be the first to know about new launches
            </p>
            <button className="bg-accent-600/80 hover:bg-accent-600 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold transition-all border border-accent-500/30">
              Register Interest
            </button>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default UpcomingProjects;