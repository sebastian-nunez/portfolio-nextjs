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
    <main className="container grid items-center gap-6 pb-8 pt-8 md:py-14">
      <section className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="leading-tight tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[11rem]">
          Hey, I'm
          <br /> <span className="font-extrabold">Sebastian!</span>
        </div>

        <p className="italic max-w-[700px] leading-tight text-muted-foreground text-base sm:text-md md:text-xl lg:text-2xl">
          {siteConfig.profile.currentRole} at{" "}
          {siteConfig.profile.currentCompany}
        </p>
      </section>

      <section className="flex gap-4 mt-5 lg:mt-3 xl:mt-5">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className={cn(buttonVariants(), "px-8", "lg:px-16")}
        >
          LinkedIn
        </Link>

        <Link
          href={"/resume"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "px-8",
            "lg:px-16"
          )}
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
      </section>

      <section className="mt-[10rem]">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king's subjects were not amused. They grumbled and complained, but
          the king was firm:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king's
          foolishness get him down: a court jester named Jokester.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Jokester's Revolt
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn't help but laugh. And
          once they started laughing, they couldn't stop.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          The People's Rebellion
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  King's Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  People's happiness
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Empty
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Overflowing
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Modest
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Satisfied
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Full
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Ecstatic
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The moral of the story is: never underestimate the power of a good
          laugh and always be careful of bad ideas.
        </p>
      </section>
    </main>
  )
}
