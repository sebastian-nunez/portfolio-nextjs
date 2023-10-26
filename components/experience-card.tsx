import { useEffect, useState } from "react"

import { ExperiencePoint } from "@/types/experience"

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
import { P } from "@/components/ui/typography"

interface ExperienceCardProps extends ExperiencePoint {
  skillSeparator: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  daterange,
  skills,
  summary,
  skillSeparator = "•",
  details,
}) => {
  return (
    <Card className="text-ellipsis  shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl xl:text-4xl">
          {company}
        </CardTitle>

        <CardDescription className="text-md md:text-lg">
          {role}
          <br />
          <em>{daterange}</em>
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="pb-0">
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {summary && summary.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </CardContent>

      <CardFooter className="xl:text-md -mt-7 text-sm font-medium">
        <P className="mr-2 text-center">
          {skills &&
            skills.slice(0, skills.length - 1).map(
              (
                skill,
                idx // don't include the separator on the 2nd to last item
              ) => (
                <em key={idx}>
                  {skill} {skillSeparator}{" "}
                </em>
              )
            )}

          <em>{skills[skills.length - 1]}</em>
        </P>
      </CardFooter>
    </Card>
  )
}

export default ExperienceCard
