import React, { useState } from "react";
import NavLink from "./Navlink/NavLink";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  
  let [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded((prevState) => (expanded = !prevState));
  };

  const hideNavbar = () => {
    setExpanded(false);
  };

  const navLinksState = expanded ? " expanded" : "";

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="navbar__content content-container-fluid">
        <button
          className="navbar__menu"
          onClick={toggleNavbar}
          aria-label="Toggle nav bar"
        >
          <MdMenu />
        </button>
        <div className={`navbar-links${navLinksState}`}>
          <NavLink link="#home" hide={hideNavbar}>
            Home
          </NavLink>
          <NavLink link="#about" hide={hideNavbar}>
            About
          </NavLink>
          <NavLink link="/#skills" hide={hideNavbar}>
            Skills
          </NavLink>
          <NavLink link="/#projects" hide={hideNavbar}>
            Projects
          </NavLink>
          <NavLink link="/#contact" hide={hideNavbar}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
