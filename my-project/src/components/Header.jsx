import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
  return (
    <header className="fixed w-[1080px] md:w-full flex justify-between items-center p-4 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <ScrollLink to="home" className="hover:scale-110 text-2xl front-extrabold text-purple-500 transition duration-300">
        Ulrich Pineiro
      </ScrollLink>

      <nav className="hidden md:flex">
        <ScrollLink  to="home"
        smooth={true}
        duration={500}
        offset={-60}  className="mr-8 text-lg font-light text-white hover:text-red-500 border-transparent hover:underline">Home</ScrollLink>
        <ScrollLink  to="about"
        smooth={true}
        duration={500}
        offset={-60} className="mr-8 text-lg font-light text-white hover:text-red-500 border-transparent hover:underline">About me</ScrollLink>
        <ScrollLink  to="skills"
        smooth={true}
        duration={500}
        offset={-60} className="mr-8 text-lg font-light text-white hover:text-red-500 border-transparent hover:underline">Skills</ScrollLink>
        <ScrollLink  to="projects"
        smooth={true}
        duration={500}
        offset={-60} className="mr-8 text-lg font-light text-white hover:text-red-500 border-transparent hover:underline">Projects</ScrollLink>
        <ScrollLink  to="formations"
        smooth={true}
        duration={500}
        offset={-60} className="mr-8 text-lg font-light text-white hover:text-red-500 border-transparent hover:underline">Formations</ScrollLink>
        <ScrollLink  to="contact"
        smooth={true}
        duration={500}
        offset={-60} className="mr-8 text-lg font-light text-white hover:text-red-500 border-transparent hover:underline">Contact</ScrollLink>
      </nav>
    </header>
  );
};

export default Header;
