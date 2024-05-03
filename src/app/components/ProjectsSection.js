import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <section id='projects' className="bg-gray-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center  mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
