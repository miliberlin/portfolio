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
        {/* <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
          <a className="navbar-item">Skillset</a>
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
