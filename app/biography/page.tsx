import { Anchor, H1, H3, P } from "@/components/ui/typography"

const Biography: React.FC = () => {
  return (
    <div className="container mt-10">
      <H1>Biography</H1>

      <P>
        <Anchor>As a result, people stopped</Anchor> telling jokes, and the
        kingdom fell into a gloom. But there was one person who refused to let
        the king's foolishness get him down: a court jester named Jokester.
      </P>

      <H3>Jokester's Revolt</H3>

      <P>
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester.
      </P>
      <P>
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
      </P>
      <H3>The People's Rebellion</H3>
      <P>
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </P>

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
      <P>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </P>
      <P className="leading-7 [&:not(:first-child)]:mt-6">
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </P>
    </div>
  )
}

export default Biography
