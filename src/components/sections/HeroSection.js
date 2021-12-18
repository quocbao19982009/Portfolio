import React from "react";
import { Fade } from "react-reveal";

const HeroSection = () => {
  const animationCondition = window.innerWidth > 768 ? true : false;

  return (
    <Fade ssrFadeout bottom delay={300} distance="30px">
      <section id="hero" className="jumbotron">
        <div className="container">
          <Fade
            ssrFadeout
            delay={500}
            left={animationCondition}
            bottom={!animationCondition}
            distance="0px"
          >
            <h1 className="hero-title load-hidden">
              Hi, my name is <span className="text-color-main">Bao Nguyen</span>
              <br />
              I'm the Website Developer.
            </h1>
          </Fade>
          <Fade
            ssrFadeout
            left={animationCondition}
            bottom={!animationCondition}
            delay={1000}
            distance="30px"
          >
            <p className="hero-cta load-hidden">
              <a
                rel="noreferrer"
                className="cta-btn cta-btn--hero"
                href="#about"
              >
                Know more
              </a>
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default React.forwardRef(HeroSection);
