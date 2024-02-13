"use client";
import useSidebar from "@/hooks/use-sidebar";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMounted } from "@/hooks/use-mounted";
import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton";

const Sidebar = ({ className, ...props }: any) => {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        width: 0,

        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);
  return (
    <motion.div
      ref={ref}
      initial={{ width: 345, opacity: 0 }}
      animate={{ width: 345, opacity: 1 }}
      style={{ width: 345 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
    >
      <motion.div className={cn(className)}>
        <motion.div>
          <ScrollArea className="h-[calc(100%)] border-r py-3 px-2 pt-[60px] bg-secondary absolute bottom-0 ">
            {props.children}
          </ScrollArea>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

function Skeleton() {
  return (
    <div className="flex flex-col gap-8 w-[345px] h-[calc(100%)] border-r py-3 px-2 bg-secondary">
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
      <SkeletonComponent className="h-20 w-full" />
    </div>
  );
}

const Controller: any = (props: any) => {
  const { isOpenSidebar } = useSidebar();
  const mounted = useMounted();

  if (!mounted) return <Skeleton />;
  return (
    <AnimatePresence>
      {isOpenSidebar ? <Sidebar {...props} /> : null}
    </AnimatePresence>
  );
};

export default Controller;
