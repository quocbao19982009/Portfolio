import React from "react";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-reveal";
const ProjectDetails = ({ project }) => {
  const { title, description, image, source, live, note, technologies } =
    project;
  const animationCondition = window.innerWidth > 768 ? true : false;
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <Fade
          ssrFadeout
          delay={500}
          left={animationCondition}
          bottom={!animationCondition}
          distance="30px"
        >
          <div className="project-wrapper__text load-hidden">
            <h3 className="project-wrapper__text-title">{title}</h3>
            <div>
              <p className="mb-4">{description}</p>
              <p className="mb-4 note">{note}</p>
              <p className="mb-4">
                {technologies.map((tech) => {
                  return <span key={tech} className="tech">{`#${tech}`}</span>;
                })}
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--hero"
              href={live}
            >
              See Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn text-color-main"
              href={source}
            >
              Source Code
            </a>
          </div>
        </Fade>
      </div>
      <div className="col-lg-8 col-sm-12">
        <Fade
          ssrFadeout
          delay={1000}
          right={animationCondition}
          bottom={!animationCondition}
          distance="30px"
        >
          <div className="project-wrapper__image load-hidden">
            <a rel="noreferrer" href={live} target="_blank">
              <Tilt
                data-tilt
                tiltMaxAngleX="4"
                tiltMaxAngleY="4"
                glareEnable="true"
                glareMaxOpacity="0.5"
                className="thumbnail rounded js-tilt"
              >
                <img alt="Project" className="img-fluid" src={image} />
              </Tilt>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProjectDetails;
