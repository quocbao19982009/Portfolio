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
            <img src={html} alt="" srcset="" />
            <p>HTML</p>
          </li>
          <li>
            <img src={css} alt="" srcset="" />
            <p>CSS</p>
          </li>
          <li>
            <img src={javascript} alt="" srcset="" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={react} alt="" srcset="" />
            <p>React</p>
          </li>
          <li>
            <img src={npm} alt="" srcset="" />
            <p>NPM</p>
          </li>
          <li>
            <img src={git} alt="" srcset="" />
            <p>Git</p>
          </li>
          <li>
            <img src={bootstrap} alt="" srcset="" />
            <p>Bootstrap</p>
          </li>
          <li>
            <img src={sass} alt="" srcset="" />
            <p>Sass</p>
          </li>
          <li>
            <img src={redux} alt="" srcset="" />
            <p>Redux</p>
          </li>
          <li>
            <img src={vscode} alt="" srcset="" />
            <p>VScode</p>
          </li>
        </ul>
      </div>
      <div className="skills__list ">
        <h3>Familiar with:</h3>
        <ul className="skills__list-grid">
          <li>
            <img src={nodejs} alt="" srcset="" />
            <p>Node JS</p>
          </li>
          <li>
            <img src={express} alt="" srcset="" />
            <p>ExpressJS</p>
          </li>
          <li>
            <img src={mongoDb} alt="" srcset="" />
            <p>MongoDB</p>
          </li>
          <li>
            <img src={jest} alt="" srcset="" />
            <p>Jest</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSet;
