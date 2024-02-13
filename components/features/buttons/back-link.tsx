"use client";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/icons";
import AnimateButton from "@/components/base/animate/animate-button";

function BackLink({ className }: any) {
  const router = useRouter();

  return (
    <AnimateButton
      onClick={() => router.back()}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "absolute top-4 left-4 md:top-8 md:left-8 px-2 cursor-pointer",
        className
      )}
    >
      <div className="flex justify-between items-center gap-2">
        <Icons.chevronLeft />
        <span className="pr-2">Back</span>
      </div>
    </AnimateButton>
  );
}

export default BackLink;
