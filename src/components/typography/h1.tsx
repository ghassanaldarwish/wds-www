import React from "react";
import { cn } from "@/lib/utils";

export default function TypographyH1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-8",
        className
      )}
    >
      {children}
    </h1>
  );
}
