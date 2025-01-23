import React, { useState } from 'react';
import projimg1 from '../assets/Projimg/Proj1.png'; 
import "../App.css";

const projectData = [
  { name: 'Project 1', image: projimg1, tech: ['React', 'Tailwind'], link: '#', id: 1 },
  { name: 'Project 2', image: 'https://via.placeholder.com/200', tech: ['Node.js', 'Express'], link: '#', id: 2 },
  { name: 'Project 3', image: 'https://via.placeholder.com/200', tech: ['Vue', 'CSS'], link: '#', id: 3 },
  { name: 'Project 4', image: 'https://via.placeholder.com/200', tech: ['Next.js', 'Tailwind'], link: '#', id: 4 },
  { name: 'Project 5', image: 'https://via.placeholder.com/200', tech: ['React', 'Node'], link: '#', id: 5 },
];

const techColors = {
  'React': 'bg-blue-500',
  'Tailwind': 'bg-teal-500',
  'Node.js': 'bg-green-500',
  'Express': 'bg-gray-500',
  'Vue': 'bg-green-400',
  'CSS': 'bg-indigo-500',
  'Next.js': 'bg-black',
};

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className="bg-white p-10">
      <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProjects.map(project => (
          <div key={project.id} className="bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src={project.image} alt={project.name} className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="mb-4 flex flex-wrap">
              {project.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className={`${techColors[tech] || 'bg-gray-400'} text-white text-sm px-3 py-1 rounded-full mr-2 mb-2`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-blue-500 hover:text-blue-700">View Project</a>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setShowAll(!showAll)} 
        className="mt-6 mx-auto block bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transform hover:scale-105 transition-transform"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default Project;

