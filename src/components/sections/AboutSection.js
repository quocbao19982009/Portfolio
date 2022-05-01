import React, { useState } from "react";

import profileImg from "./../../assets/profile.jpg";
import catImg from "./../../assets/cam.jpg";
import { Fade } from "react-reveal";
import SkillsSet from "../SkillsSet";
import resume from "../../assets/Bao-Nguyen-Resume.pdf";

const AboutSection = () => {
  const animationCondition = window.innerWidth > 768 ? true : false;

  const [catImageShow, setCatImageShow] = useState(false);

  console.log(catImageShow);

  const baoImage = (
    <img
      alt="Bao Nguyen"
      className={`img-fluid rounded shadow-lg ${catImageShow ? `hidden` : ``}`}
      height="400px"
      width="300px"
      src={profileImg}
    />
  );

  const catImage = (
    <img
      alt="Bao's Cat"
      className={`img-fluid rounded shadow-lg ${catImageShow ? `` : `hidden`}`}
      height="400px"
      width="300px"
      src={catImg}
    />
  );

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <Fade ssrFadeout delay={600} left distance="30px">
              <div className="about-wrapper__image load-hidden">
                {baoImage}
                {catImage}
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
                  that live on the internet. I am an ambitious Fullstack web
                  developer and a self-driven student for new tech and skills.
                </p>
                <p className="about-wrapper__info-text">
                  I started coding when I was at the university and I fell in
                  love with it ever since. My journey included a lot of
                  self-studying, reading documentations, and creating projects.
                  Now, after all the hard work, I can confidently say that I am
                  a competent Fullstack Web Developer!
                </p>
                <p className="about-wrapper__info-text">
                  Other than coding, I spend my free time with
                  <i
                    onMouseEnter={() => setCatImageShow(true)}
                    onMouseLeave={() => setCatImageShow(false)}
                    className="mycat"
                  >
                    {" "}
                    Cam
                  </i>{" "}
                  or hanging with friends. I also enjoy cooking, traveling, and
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
