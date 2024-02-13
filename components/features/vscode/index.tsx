"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { vscodeURL } from "@/infrastructure/api";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
export default function Vscode({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) {
  const [iframeMounted, setIframeMounted] = useState(false);
  const iframeRef = useRef(null);
  const mounted = useMounted();
  const handleIframeLoad = () => {
    setIframeMounted(true);
  };

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent, safeToRemove]);
  const { workspace }: any = useParams();

  const _URL = `${vscodeURL}/${workspace}/`;
  if (!mounted) return <Skeleton className={cn(" h-full w-full", className)} />;

  return (
    <motion.div layoutRoot className={cn(" h-full w-full", className)}>
      <AnimatePresence>
        <motion.iframe
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          layout
          onLoad={handleIframeLoad}
          ref={iframeRef}
          allow="autoplay; autofocus"
          className={cn(" h-full w-full", !iframeMounted && "hidden")}
          src={_URL}
          {...props}
        />
      </AnimatePresence>
    </motion.div>
  );
}
