import { Skeleton } from "@/components/ui/skeleton"

const BioSkeleton: React.FC = () => {
  return (
    <div className="grid-1 mt-10 grid gap-6">
      <div className="md:flex md:gap-16">
        <div>
          <Skeleton className="mx-auto h-[20rem] w-[20rem] rounded-full" />
          <Skeleton className="mb-6 mt-9 h-[6rem] w-[12rem] sm:mt-12 sm:w-[15rem] md:h-[2rem] md:w-[25rem]" />
        </div>

        <div className="grid-1 md:grid-1 grid gap-5 sm:mt-5 md:mt-4 md:grid md:gap-2">
          <Skeleton className="h-[3rem] w-[18rem] sm:w-[18rem] lg:w-[28rem]" />
          <Skeleton className="h-[5rem] w-[21rem] sm:w-[22rem] lg:w-[35rem] " />
          <Skeleton className="h-[3rem] w-[14rem] sm:w-[18rem] lg:h-[8rem]" />

          <Skeleton className="mx-auto mt-6 h-[5rem] w-[10rem] rounded-full sm:mx-0" />
        </div>
      </div>
    </div>
  )
}

export default BioSkeleton
