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
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Example 1",
      icon: web,
    },
    {
      title: "Example 2 longgggggger",
      icon: mobile,
    },
    {
      title: "ex3",
      icon: backend,
    },
    {
      title: "Example 4",
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
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const projects = [
    {
      title: "Personal Site",
      tech: "React, Three.js, Render, Spline",
      icon: meta,
      iconBg: "#46B5FE",
      textBgColor: "#0A1835",
      date: "May 2023",
      points: [
        "Implemented an interactive and visually stunning personal website using React, leveraging its component-based architecture to create reusable UI elements and manage the website's state effectively.",
        "Employed spline-based animations, providing a visually engaging and intuitive user interface.",
        "Leveraged the Render platform to deploy and host the website, ensuring high performance, scalability, and reliable uptime, allowing visitors to access the website seamlessly.",
        "Utilized Three.js, a powerful JavaScript library for creating 3D graphics in the browser, to incorporate captivating and immersive 3D elements, enhancing the overall visual experience of the website.",
      ],
    },
    // Employed spline-based animations to create smooth and fluid transitions between sections of the website, providing a visually engaging and intuitive user interface.
    {
      title: "Queuing System | OuterEdge LA Hackathon",
      tech: "PostgreSQL, React, Express, NodeJS, Prisma, Render, REST, JWT Auth",
      icon: starbucks,
      iconBg: "#6666ff",
      textBgColor: "#000033",
      date: "March 2023",
      points: [
        "Collaborated with a team to design and integrate database schemas for a queuing system",
        "Developed frontend logic to ensure secure access control and redirect unauthorized and authorized users to appropriate page",
        "Implemented a user-friendly purchase page with concurrent user limits and a timer, optimizing system performance and user experience",
        "Developed frontend functionality to redirect users based on real-time backend data, enabling efficient and secure access to web application resources",
      ],
    },
    {
      title: "Interactive Game",
      tech: "PostgreSQL, Express, React, NodeJS, OpenAI, REST, JWT Auth",
      icon: tesla,
      iconBg: "#8071DF",
      textBgColor: "#241C31",
      date: "November 2022",
      points: [
        "Developed a text-based web game using the P.E.R.N. stack",
        "Implemented AI to handle storytelling",
        "Set up JWT with PostgreSQL to allow for multiple separate users",
        "Utilized PostgreSQL for temporary data to keep story coherent" ,     ],
    },
    {
      title: "Discord Monitor",
      tech: "Node Js, Forever, PM2, Discord.js",
      icon: shopify,
      iconBg: "#5C3EF0",
      textBgColor: "#13042A",
      date: "June 2022 - July 2022",
      points: [
        "Pulled data from websites and discord servers through API and processed data to specification",
        "Implement PM2 and Forever",
        "Maintained code as incoming data changes",
        "Utilized open source dependencies to pull data in real time",
      ],
    },
    {
      title: "Traffic Light Controller",
      tech: "C,  Assembly, MPLA",
      icon: meta,
      iconBg: "#DE3EF0",
      textBgColor: "#1B0220",
      date: "Mar 2022 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    
  ];
  
  const experiences = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };