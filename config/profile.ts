import { ExperiencePoint, ProjectPoint } from "@/types/experience"

export const EXPERIENCE_RESULTS_LIMIT = 3 // default number of experience jobs to be the rendered
export const EXPERIENCE_SKILLS_SEPARATOR = "•" // separator between skills
export const PROJECT_RESULTS_LIMIT = 4 // default number of experience jobs to be the rendered

export const profile = {
  name: "Sebastian Nunez",
  currentRole: "Software Engineering Intern",
  currentCompany: "JPMorgan Chase & Co.",
}

// NOTE: results will be order top to bottom: keep top 3 results near the top of the list.
export const experience: ExperiencePoint[] = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern",
    daterange: "Jun 2023 - Aug 2023",
    summary: [
      "Fullstack Software Engineering Intern under the Data Technology team (Data Pipelines)",
      "Efficiently extracting, processing, and delivering Big Data across the firm",
      "Collaborating with various teams to develop, ship and test resilient software",
    ],
    skills: [
      "Java",
      "React.js",
      "SpringBoot",
      "Kafka",
      "AWS",
      "Kubernetes",
      "Microservices",
      "Kanban",
    ],
    details: [
      "Utilizing Agile methodologies to enhance adaptability and flexibility",
    ],
  },
  {
    company: "Google",
    role: "Tech Exchange Scholar",
    daterange: "Jan 2023 - Jun 2023",
    summary: [
      "Completed accredited coursework and mentorship directly from Google engineers",
      "Developed expertise in the efficient usage of Data Structures & Algorithms",
      "Expanded my network through adequate collaboration and mentorship",
    ],
    skills: [
      "Applied Data Structures & Algorithms",
      "Product Management",
      "Careers in Tech",
    ],
    details: [],
  },
  {
    company: "INIT",
    role: "Web Developer",
    daterange: "Aug 2022 - Oct 2022",
    summary: [
      "Led the development of a fullstack Web Application to help students for technical roles",
      "Successfully embedded an efficient text editor, improving player retention by over 50%",
      "Worked on the integration of a secure backend server to handle thousands of requests",
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
    details: [],
  },
  {
    company: "AI4ALL",
    role: "Discover AI Fellow",
    daterange: "Jan 2023 - Apr 2023",
    summary: [
      "Collaborated on a Machine Learning project to infer song genres through data analysis",
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
    role: "Software Engineer",
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
    role: "Software Engineer Intern",
    daterange: "May 2019  -  Jun 2019",
    summary: [
      "Embedded software, UI design, and hardware for a fully Autonomous Greenhouse prototype",
      "Developed scripts that enabled real-time monitoring across the system",
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
]

export const projects: ProjectPoint[] = [
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
      "Steered the design and development of a responsive Web Application for a nonprofit",
    technologies:
      "JavaScript, React.js, UI/UX, Figma, Bootstrap, Kanban, GitHub",
    details: [
      "Created reusable components that increased development efficiency by 40%",
      "Designed a seamless and consistent user experience across mobile and desktop devices",
      "Utilized an Agile strategy to streamline development resulting in a 20% boost in productivity",
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
