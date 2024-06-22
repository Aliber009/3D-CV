// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  angular,
  flask,
  kube,
  next,
  python,
  spring,
  bnp,
  up,
  aba,
  sando,
  yassin,
  erwan,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Game Dev",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "NextJs",
    icon: next,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "kubernates",
    icon: kube,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "springboot",
    icon: spring,
  },
  {
    name: "angular",
    icon: angular,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Fullstack engineer",
    company_name: "BNP Paribas",
    icon: bnp,
    iconBg: "#383E56",
    date: "Oct-2023 - present",
    points: [
      "Developing and maintaining features and functionalities of intern Projects using Java Springboot and Angular",
      "Collaborating with cross-functional teams including Testers, product managers, and other international developers to provide high-quality releases.",
      "Implementing automated build and deployment processes with Jenkins to ensure continuous integration and delivery.",
      "Working in Agile teams, participating in sprints, stand-ups, and retrospectives to improve project outcomes",
    ],
  },
  {
    title: "Software engineer",
    company_name: "ABA technology",
    icon: aba,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Sep 2023",
    points: [
      "Head of dev team of research and maintenance",
      "Developement of IT solutions (full-stack)",
      "Digitalisation of clients systems",
      "Maintenance and monitoring of projects",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Upwork",
    icon: up,
    iconBg: "#383E56",
    date: "Jan 2020 - ",
    points: [
      "Top rated Badge",
      "Developing web projects and solutions using NodeJs/ReactJs",
      "Automatiion using Python selenium",
      "Python scripting to provide solutions for clients needs",
    ],
  },
  
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Ali adapts to new technologies with remarkable speed and consistently delivers effective solutions.",
    name: "Younes al'saddiq",
    designation: "techlead",
    company: "BNP",
    image: sando,
  },
  {
    testimonial:
      "Working with ali for 2years I noticed he quickly masters new technologies and excels at solving complex problems. His innovative solutions and quick learning ability significantly boost our development process.",
    name: "Yassine ouarrak",
    designation: "CTO",
    company: "ABA technology",
    image: yassin,
  },
  {
    testimonial:
      "Consistently demonstrates an exceptional blend of technical expertise and strategic thinking",
    name: "Erwan pelmoine",
    designation: "CEO",
    company: "flow Js",
    image: erwan,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Internal project",
    description:
      `Developing new functionalities to the project using Spring Boot (backend) and Angular (frontend).
       Creating and managing RESTful APIs for internal business processes.
       Utilizing OracleDB for efficient data management and data patches
       Automating build and deployment pipelines with Jenkins.
       Collaborating in an Agile team to deliver high-quality solutions.
      `,
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "jenkins",
        color: "pink-text-gradient",
      },
      {
        name: "oracleDB",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Fleet management project",
    description:
    `Backend Developement :
    => Vehicle management ,live Tracking, Route replay,
    allocation managament (hierarchical), Geofencing,
    notifications et reporting management
    micro-services :
    => Recorder: Data consumption via a Data logger
    (Rabbitmq) , recording of gps data (History), and
    the transmission in real time with webSockets .
    => Analyzer : Data cleaning, alert detection : speed
    excess, geofence entry and exit , temperature,
    engine state, batterie level , fuel …etc.
     `,
    tags: [
      {
        name: "nestJs",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "RabitMq",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
      {
        name: "Mongo/Postgres",
        color: "yellow-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Fleet detection with AI in Fuel stations",
    description:
    `Passengers Management Dashboard
    Developement of an image detection service with
    TensorFlow by locally made sensors in order to : Estimate
    the number of passengers having, stopped, utilized or
    passed through the station`,
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCv",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "bleu-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "Data- Center application",
    description:
    `Plateform for managing
    environmental sensors (temperature, humidité, CO2 ...etc ) :
     User management according to their privileges .
     Room Management :sensors placement and configuration
     Alert manegement.
     Manual and automatic alert detector configuration :
    Mix between logic and mathematic operators`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ReduxJs",
        color: "pink-text-gradient",
      },
      {
        name: "socketIO",
        color: "yellow-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "red-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cold- Chain plateform ",
    description:
    `Platform for monitoring vaccin transports
    and detecting alerts .
     User management
     Management of Ambulances
     Management of refrigirators (transporting the vaccine)
     Alert management by vaccine type
     Notification management`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socketIO",
        color: "green-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB/Redis",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
 
] as const;

export const SOCIALS = [
  
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ali-beroro-8a215716a/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Aliber009",
  },
] as const;
