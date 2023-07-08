import Link from "next/link"

import { PROJECT_RESULTS_LIMIT, projects } from "@/config/profile"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { H1, P } from "@/components/ui/typography"
import { useToast } from "@/components/ui/use-toast"
import ProjectCard from "@/components/project-card"

const Projects: React.FC = () => {
  const { toast } = useToast()
  return (
    <section className="container my-10">
      <H1 className="mb-5 md:text-3xl lg:text-5xl">Projects</H1>

      <div className="grid gap-7 grid-cols-1 md:grid-cols-2  lg:gap-4">
        {projects && projects.length > PROJECT_RESULTS_LIMIT ? (
          projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))
        ) : (
          <div>
            <H1 className="mt-5">I'm sorry :/ </H1>

            <P className="text-2xl">
              It seems like there are more projects to show off at the moment
            </P>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="w-1/2 mt-10 drop-shadow-lg"
          asChild
          onClick={() => {
            toast({
              title: "Awesome! Let's have a look, shall we?",
              description: "Generating a PDF preview...",
              action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
            })
          }}
        >
          <Link href="/resume">View Resume</Link>
        </Button>
      </div>
    </section>
  )
}

export default Projects
