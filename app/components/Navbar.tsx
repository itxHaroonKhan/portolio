import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container mx-auto pt-10 px-6 h-20 w-full"> {/* Navbar ki height 20 aur width full */}
      <div className="flex justify-between items-center h-full">
        <div className="text-2xl font-medium">Haroon Rasheed</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-16">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-xl h-10 w-10" aria-label="Toggle menu">
          <IoMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
