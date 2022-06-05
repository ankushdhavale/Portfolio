import React from "react";
import "./Header.css";
import {Link} from "react-scroll";

function Header() {
  return (
    <>
      <div className="header">
      <a className="toggle-button">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </a>
        <div className="pgLinkContainer">
          
          <Link to="home" spy={true} smooth={true} offset={50} duration={700} className="pgLinks" href="#">
            Home
          </Link>
          <Link to="about"  spy={true} smooth={true} offset={50} duration={700} className="pgLinks" href="#about">
            About{" "}
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={700} className="pgLinks" href="#skills">
            Skills
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={700} className="pgLinks" href="#projects">
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={700} className="pgLinks" href="#contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
