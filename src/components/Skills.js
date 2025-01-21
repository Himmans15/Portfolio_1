import React from 'react';

const skillsData = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🌐' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '💻' },
  { name: 'Pandas', icon: '📊' },
  { name: 'Numpy', icon: '🔢' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-200 p-10">
      <h2 className="text-4xl font-semibold text-center mb-8">Skills</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
          {skillsData.map((skill, index) => (
            <div key={index} className="text-center bg-white p-5 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
