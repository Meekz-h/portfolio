import {
  mobile,
  backend,
  creator,
  web,
  postgreSQL,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  carcar,
  tracker,
  caloriesplanner,
  luatsubachlan,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Design",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
];

const experiences = [];

const testimonials = [];

const projects = [
  {
    name: "CarCar",
    description: "Web application designed for auto sales and management.",
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
    description: "Web application that enables users to track tasks",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
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
      "Web applicaiton designed to help user's track their daily calories and achieve their goals",
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
  {
    name: "LuatSuBachlan",
    description: "Web application designed for legal cases in the vietnamese community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: luatsubachlan,
    source_code_link: "https://github.com/Meekz-h/luatsubachlan",
  },
];

export { services, technologies, experiences, testimonials, projects };
