import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="grid-1 container mt-9 grid gap-4">
      <Skeleton className="h-[60px] w-[250px] rounded sm:w-[400px] md:w-[500px] lg:h-[100px]" />
      <Skeleton className="h-[60px] w-[350px] rounded sm:w-[500px] md:w-[800px] lg:h-[100px]" />
      <Skeleton className="h-[30px] w-[280px] rounded sm:w-[340px] md:w-[700px] lg:h-[45px]" />
      <div className="mt-3 flex gap-8">
        <Skeleton className="h-[40px] w-[100px] rounded md:w-[200px] lg:h-[60px]" />
        <Skeleton className="h-[40px] w-[100px] rounded md:w-[200px] lg:h-[60px]" />
      </div>
    </div>
  )
}
