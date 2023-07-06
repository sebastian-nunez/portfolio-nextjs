import { PROJECT_RESULTS_LIMIT, projects } from "@/config/profile"

import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import ProjectCard from "./project-card"
import { Button } from "./ui/button"
import { H1, P } from "./ui/typography"

const ProjectSidepanel: React.FC = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="flex justify-center">
            <Button size="lg" className="w-1/2 mt-10 drop-shadow-lg">
              <span>More Projects?</span>
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent side="left" className="w-full h-[100rem]">
          <SheetHeader>
            <SheetTitle className="text-lg">More Projects!</SheetTitle>
          </SheetHeader>

          <div className="grid gap-5">
            {projects && projects.length > PROJECT_RESULTS_LIMIT ? (
              projects
                .slice(PROJECT_RESULTS_LIMIT, projects.length)
                .map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))
            ) : (
              <div>
                <H1 className="mt-5">I'm sorry :/ </H1>

                <P>
                  It seems like there are more projects to show off at the
                  moment
                </P>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default ProjectSidepanel
