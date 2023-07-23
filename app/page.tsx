"use client"

import Link from "next/link"

import {
  EXPERIENCE_RESULTS_LIMIT,
  EXPERIENCE_SKILLS_SEPARATOR,
  experience,
  profile,
  projects,
} from "@/config/profile"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { ToastAction } from "@/components/ui/toast"
import { H1, H2, P } from "@/components/ui/typography"
import { useToast } from "@/components/ui/use-toast"
import { Button, buttonVariants } from "@/ui/button"
import ExperienceCard from "@/components/experience-card"
import ProjectCard from "@/components/project-card"
import ProjectSidepanel from "@/components/project-sidepanel"

import { PROJECT_RESULTS_LIMIT } from "../config/profile"

export default function IndexPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-8 md:py-14">
      <div className="h-[calc(100vh_-_8rem)]">
        {" "}
        {/* Push everything below the hero down */}
        <section className="flex max-w-[980px] flex-col items-start gap-2">
          <div className="text-6xl font-[300] leading-tight sm:text-8xl md:text-9xl lg:text-[11rem]">
            Hey, I'm
            <br /> <span className="font-extrabold">Sebastian!</span>
          </div>

          <p className="sm:text-md max-w-fit text-base italic leading-tight text-muted-foreground sm:max-w-[700px] md:text-xl lg:text-2xl">
            {profile.currentRole} at {profile.currentCompany}
          </p>
        </section>
        <section className="mt-7 flex gap-4 lg:mt-8 xl:mt-10">
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className={cn(buttonVariants(), "px-8", "lg:px-16", "shadow")}
          >
            LinkedIn
          </Link>

          <Link
            href={"/resume"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "px-8",
              "lg:px-16",
              "shadow"
            )}
          >
            Resume
          </Link>
        </section>
      </div>

      <section className="">
        <H2 className="mb-5 md:text-3xl lg:text-5xl">Experience</H2>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2  lg:gap-4 xl:grid-cols-3">
          {experience
            ? experience
                .slice(0, EXPERIENCE_RESULTS_LIMIT)
                .map((experiencePoint) => (
                  <ExperienceCard
                    key={experiencePoint.daterange}
                    {...experiencePoint}
                    skillSeparator={EXPERIENCE_SKILLS_SEPARATOR}
                  />
                ))
            : null}{" "}
          {/* TODO: implement a simple loading spinner */}
        </div>
      </section>

      <section className="mt-6">
        <H2 className="mb-5 md:text-3xl lg:text-5xl">Projects</H2>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2  lg:gap-4">
          {projects ? (
            projects
              .slice(0, PROJECT_RESULTS_LIMIT)
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))
          ) : (
            <div>
              <H1 className="mt-5">I'm sorry :/ </H1>

              <P>
                It seems like there are more projects to show off at the moment
              </P>
            </div>
          )}
          {/* TODO: implement a simple loading spinner */}
        </div>
      </section>

      {/* <ProjectSidepanel /> */}

      <div className="flex justify-center">
        <Button size="lg" className="mt-10 w-1/2 drop-shadow-lg" asChild>
          <Link href="/resume">View Resume</Link>
        </Button>
      </div>
    </main>
  )
}
