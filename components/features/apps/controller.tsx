"use client";
import { useMounted } from "@/hooks/use-mounted";
import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import useSidebar from "@/hooks/use-sidebar";

function Skeleton() {
  return (
    <div className="flex flex-col gap-8 w-12 h-full  bg-secondary">
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

const Controller: any = ({ className, children }: any) => {
  const { isOpenSidebar } = useSidebar();
  const mounted = useMounted();

  if (!mounted) return <Skeleton />;
  return (
    <div className={cn("h-full", className)}>
      <AnimatePresence>
        {isOpenSidebar ? (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 60, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full py-2 bg-secondary w-12 border-r"
          >
            <div className="flex h-full flex-col justify-between  gap-4 items-center  ">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Controller;
