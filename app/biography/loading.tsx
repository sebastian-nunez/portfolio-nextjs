import { Skeleton } from "@/components/ui/skeleton"
import BioSkeleton from "@/components/bio-skeleton"

export default function BiographyLoading() {
  return (
    <div className="container grid grid-1 gap-4 mt-10">
      <BioSkeleton />
    </div>
  )
}
