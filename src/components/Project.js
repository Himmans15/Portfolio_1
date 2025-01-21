import React, { useState } from 'react';

const projectData = [
  { name: 'Project 1', image: 'https://via.placeholder.com/200', tech: ['React', 'Tailwind'], link: '#', id: 1 },
  { name: 'Project 2', image: 'https://via.placeholder.com/200', tech: ['Node.js', 'Express'], link: '#', id: 2 },
  { name: 'Project 3', image: 'https://via.placeholder.com/200', tech: ['Vue', 'CSS'], link: '#', id: 3 },
  { name: 'Project 4', image: 'https://via.placeholder.com/200', tech: ['Next.js', 'Tailwind'], link: '#', id: 4 },
  { name: 'Project 5', image: 'https://via.placeholder.com/200', tech: ['React', 'Node'], link: '#', id: 5 },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className="bg-white p-10">
      <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProjects.map(project => (
          <div key={project.id} className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <img src={project.image} alt={project.name} className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="mb-4">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full mr-2">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setShowAll(!showAll)} 
        className="mt-6 mx-auto block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default Project;
