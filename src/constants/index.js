import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  docker,
  carrent,
  jobit,
  carcar,
  tripguide,
  tracker,
  threejs,
  caloriesplanner,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

];

const testimonials = [

];

const projects = [
  {
    name: "CarCar",
    description:
      "Web application designed for auto sales and management",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carcar,
    source_code_link: "https://gitlab.com/micohernandez/car-car",
  },
  {
    name: "Tracker",
    description:
      "Web application that enables users to track tasks",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tracker,
    source_code_link: "https://gitlab.com/micohernandez/project-alpha-apr",
  },
  {
    name: "CaloriesPlanner",
    description:
      "An application designed to help user's track their daily calorie goals",
    tags: [
      {
        name: "react redux",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: caloriesplanner,
    source_code_link: "https://gitlab.com/dangaritaho/module3-project-gamma",
  },
];

export { services, technologies, experiences, testimonials, projects };
