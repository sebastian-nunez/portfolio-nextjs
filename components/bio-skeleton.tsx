import { Skeleton } from "@/components/ui/skeleton"

const BioSkeleton: React.FC = () => {
  return (
    <div className="grid grid-1 gap-6 mt-10">
      <div className="md:flex md:gap-16">
        <div>
          <Skeleton className="w-[20rem] h-[20rem] rounded-full mx-auto" />
          <Skeleton className="w-[12rem] sm:w-[15rem] h-[6rem] mb-6 mt-9 md:w-[25rem] md:h-[2rem] sm:mt-12" />
        </div>

        <div className="grid grid-1 sm:mt-5 gap-5 md:mt-4 md:grid md:grid-1 md:gap-2">
          <Skeleton className="w-[18rem] sm:w-[18rem] h-[3rem] lg:w-[28rem]" />
          <Skeleton className="w-[21rem] sm:w-[22rem] h-[5rem] lg:w-[35rem] " />
          <Skeleton className="w-[14rem] sm:w-[18rem] h-[3rem] lg:h-[8rem]" />

          <Skeleton className="w-[10rem] h-[5rem] mt-6 rounded-full mx-auto sm:mx-0" />
        </div>
      </div>
    </div>
  )
}

export default BioSkeleton
