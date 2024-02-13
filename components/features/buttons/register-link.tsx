import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import AnimateButton from "@/components/base/animate/animate-button";
export default function RegisterLink({ className }: any) {
  return (
    <AnimateButton>
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "cursor-pointer",
          className
        )}
        href="/register"
      >
        Register
      </Link>
    </AnimateButton>
  );
}
