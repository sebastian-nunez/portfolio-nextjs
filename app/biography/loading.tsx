import { Skeleton } from "@/components/ui/skeleton"
import BioSkeleton from "@/components/bio-skeleton"

export default function BiographyLoading() {
  return (
    <div className="grid-1 container mt-10 grid gap-4">
      <BioSkeleton />
    </div>
  )
}
