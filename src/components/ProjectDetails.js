import React from "react";
import Tilt from "react-parallax-tilt";

const ProjectDetails = ({ project }) => {
  const { title, description, image, source, live } = project;

  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <div>
            <p className="mb-4">{description}</p>
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
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image load-hidden">
          <a rel="noreferrer" href="#!" target="_blank">
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
      </div>
    </div>
  );
};

export default ProjectDetails;
