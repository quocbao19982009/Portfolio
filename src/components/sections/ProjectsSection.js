import React from "react";
import projectsList from "../../assets/projectsList";
import ProjectDetails from "../ProjectDetails";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <h2 class="section-title dark-blue-text">Projects</h2>
          {projectsList.map((project) => (
            <ProjectDetails project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
