import React from "react";
import { Fade } from "react-reveal";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <Fade ssrFadeout distance="30px" delay={800} bottom>
          <div className="contact-wrapper load-hidden">
            <p className="contact-wrapper__text">
              Let's me buy you a cup of coffee. I'm always happy to meet and
              work with new people. Hit me up if you want to discuss about
              partnership, collaboration or just chat as friend.
            </p>
            <p className="email">
              <a
                className="contact-wrapper__text"
                href="mailto:quocbao19982009@gmail.com"
              >
                <i className="fas fa-envelope-square"></i>{" "}
                baonguyendev98@gmail.com
              </a>
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--resume"
              href="mailto:baonguyendev98@gmail.com"
            >
              Say Hello
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ContactSection;
