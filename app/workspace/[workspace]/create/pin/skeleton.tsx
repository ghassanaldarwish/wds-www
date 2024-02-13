import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton";

function Skeleton() {
  return (
    <div className="flex flex-col gap-8">
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
    </div>
  );
}

export default Skeleton;
