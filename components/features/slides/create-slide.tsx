"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icons } from "@/components/ui/icons";

export function CreateSlide() {
  return (
    <div className="h-fit snap-end shrink-0 w-40 ">
      <AspectRatio
        ratio={16 / 9}
        className="bg-secondary text-secondary-foreground  border rounded-md shrink-0 shadow-xl flex items-center justify-center cursor-pointer"
      >
        <Icons.add className="text-4xl " />
      </AspectRatio>
    </div>
  );
}
