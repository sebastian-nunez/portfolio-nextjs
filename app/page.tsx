import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { buttonVariants } from "@/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-8 md:py-14">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="font-extrabold leading-tight tracking-tighter text-7xl md:text-9xl">
          Sebastian <br className="lg:hidden" />
          Nunez
        </h1>

        <p className="italic max-w-[700px] text-muted-foreground text-base sm:text-md md:text-xl lg:text-2xl">
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
        >
          Resume
        </Link>
      </div>
    </section>
  )
}
