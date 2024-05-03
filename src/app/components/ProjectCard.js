import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover object-center rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <a href={project.demoLink} className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 hover:bg-indigo-700 transition duration-300 ease-in-out">Demo</a>
          <a href={project.codeLink} className="text-indigo-600 font-semibold hover:underline">View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
