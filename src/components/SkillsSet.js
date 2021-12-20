import React from "react";
import express from "../assets/skills/expressjs-icon.svg";
import html from "../assets/skills/html5-icon.svg";
import javascript from "../assets/skills/javascript-icon.svg";
import npm from "../assets/skills/npmjs-icon.svg";
import react from "../assets/skills/reactjs-icon.svg";
import git from "../assets/skills/git-scm-icon.svg";
import bootstrap from "../assets/skills/getbootstrap-icon.svg";
import sass from "../assets/skills/sass-lang-icon.svg";
import mongoDb from "../assets/skills/mongodb-icon.svg";
import css from "../assets/skills/css-icon.svg";
import nodejs from "../assets/skills/nodejs-icon.svg";
import vscode from "../assets/skills/vscode-icon.svg";
import redux from "../assets/skills/redux-icon.svg";
import jest from "../assets/skills/jest-icon.svg";

const SkillsSet = () => {
  return (
    <div className="skills container">
      <div className="skills__list ">
        <h3>Profient Technologies:</h3>
        <ul className="skills__list-grid">
          <li>
            <img src={html} alt="html" />
            <p>HTML</p>
          </li>
          <li>
            <img src={css} alt="css" />
            <p>CSS</p>
          </li>
          <li>
            <img src={javascript} alt="javascript" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={react} alt="react" />
            <p>React</p>
          </li>
          <li>
            <img src={npm} alt="npm" />
            <p>NPM</p>
          </li>
          <li>
            <img src={git} alt="git" />
            <p>Git</p>
          </li>
          <li>
            <img src={bootstrap} alt="bootstrap" />
            <p>Bootstrap</p>
          </li>
          <li>
            <img src={sass} alt="sass" />
            <p>Sass</p>
          </li>
          <li>
            <img src={redux} alt="redux" />
            <p>Redux</p>
          </li>
          <li>
            <img src={vscode} alt="vscode" />
            <p>VScode</p>
          </li>
        </ul>
      </div>
      <div className="skills__list ">
        <h3>Familiar with:</h3>
        <ul className="skills__list-grid">
          <li>
            <img src={nodejs} alt="nodejs" />
            <p>Node JS</p>
          </li>
          <li>
            <img src={express} alt="express" />
            <p>ExpressJS</p>
          </li>
          <li>
            <img src={mongoDb} alt="mongoDb" />
            <p>MongoDB</p>
          </li>
          <li>
            <img src={jest} alt="jest" />
            <p>Jest</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSet;
