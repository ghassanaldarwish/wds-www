import React from "react";
import { cn } from "@/lib/utils";

export default function TypographyLarge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
}
