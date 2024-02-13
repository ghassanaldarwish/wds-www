"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useActiveWorkspace from "@/hooks/use-active-workspace";
import { Icons } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
export default function MessagesLink({ className }: { className?: string }) {
  const pathname = usePathname();
  const AppName = pathname.split("/").filter((x) => x)[0];

  const { activeWorkspace } = useActiveWorkspace();
  const { workspace }: any = useParams();
  if (!activeWorkspace) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        buttonVariants({
          size: "icon",
          variant: AppName === "messages" ? "default" : "outline",
        }),
        "  cursor-pointer flex justify-center items-center "
      )}
    >
      <Link href={`/messages/${activeWorkspace || workspace}`}>
        <Icons.messagesSquare className="w-7 h-7  " />
      </Link>
    </motion.div>
  );
}
