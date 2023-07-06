import { useEffect, useState } from "react"

import { ExperiencePoint, ProjectPoint } from "@/types/experience"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Anchor, P } from "@/components/ui/typography"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface ExperienceCardProps extends ProjectPoint {}

const ProjectCard: React.FC<ExperienceCardProps> = ({
  title,
  technologies,
  link,
  summary,
  details,
}) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl xl:text-4xl">
          {title}
        </CardTitle>

        <CardDescription className="text-md md:text-lg">
          <em>{technologies}</em>
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="pb-0">
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>{summary}</li>
          {details && details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </CardContent>

      {link && (
        <CardFooter className="lg:text-md font-medium">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Anchor href={link}>Code Repository</Anchor>
              </TooltipTrigger>

              <TooltipContent>
                <p>Project Link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      )}
    </Card>
  )
}

export default ProjectCard
