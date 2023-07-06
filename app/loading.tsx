import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="container grid grid-1 gap-4 mt-9">
      <Skeleton className="w-[250px] h-[60px] sm:w-[400px] rounded md:w-[500px] lg:h-[100px]" />
      <Skeleton className="w-[350px] h-[60px] sm:w-[500px] rounded md:w-[800px] lg:h-[100px]" />
      <Skeleton className="w-[280px] h-[30px] sm:w-[340px] rounded md:w-[700px] lg:h-[45px]" />
      <div className="flex gap-8 mt-3">
        <Skeleton className="w-[100px] h-[40px] rounded md:w-[200px] lg:h-[60px]" />
        <Skeleton className="w-[100px] h-[40px] rounded md:w-[200px] lg:h-[60px]" />
      </div>
    </div>
  )
}
