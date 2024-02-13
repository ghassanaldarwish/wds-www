"use client";
import useSidebar from "@/hooks/use-sidebar";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import useFullscreenView from "@/hooks/use-fullscreen-view";

const View: any = ({ className, children }: any): JSX.Element => {
  const { isOpenSidebar } = useSidebar();
  const { ref } = useFullscreenView();

  return (
    <AnimatePresence>
      <ScrollArea
        className={cn("w-full h-full", !isOpenSidebar && "ml-0")}
        ref={ref}
      >
        <motion.div
          layoutRoot
          layout
          className={cn(
            "grow py-4 px-6 pt-[60px]",
            !isOpenSidebar && "container",
            className
          )}
        >
          {children}
        </motion.div>
      </ScrollArea>
    </AnimatePresence>
  );
};

export default View;
