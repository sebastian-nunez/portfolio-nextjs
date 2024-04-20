export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Sebastian Nunez",
  description:
    "Sebastian Nunez - Software Engineer Intern at Google | ex. UKG, JPMorgan Chase & Co. | Google Tech Exchange Scholar | Apple Pathways Alliance | Computer Science student at Florida International University",
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
    youplay: "https://github.com/you-play/YouPlay",
  },
}
