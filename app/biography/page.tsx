import { Anchor, H1, H3, P } from "@/components/ui/typography"
import BioSkeleton from "@/components/bio-skeleton"

const Biography: React.FC = () => {
  return (
    <section className="container my-10">
      <H1 className="mb-5 md:text-3xl lg:text-5xl">Biography</H1>

      <H3 className="mb-3 italic lg:text-3xl">
        Whoops! Looks like I'm still working on it!
      </H3>

      <BioSkeleton />
    </section>
  )
}

export default Biography
