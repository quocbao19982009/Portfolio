import React from "react";
import profileImg from "./../../assets/profile.jpg";
import { Fade } from "react-reveal";
import SkillsSet from "../SkillsSet";
import resume from "../../assets/Bao-Nguyen-Resume.pdf";

const AboutSection = () => {
  const animationCondition = window.innerWidth > 768 ? true : false;

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <Fade ssrFadeout delay={600} left distance="30px">
              <div className="about-wrapper__image load-hidden">
                <img
                  alt="Bao Nguyen"
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src={profileImg}
                />
              </div>
            </Fade>
          </div>
          <div className="col-md-6 col-sm-12">
            <Fade
              ssrFadeout
              delay={1000}
              right={animationCondition}
              bottom={!animationCondition}
              distance="30px"
            >
              <div className="about-wrapper__info load-hidden">
                <p className="about-wrapper__info-text">
                  Hello there! My name is Bao Nguyen and I enjoy creating things
                  that live on the internet. I am an ambitious front-end web
                  developer and a self-driven student for new tech and skills.
                </p>
                <p className="about-wrapper__info-text">
                  Other than coding, I spend my free time playing Video Games or
                  hanging with friends. I also enjoy cooking, traveling, and
                  learning.
                </p>

                <span className="d-flex mt-3">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <Fade ssrFadeout delay={1500} bottom distance="30px">
          <SkillsSet />
        </Fade>
      </div>
    </section>
  );
};

export default AboutSection;
