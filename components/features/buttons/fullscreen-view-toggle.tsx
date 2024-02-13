"use client";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useFullscreenView from "@/hooks/use-fullscreen-view";
import { Icons } from "@/components/ui/icons";

export default function FullscreenViewToggle({ className }: any) {
  const { fullscreen, toggle } = useFullscreenView();

  return (
    <motion.div
      className={cn(
        buttonVariants({ size: "icon", variant: "outline" }),
        "flex  gap-1 text-md font-bold justify-center items-center cursor-pointer",
        className
      )}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.94,
        transition: { duration: 0.3 },
      }}
      onClick={toggle}
    >
      {fullscreen ? (
        <Icons.shrink className="w-[26px] h-[26px]" />
      ) : (
        <Icons.expand className="w-[20px] h-[20px] " />
      )}
    </motion.div>
  );
}
