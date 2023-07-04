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

import "@/config/site"

export interface ExperienceCardProps {
  company: string
  role: string
  daterange: string
  summary: string[]
  technologies: string
  details?: string[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  daterange,
  technologies,
  summary,
}) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg md:text-3xl">{company}</CardTitle>

        <CardDescription className="md:text-sm">
          {role}
          <br />
          <em>{daterange}</em>
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="pb-0">
        <ol className="my-6 ml-6 list-disc [&>li]:mt-2">
          {summary.map((point) => (
            <li>{point}</li>
          ))}
        </ol>
      </CardContent>

      <CardFooter className="-mt-6">
        <P>
          <strong>Technologies:</strong> {technologies}
        </P>
      </CardFooter>
    </Card>
  )
}

export default ExperienceCard
