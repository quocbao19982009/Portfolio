import React, { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNavHandler = () => {
    setNavOpen(!navOpen);
  };

  const classHeader = `${navOpen ? "nav-open" : ""} header`;
  return (
    <div className={classHeader}>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#cta">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <button class="btn-mobile-nav" onClick={openNavHandler}>
        <div className="icon-mobile-nav">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="icon-mobile-nav">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </button>
    </div>
  );
};

export default Header;
