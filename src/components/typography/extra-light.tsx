import React from "react";
import { cn } from "@/lib/utils";

export default function TypographyExtraLight({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("font-extralight text-base md:text-4xl  py-4", className)}>
      {children}
    </p>
  );
}
