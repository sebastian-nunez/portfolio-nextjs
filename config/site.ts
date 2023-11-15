export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Sebastian Nunez",
  description:
    "Sebastian Nunez - Software Engineering Intern at JPMorgan Chase & Co. Google Tech Exchange Scholar. Computer Science student at Florida International University (Dec 2024)",
  url: "https://www.sebastian-nunez.com/",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    // TODO: create the biography page
    {
      title: "Biography",
      href: "/biography",
    },
    // {
    //   title: "Experience",
    //   href: "/experience",
    // },
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
    stockpulse: "https://stockpulse.up.railway.app/",
  },
}
