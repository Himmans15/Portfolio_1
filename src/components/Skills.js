import React, { useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import profileImg from "../assets/profil.jpg";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 " /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const paragraph =
    "I'm a dedicated full-stack developer skilled in building responsive web applications using React, Node.js, and MongoDB. With a strong grasp of modern tools like Tailwind CSS and Git, I focus on writing clean, efficient code and delivering user-friendly digital experiences.";

  const shortParagraph = paragraph.slice(0, 160) + "...";

  return (
    <section
      id="skills"
      className="py-12 px-4 sm:px-6 lg:px-10 bg-white dark:bg-gray-900"
    >
      <h2 className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-green-500">
        Skills
      </h2>

      {/* md and up: Image + Text + Skills (side by side) */}
      <div className="hidden sm:flex flex-col sm:flex-row items-start gap-8">
        {/* Image on md+ screens */}
        <div className="hidden sm:flex w-full md:w-1/2 justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-60 h-60 object-cover rounded-lg "
          />
        </div>

        {/* Text + Skills */}
        <div className="w-full md:w-1/2 text-left">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {showMore ? paragraph : shortParagraph}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 dark:text-blue-400 hover:underline mb-6"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>

          {/* Skills Icons */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sm-only: Text left + Icons right */}
      <div className="sm:hidden flex flex-col gap-4">
        <div className="flex flex-row justify-between gap-4">
          {/* Text Left */}
          <div className="w-1/2 text-left">
            <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">
              {showMore ? paragraph : shortParagraph}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Icons Right */}
          <div className="w-1/2 flex flex-wrap justify-end gap-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-1 px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-100"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
