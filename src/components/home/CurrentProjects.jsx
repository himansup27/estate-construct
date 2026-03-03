import React from 'react';
import { useMode } from '../../context/ModeContext';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../projects/ProjectCard';
import { estateProjects, constructProjects } from '../../data/estateData';
import AnimatedSection from '../common/AnimatedSection';

const CurrentProjects = () => {
  const { mode } = useMode();
  
  const currentEstateProjects = estateProjects.filter(p => p.status === 'Available');
  const currentConstructProjects = constructProjects.filter(p => p.status === 'Ongoing' || p.status === 'Completed');
  
  const projects = mode === 'estate' ? currentEstateProjects : currentConstructProjects;

  const content = {
    estate: {
      title: 'Current Properties',
      subtitle: 'Ready to move in - Available now'
    },
    construct: {
      title: 'Current Projects',
      subtitle: 'Ongoing and recently completed projects'
    }
  };

  return (
    <section id="current-projects" className="py-20 bg-primary-900">
      <AnimatedSection animation="fade-up">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={content[mode].title}
          subtitle={content[mode].subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} mode={mode} />
          ))}
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default CurrentProjects;