export interface ExperiencePoint {
  company: string
  role: string
  daterange: string
  summary: string[]
  skills: string[]
  details?: string[]
}

export interface ProjectPoint {
  title: string
  technologies: string
  summary: string
  details: string[]
  link?: string
}
