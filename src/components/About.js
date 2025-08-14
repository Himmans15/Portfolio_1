import React from "react";
import profile from "../assets/profil.jpg";
import resume from "../assets/resume/Himanshu_bhardwaj_resume.pdf";
const About = () => {
  return (
    <section
      id="about"
      className="flex items-center my-auto p-10 bg-gray-100 flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2  p-5 flex justify-center">
        <img
          src={profile}
          alt="Profile pic of Himans Bhardwaj"
          className="w-32 md:w-48 lg:w-64 h-auto max-w-full rounded-full object-cover shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="w-full md:w-1/2 p-5">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-4">
          Himans Bhardwaj
        </h1>
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          I'm a Software Developer
        </h2>
        <p className="text-lg mb-6  text-gray-700">
          I'm passionate about building interactive applications. I have a
          strong foundation in Web dev technologies.
        </p>

        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com"
            className="text-gray-600 hover:text-black text-3xl transform transition duration-200 ease-in-out hover:scale-110"
          >
            <i className="fab fa-github"></i> {/* GitHub Icon */}
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-gray-600 hover:text-pink-600 text-3xl transform transition duration-200 ease-in-out hover:scale-110"
          >
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-blue-600 text-3xl transform transition duration-200 ease-in-out hover:scale-110"
          >
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
        </div>

        <div className="flex items-center mt-8">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
