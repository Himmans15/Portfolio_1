import React, { useState } from "react";
import logo from "../assets/pngt.png";
import menuIcon from "../assets/nav/menuIcon.png";
import closeIcon from "../assets/nav/closeIcon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center p-5 bg-gray-800 text-white relative">
      {/* Hamburger Menu (for mobile view) */}
      <div
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt={menuOpen ? "Close menu" : "Open menu"}
        />
      </div>

      {/* Centered: Logo */}
      <div className="flex items-center mx-auto">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
        <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500 mb-4">
          Himans Bhardwaj
        </h4>
      </div>

      {/* Centered: Navigation links */}
      <nav
        className={`flex items-center text-2xl space-x-6 flex-grow justify-center md:flex  ${
          menuOpen ? "hidden" : "hidden"
        } `}
      >
        <a
          href="#about"
          className="hover:text-green-500 hover:bg-gray-700 px-3 py-2 rounded-md transition-all"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-orange-500 hover:bg-gray-700 px-3 py-2 rounded-md transition-all"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-pink-500 hover:bg-gray-700 px-3 py-2 rounded-md transition-all"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-sky-500 hover:bg-gray-700 px-3 py-2 rounded-md transition-all"
        >
          Contact
        </a>
      </nav>

      {/* Right side: Social media icons */}
      <div className=" md:flex sm:flex space-x-6 ml-auto">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400 transform transition duration-200 ease-in-out hover:scale-110"
        >
          <i className="fab fa-github"></i> {/* GitHub Icon */}
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400 transform transition duration-200 ease-in-out hover:scale-110"
        >
          <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400 transform transition duration-200 ease-in-out hover:scale-110"
        >
          <i className="fab fa-twitter"></i> {/* Twitter Icon */}
        </a>
      </div>

      {/* Hamburger Menu Dropdown (for mobile view) */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col items-center gap-3 rounded-lg bg-gradient-to-b from-[#a5a7e666] to-[rgb(25,55,107)] p-2 shadow-md absolute top-[65px] left-8 right-21 mt-2 md:hidden w-[95px]  max-w-full`}
      >
        <a
          href="#about"
          className="text-xl  hover:border-b-2 hover:border-orange-300 px-2 py-1 rounded-md transition-all"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-xl hover:border-b-2 hover:border-orange-300 px-2 py-1 rounded-md transition-all"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-xl hover:border-b-2 hover:border-orange-300 px-2 py-1 rounded-md transition-all"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-xl hover:border-b-2 hover:border-orange-300 px-2 py-1 rounded-md transition-all"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
