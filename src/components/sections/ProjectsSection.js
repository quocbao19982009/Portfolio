import React from "react";
import projectsList from "../../assets/projectsList";
import ProjectDetails from "../ProjectDetails";
import Background from "../Background";
const ProjectsSection = () => {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>
            {projectsList.map((project) => (
              <ProjectDetails key={project.key} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
