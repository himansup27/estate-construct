import React from 'react';
import { useMode } from '../../context/ModeContext';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { estateProjects } from '../../data/estateData';
import { constructProjects } from '../../data/constructData';

const Projects = () => {
  const { mode } = useMode();
  const projects = mode === 'estate' ? estateProjects : constructProjects;

  const content = {
    estate: {
      title: 'Featured Properties',
      subtitle: 'Explore our premium residential offerings'
    },
    construct: {
      title: 'Our Projects',
      subtitle: 'Showcasing excellence in construction'
    }
  };

  return (
    <section id="projects" className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={content[mode].title}
          subtitle={content[mode].subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;