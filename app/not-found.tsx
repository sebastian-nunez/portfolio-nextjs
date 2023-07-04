"use client"

import { Separator } from "@/components/ui/separator"
import { H1, P } from "@/components/ui/typography"

export default function NotFound() {
  return (
    <div className="container grid text-center pt-8 md:py-14">
      <H1 className="text-center">404 - Not Found</H1>
      <Separator />
      <P>Could not find the requested resource.</P>
    </div>
  )
}
