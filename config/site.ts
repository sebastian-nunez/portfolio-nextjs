import { ExperienceCardProps } from "@/components/experience-card"

export type SiteConfig = typeof siteConfig
export const EXPERIENCE_RESULTS_LIMIT = 3 // default number of experience jobs to be the rendered

export const experience: ExperienceCardProps[] = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern",
    daterange: "Jun 2023 - Aug 2023",
    summary: [
      "Fullstack Software Engineering Intern under the Data Technology team (Data Pipelines)",
      "Efficiently extracting, processing, and delivering Big Data across the firm",
      "Collaborating with various teams to develop, ship and test resilient software",
    ],
    technologies:
      "Java, React.js, SpringBoot, Kafka, AWS, Microservices, Kanban",
    details: [],
  },
  {
    company: "Google",
    role: "Tech Exchange Scholar",
    daterange: "Jan 2023 - Jun 2023",
    summary: [
      "Completed accredited coursework and mentorship directly from Google engineers",
      "Developed expertise in the efficient usage of Data Structures & Algorithms within Technical Interviews",
      "Expanded my network through adequate collaboration and mentorship",
    ],
    technologies:
      "Applied Data Structures & Algorithms, Product Management, Software Development and Careers in Tech",
    details: [],
  },
]

export const siteConfig = {
  name: "Sebastian Nunez",
  description:
    "Sebastian Nunez - Software Engineering Intern at JPMorgan Chase & Co. Google Tech Exchange Scholar. Computer Science student at Florida International University (Dec 2024)",
  url: "https://www.sebastian-nunez.com/",
  profile: {
    currentRole: "Software Engineering Intern",
    currentCompany: "JPMorgan Chase & Co.",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Biography",
      href: "/biography",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ],
  links: {
    github: "https://github.com/sebastian-nunez",
    linkedin: "https://www.linkedin.com/in/sebastian-nunez-profile/",
  },
}
