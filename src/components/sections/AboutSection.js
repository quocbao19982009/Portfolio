import React from "react";
import profileImg from "./../../assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Bao Nguyen"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profileImg}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                This is where you can describe about yourself. The more you
                describe about yourself, the more chances you can!
              </p>
              <p className="about-wrapper__info-text">
                Extra Information about you! like hobbies and your goals.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="/#"
                  //   href="assets/resume.pdf"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
