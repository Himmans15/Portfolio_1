import React, { useState } from "react";
import { projectData, techColors } from "./ProjectData";
import "../App.css";

const categories = ["All", "Web Development", "Data Science"];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((proj) => proj.category === selectedCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="bg-white p-10">
      <h2 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-green-500">
        PROJECTS
      </h2>
      <hr className="mb-6" />
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-6 mx-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="mb-4 flex flex-wrap justify-evenly">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`${
                    techColors[tech] || "bg-gray-400"
                  } text-white text-xs px-3 py-1 rounded-full mr-1 mb-2`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center rounded-lg px-4 py-1 mt-auto bg-blue-600 hover:scale-110 transition-all ease-in-out duration-300">
              <a
                href={project.link}
                className="text-white text-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Show More / Less */}
      {filteredProjects.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 mx-auto block bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transform hover:scale-105 transition-transform"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
      5
    </section>
  );
};

export default Project;
