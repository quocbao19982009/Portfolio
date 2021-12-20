import React from "react";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a
          aria-label="back to top"
          rel="noreferrer"
          href="#top"
          className="back-to-top"
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            aria-label="Bao's linkedin"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bao-nguyen-44ba20165/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            aria-label="Bao's linkedin"
            rel="noreferrer"
            href="https://github.com/quocbao19982009"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          2021 - Build by{" "}
          <a
            rel="noreferrer"
            href="https://github.com/quocbao19982009"
            target="_blank"
            aria-label="Bao's linkedin"
          >
            Bao Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
