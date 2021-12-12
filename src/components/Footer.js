import React from "react";

const Footer = () => {
  return (
    <footer class="footer navbar-static-bottom">
      <div class="container">
        <a rel="noreferrer" href="#top" class="back-to-top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div class="social-links">
          <a rel="noreferrer" href="#!" target="_blank">
            <i class="fa fa-twitter fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i class="fa fa-linkedin fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i class="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p class="footer__text">
          © 2021 - Template developed by
          <a rel="noreferrer" href="https://github.com/cobidev" target="_blank">
            Jacobo Martínez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
