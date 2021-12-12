import React from "react";

const ProjectDetails = ({ project }) => {
  const { title, description, image, source, live } = project;

  return (
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="project-wrapper__text load-hidden">
          <h3 class="project-wrapper__text-title">{title}</h3>
          <div>
            <p class="mb-4">{description}</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            class="cta-btn cta-btn--hero"
            href={live}
          >
            See Live
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            class="cta-btn text-color-main"
            href={source}
          >
            Source Code
          </a>
        </div>
      </div>
      <div class="col-lg-8 col-sm-12">
        <div class="project-wrapper__image load-hidden">
          <a rel="noreferrer" href="#!" target="_blank">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              class="thumbnail rounded js-tilt"
            >
              <img alt="Project Image" class="img-fluid" src={image} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
