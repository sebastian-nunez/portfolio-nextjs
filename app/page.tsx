"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { buttonVariants } from "@/ui/button"

export default function IndexPage() {
  const { toast } = useToast()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-8 md:py-14">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="leading-tight tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[11rem]">
          Hey, I'm
          <br /> <span className="font-extrabold">Sebastian!</span>
        </div>

        <p className="italic max-w-[700px] leading-tight text-muted-foreground text-base sm:text-md md:text-xl lg:text-2xl">
          {siteConfig.profile.currentRole} at{" "}
          {siteConfig.profile.currentCompany}
        </p>
      </div>

      <div className="flex gap-4 mt-5 lg:mt-3">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className={cn(buttonVariants(), "px-8")}
        >
          LinkedIn
        </Link>

        <Link
          href={"/resume"}
          className={cn(buttonVariants({ variant: "outline" }), "px-8")}
          onClick={() => {
            toast({
              title: "Awesome!",
              description: "Let's have a look, shall we?",
              action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
            })
          }}
        >
          Resume
        </Link>
      </div>
    </section>
  )
}
