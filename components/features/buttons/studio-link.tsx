"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useActiveWorkspace from "@/hooks/use-active-workspace";
import { Icons } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
export default function StudioLink({
  className,
  param,
  variant = "outline",
  children,
}: {
  className?: string;
  param?: string;
  variant?: "outline" | "ghost";
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  const AppName = pathname.split("/").filter((x) => x)[0];

  const { activeWorkspace } = useActiveWorkspace();
  const { workspace, pinId }: any = useParams();
  if (!activeWorkspace || (!pinId && !param)) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        buttonVariants({
          size: "icon",
          variant: AppName === "studio" ? "default" : variant,
        }),
        "  cursor-pointer flex justify-center items-center ",
        className
      )}
    >
      <Link
        href={`/studio/${activeWorkspace || workspace}${
          param ? `/${param}` : pinId ? `/${pinId}` : ""
        }`}
      >
        {children ? children : <Icons.studio className="w-7 h-7  " />}
      </Link>
    </motion.div>
  );
}
