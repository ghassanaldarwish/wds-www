import React from "react";
import { cn } from "@/lib/utils";

export default function TypographyBlockquote({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
