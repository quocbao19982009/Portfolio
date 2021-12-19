import projectImage from "./project.jpg";
import gamercorner from "./projects/gamerscorner.png";
import devseeker from "./projects/devseeker.png";
import netflix from "./projects/netflix.png";

const projectsList = [
  {
    title: "Gamers Corner",
    key: "1",
    description:
      "An E-commerce application where users can browse and make purchases with items. This is a collaboration project in which Bao Nguyen is the main front-end developer. The project was made with MERN Stack Bootstrap 5, Redux, Paypal integration.",
    image: gamercorner,
    note: "The main aim of the project is to practice and learn a full-function e-commerce site using React Js.",
    source: "https://github.com/quocbao19982009/GamersCorner",
    live: "https://gamerscornerapp.herokuapp.com/",
    technologies: ["React", "Restful API", "Redux", "Bootstrap"],
  },
  {
    title: "DevSeeker",
    key: "2",
    description:
      "This is a social media page made with MERN Stack using the latest technologies such as React-router-dom v6, Redux Toolkits, CSS Module. The backend uses JSON web token for user authentication, gravatar for user's profile image, and crypts for hashing the password. ",
    image: devseeker,
    note: "Understanding backend is important for a front-end developer so this project was made to practice creating simple backend applications where RESTFUL API was implemented.",
    source: "https://github.com/quocbao19982009/DevSeeker",
    live: "https://devseekerapp.herokuapp.com/",
    technologies: ["React", "Node Js", "MongoDB", "Express Js"],
    // technologies: ["React", "Restful API", "Redux", "Bootstrap"],
  },
  {
    title: "Netflix Clone",
    key: "3",
    description:
      "A simple Netflix clone using React and API from The Movie Database (TMDB) where users can see movie info.",
    image: netflix,
    source: "https://github.com/quocbao19982009/Netflix-Clone",
    live: "https://netflix-clone-cec3f.firebaseapp.com/",
    technologies: ["React", "CSS Module", "Axios", "React Hook"],
  },
];

export default projectsList;
