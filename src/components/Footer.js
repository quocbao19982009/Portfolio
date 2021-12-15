import React from "react";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2021 - Template developed by{" "}
          <a
            rel="noreferrer"
            href="https://github.com/quocbao19982009"
            target="_blank"
          >
            Bao Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
