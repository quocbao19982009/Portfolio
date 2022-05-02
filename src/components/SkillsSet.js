import React from "react";
import express from "../assets/skills/expressjs-icon.svg";
import react from "../assets/skills/reactjs-icon.svg";
import git from "../assets/skills/git-scm-icon.svg";
import sass from "../assets/skills/sass-lang-icon.svg";
import mongoDb from "../assets/skills/mongodb-icon.svg";
import nodejs from "../assets/skills/nodejs-icon.svg";
import redux from "../assets/skills/redux-icon.svg";
import jest from "../assets/skills/jest-icon.svg";
import typescript from "../assets/skills/typescript-icon.svg";
import postgresSql from "../assets/skills/postgresql.svg";
import github from "../assets/skills/github.svg";
import AWS from "../assets/skills/amazon-web-services.svg";
import mateiralUI from "../assets/skills/material-ui.svg";
import nestjs from "../assets/skills/nestjs.svg";
import docker from "../assets/skills/docker.svg";

const SkillsSet = () => {
  return (
    <>
      <div className="skills container row">
        <div className="skills__list col-md-12 col-sm-12">
          <h3>Favorite Frontend Technologies:</h3>
          <ul className="skills__list-grid">
            <li>
              <img src={typescript} alt="Typescript" />
              <p>Typescript</p>
            </li>
            <li>
              <img src={react} alt="react" />
              <p>React</p>
            </li>
            <li>
              <img src={mateiralUI} alt="Material UI" />
              <p>Material UI</p>
            </li>
            <li>
              <img src={sass} alt="SASS" />
              <p>SASS</p>
            </li>
            <li>
              <img src={redux} alt="redux" />
              <p>Redux</p>
            </li>
          </ul>
        </div>
        <div className="skills__list col-md-12 col-sm-12">
          <h3>Favorite Backend Technologies:</h3>
          <ul className="skills__list-grid">
            <li>
              <img src={nodejs} alt="nodejs" />
              <p>Node JS</p>
            </li>
            <li>
              <img src={express} alt="express" />
              <p>Express JS</p>
            </li>
            <li>
              <img src={nestjs} alt="nestjs" />
              <p>Nest JS</p>
            </li>
            <li>
              <img src={mongoDb} alt="mongoDb" />
              <p>MongoDB</p>
            </li>
            <li>
              <img src={postgresSql} alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </li>
          </ul>
        </div>
        <div className="skills__list col-md-12 col-sm-12">
          <h3>Favorite DevOps Technologies:</h3>
          <ul className="skills__list-grid">
            <li>
              <img src={git} alt="git" />
              <p>Git</p>
            </li>
            <li>
              <img src={jest} alt="jest" />
              <p>Jest</p>
            </li>
            <li>
              <img src={github} alt="github" />
              <p>Github Action</p>
            </li>
            <li>
              <img src={docker} alt="docker" />
              <p>Docker</p>
            </li>
            <li>
              <img src={AWS} alt="Amazon Web Service" />
              <p>Amazon Web Service</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsSet;
