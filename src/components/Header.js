import React from 'react';
import logo from '../assets/pic.jpg';
const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      {/* Left side: Logo */}
      <div className="text-3xl font-bold">
        <img src={logo} alt="Logo" className="w-12 h-12"/>
      </div>

      {/* Centered: Navigation links */}
      <nav className="flex text-2xl space-x-6">
        <a href="#about" className="hover:text-green-500 hover:bg-gray-700 px-2 py-1 rounded-md hover:underline hover:underline-offset-4 transition-all">About</a>
        <a href="#skills" className="hover:text-orange-500 hover:bg-gray-700 px-2 py-1 rounded-md hover:underline hover:underline-offset-4 transition-all">Skills</a>
        <a href="#projects" className="hover:text-pink-500 hover:bg-gray-700 px-2 py-1 rounded-md hover:underline hover:underline-offset-4 transition-all">Projects</a>
        <a href="#contact" className="hover:text-sky-500 hover:bg-gray-700 px-2 py-1 rounded-md hover:underline hover:underline-offset-4 transition-all">Contact</a>
      </nav>

      {/* Right side: Social media icons */}
      <div className="flex space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <i className="fab fa-github"></i> {/* GitHub Icon */}
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <i className="fab fa-twitter"></i> {/* Twitter Icon */}
        </a>
      </div>
    </header>
  );
};

export default Header;
