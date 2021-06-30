import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Michelle Liebheit
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#projects">
            Projects
          </a>
          <a className="navbar-item" href="#skillset">
            Skillset
          </a>
          <a className="navbar-item" href="#about">
            About
          </a>
          <a
            className="navbar-item"
            href="https://www.linkedin.com/in/michelle-liebheit/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="navbar-item" href="https://github.com/miliberlin">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </nav>
  );
}
