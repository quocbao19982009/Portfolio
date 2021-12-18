import projectImage from "./project.jpg";
import gamercorner from "./projects/gamerscorner.png";
import devseeker from "./projects/devseeker.png";
import netflix from "./projects/netflix.png";

const projectsList = [
  {
    title: "Gamers Corner",
    key: "1",
    description:
      "An E-commerce application where user can brower and make purchase with item. This is a collaboration project which Bao Nguyen is the main front-end developer. The project was made with MERN Stack Bootstrap 5, Redux, Paypal intergration.",
    image: gamercorner,
    note: "The main aim of the project is to pratice and learn a fully function e-commerce site using React Js.",
    source: "https://github.com/quocbao19982009/GamersCorner",
    live: "https://gamerscornerapp.herokuapp.com/",
    technologies: "React, Restful API, Redux, Bootstrap.",
  },
  {
    title: "DevSeeker",
    key: "2",
    description:
      "This is a social media page made with MERN Stack using the lastest technologies such as React-router-dom v6, Redux Toolkits, CSS Module. Backend use jsonwebtoken for user authenication, gravatar for user's profile image and brcyptjs for hashing password. ",
    image: devseeker,
    note: "Understanding backend is important for a front-end developer so this project was made to pratice creating simple backend application where RESTFUL API was implemented.",
    source: "https://github.com/quocbao19982009/DevSeeker",
    live: "https://devseekerapp.herokuapp.com/",
    technologies: [
      "React, NodeJS, Express, MongoDB, Rest API, Redux Toolkits, CSS Module.",
    ],
  },
  {
    title: "Netflix Clone",
    key: "3",
    description:
      "A simple Netflix clone using React and API from The Movie Database (TMDB) where user can see movie's info.",
    image: netflix,
    source: "https://github.com/quocbao19982009/Netflix-Clone",
    live: "https://netflix-clone-cec3f.firebaseapp.com/",
    technologies: "React, CSS Module, Axios, Context Hook.",
  },
];

export default projectsList;
