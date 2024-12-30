import { ExperiencePoint, ProjectPoint } from "@/types/experience"

import { siteConfig } from "./site"

export const EXPERIENCE_RESULTS_LIMIT = 6 // default number of experience jobs to be the rendered
export const EXPERIENCE_SKILLS_SEPARATOR = "•" // separator between skills
export const PROJECT_RESULTS_LIMIT = 4 // default number of experience jobs to be the rendered

export const profile = {
  name: "Sebastian Nunez",
  currentRole: "Software Engineer",
  currentCompany: "Google",
}

// NOTE: results will be order top to bottom: keep top 3 results near the top of the list.
export const experience: ExperiencePoint[] = [
  {
    company: "Google",
    role: "Software Engineer",
    daterange: "Feb 2024 - Present",
    summary: ["Fullstack development"],
    skills: [],
    details: [],
  },
  {
    company: "Google",
    role: "Software Engineer (Intern)",
    daterange: "May 2024 - Aug 2024",
    summary: [
      "Launced a web application that allows engineers to intuitively gain insights into their nonlinear and pipelined releases within a single, unifed UI experience across CI/CD at Google",
      "Developed features to visualize release phase dependency trees, view live version data within phases, access release blockers, change list inclusion filters, estimate schedule of promotion, and more.",
    ],
    skills: [
      "Java",
      "TypeScript",
      "Golang",
      "Angular",
      "Material UI",
      "gRPC",
      "Microservices",
      "CI/CD",
    ],
    details: [],
  },
  {
    company: "UKG",
    role: "Software Engineer (Intern)",
    daterange: "Jan 2024 - Apr 2024",
    summary: [
      "Part of the Quality Automation Value Stream",
      "Providing the tooling and infrastructure to support the product teams' testing capabilities using microservices, reports, and dashboards",
      "Migrated various internal web applications to Spotify's Backstage platform",
      "Automated build pipelines using GitHub Actions to off-board from legacy Team City builds",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "React.js",
      "NestJS",
      "Material UI",
      "Jest",
      "GCP",
      "MongoDB",
    ],
    details: [],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer (Intern)",
    daterange: "Jun 2023 - Aug 2023",
    summary: [
      "Developed a microservice to parse, store, and filter thousands of events from data streams",
      "Deployed a frontend interface to allow simplified access to the pipeline events",
      "Configured cost-efficient, auto-scaling to handle up to 50,000 events per day",
      // "Implemented robust Unit and Integration Tests with an outstanding 98% code coverage",
    ],
    skills: [
      "Java",
      "React.js",
      "SpringBoot",
      "Kafka",
      "AWS",
      "JIRA",
      "Microservices",
      "Kanban",
      "CI/CD",
    ],
    details: [
      "Utilizing Agile methodologies to enhance adaptability and flexibility",
    ],
  },
  {
    company: "Google",
    role: "Tech Exchange Program (Co-op)",
    daterange: "Jan 2023 - Jun 2023",
    summary: [
      "Completed accredited coursework and mentorship directly from Google engineers",
      "Developed expertise in the efficient usage of Data Structures & Algorithms",
      "Gained unique insights into Google's engineering practices and culture",
    ],
    skills: [
      "Applied Data Structures & Algorithms",
      "Product Management",
      "Careers in Tech",
    ],
    details: [
      "Collaborated with a diverse and talented network of peers across the United States",
    ],
  },
  {
    company: "INIT",
    role: "Web Developer (Apprentice)",
    daterange: "Aug 2022 - Oct 2022",
    summary: [
      "Led the development of a fullstack Web Application to help students for technical roles",
      "Successfully embedded an efficient text editor, improving player retention by over 50%",
      "Engineered the integration of a secure backend server to handle thousands of requests",
    ],
    skills: [
      "TypeScript",
      "Python",
      "React.js",
      "TailwindCSS",
      "Flask",
      "PostgreSQL",
      "Docker",
      "Scrum",
    ],
    details: [
      "Implemented indexing, query optimizations, and proxy caching decreasing server latency by 30%",
    ],
  },
  {
    company: "AI4ALL",
    role: "Machine Learning Fellow",
    daterange: "Jan 2023 - Apr 2023",
    summary: [
      "Developed a Machine Learning model to infer song genres through parameter analysis",
      "Learned about AI applications/fundamental concepts (supervised learning, neural networks)",
      "Researched the ethical implications of data processing and AI implementation on our society",
    ],
    skills: [
      "Python",
      "Artificial Intelligence",
      "Scikit-Learn",
      "Jupyter Notebooks",
      "Pandas",
    ],
    details: [],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer (Code Jam)",
    daterange: "Nov 2022 - Dec 2022",
    summary: [
      "Steered the design and development of a responsive Web Application for a nonprofit",
      "Created reusable components that increased development efficiency by 40%",
      "Designed a seamless and consistent user experience across mobile and desktop devices",
    ],
    skills: [
      "JavaScript",
      "React.js",
      "TailwindCSS",
      "Bootstrap",
      "Figma",
      "Kanban",
      "GitHub",
    ],
    details: [],
  },

  {
    company: "Rockwell Automation",
    role: "Software Engineer (Shadow)",
    daterange: "May 2019  -  Jun 2019",
    summary: [
      "Embedded software, UI design, and hardware for a fully Autonomous Greenhouse prototype",
      "Developed scripts that enabled real-time monitoring across the system",
      "Designed a seamless and consistent user experience across mobile and desktop devices",
    ],
    skills: [
      "Python",
      "GUI Automation",
      "UI/UX",
      "Object-Oriented Programming",
      "Bash",
      "Unix",
      "Figma",
    ],
    details: [],
  },
]

export const projects: ProjectPoint[] = [
  {
    title: "Sockify",
    summary:
      "A two-sided, e-commerce platform designed for small business owners to sell custom socks",
    technologies: "Golang, TypeScript, React.js, PostgresSQL, Stripe",
    details: [
      "Fullstack platform with customer and admin facing UIs. APIs are completely documented using Swagger",
      "Customers are able to browse, add to cart, and securely checkout using Stripe",
      "Admins can fully manage all inventory and orders. Website is fully responsive on mobile and desktop",
    ],
    link: "https://github.com/sockify/sockify",
  },
  {
    title: "StockPulse",
    summary:
      "An efficient and intuitive inventory management application designed for e-commerce businesses",
    technologies: "JavaScript, React.js, Node.js, Express, PostgresSQL",
    details: [
      "Complete CRUD functionality: browse, filter, search for products, tags and categories",
      "Users are able to securely login via OAuth 2.0 and GitHub",
      "End-to-end data validation, error handling, and loading states. Website is fully responsive on mobile and desktop",
    ],
    link: "https://github.com/sebastian-nunez/stock-pulse",
  },
  {
    title: "YouPlay",
    summary:
      "A streamlined music streaming service to track playlists and songs based on the user's current mood",
    technologies: "Swift, SwiftUI, Firebase, Spotify SDK",
    details: [
      "Users are able to manage playlists, search for songs, and view their recent searches with the ability to play songs on-demand",
      "Complete authentication flow and profile picture file upload to Firebase Storage",
      "Sleek UI design completed with custom loading and empty content states to create a seamless experience",
    ],
    link: siteConfig.links.youplay,
  },
  {
    title: "Portfolio Website",
    summary:
      "Created a responsive, component-based architecture for maximum flexibility and code reusability ",
    technologies: "TypeScript, React.js, TailwindCSS, Jest, RadixUI",
    details: [
      "Designed with accessibility at the forefront, following the latest WAI-ARIA standards",
      "Implemented light and dark themes to accommodate modern user expectations",
      'Devised loading "skeletons" and other animations for smooth, hassle-free navigation',
    ],
    link: "https://github.com/sebastian-nunez/portfolio-nextjs",
  },
  {
    title: "MLB Insights App",
    summary:
      "Developed an intuitive Web App that allows baseball fans to view the statistics of MLB players through an interface with a search engine",
    technologies: "Python, Streamlit, Pandas",
    details: [
      "Achieved a significant reduction in development time by utilizing external APIs",
      "Increased user engagement by 75% through interactive widgets, charts, and tables",
      "Enhanced the user experience for new users by integrating tooltips and user-input validation",
    ],
    link: "https://github.com/sebastian-nunez/mlb-insights",
  },
  {
    title: "T3 Web App",
    summary:
      "Steered the design and development of a responsive Web Application for a non-profit partner",
    technologies:
      "JavaScript, React.js, UI/UX, Figma, Bootstrap, Kanban, GitHub",
    details: [
      "Created modular, reusable UI components leading to a 40% increase in development efficiency",
      "Mocked server data in order to deliver the infrastructure needed to populate web pages dynamically",
      "Developed a seamless, unified, and responsive User Experience across mobile and desktop devices",
    ],
    link: "",
  },
  {
    title: "Emotion Detector",
    summary:
      "Developed an application that utilizes Artificial Intelligence to choose an emoji based on a picture of the user's face, accurately capturing their facial expression",
    technologies: "Deep Learning, Python, PyTorch",
    details: [
      "Connected with my peers to develop a product from an idea, leveraging effective collaboration and communication skills",
      "Conducted research and experimentation to identify the most effective Deep Learning model",
      "Designed an interface that enables users to snap a picture of their face, which is subsequently analyzed by the AI model",
    ],
    link: "https://colab.research.google.com/drive/13zpVZk-emQnJqjK4I8bEAehDeG_rwIO8",
  },

  {
    title: "Bookstore REST API",
    summary:
      "Devised the Backend services and functionality for an Online Bookstore while utilizing the Scrum framework",
    technologies: "Node.js, Express, MongoDB, Scum",
    details: [
      "Assembled a scalable cloud database while including data validation to ensure stability and reliability",
      "Performed weekly Code Reviews and Team Standups to maximize productivity and synchronization",
      "Implemented the Model-View-Controller (MVC) architecture to enhance the flexibility and maintainability of the codebase",
    ],
    link: "https://github.com/Sejalnh/GeekText-Group16",
  },
  {
    title: "Attendance Forecaster",
    summary:
      "Teamed on a Machine Learning model to predict workshop attendance with a minimum accuracy of 80%",
    technologies: " Machine Learning, Python, SciKit-Learn",
    details: [
      "Teamed on a Machine Learning model to predict workshop attendance with a minimum accuracy of 80%",
      "Analyzed historical attendance data and external factors to build a predictive model",
      "Utilized various Machine Learning tools and technologies to create a scalable and reliable prediction model",
    ],
    link: "https://colab.research.google.com/drive/1v4qe8LVDYIy9pjGCiQy0Ld05n63N29Vl",
  },
  {
    title: "Spotify Song Analyzer",
    summary:
      "Collaborated on a Machine Learning project to infer song genres based on parameters analysis",
    technologies: "Machine Learning, Python, SciKit-Learn",
    details: [
      "Improve model performance through selective data cleaning and processing techniques ",
      "Conducted thorough research and testing to select the most suitable model for our data ",
      "Fine-tuned hyperparameters to achieve optimal model performance with minimal training time",
    ],
    link: "https://colab.research.google.com/drive/186ybPlaHhcHlNhuoaEl86AnLJO0omNdM",
  },
  {
    title: "Streaming Platform API",
    summary:
      "Collaborated on a Machine Learning project to infer song genres based on parameters analysis",
    technologies: "Java, SpringBoot, H3 Database, JPA, O.O.P.",
    details: [
      "Utilized Java and Object Oriented Programming to create and structure class hierarchies, interfaces, and Abstract Data Types to scalability",
      "Created comprehensive Unit Tests to ensure the quality and reliability of the software product",
      "Created the documentation to aid the operation of the various services offered by the API",
    ],
    link: "",
  },
]
