import React, { useState } from "react";
import { Fade } from "react-reveal";
import resume from "../assets/Bao-Nguyen-Resume.pdf";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNavHandler = () => {
    setNavOpen(!navOpen);
  };

  const classHeader = `${navOpen ? "nav-open" : ""} header fixed-top`;
  return (
    <Fade ssrFadeout top delay={1500}>
      <div className={classHeader}>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li onClick={openNavHandler}>
              <a className="main-nav-link" href="#about">
                About Me
              </a>
            </li>
            <li onClick={openNavHandler}>
              <a className="main-nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li onClick={openNavHandler}>
              <a className="main-nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li onClick={openNavHandler}>
              <a className="main-nav-link nav-cta" href={resume}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <button
          aria-label="Navbar button"
          className="btn-mobile-nav"
          onClick={openNavHandler}
        >
          <div className="icon-mobile-nav">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="icon-mobile-nav">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </button>
      </div>
    </Fade>
  );
};

export default Header;
