"use client";
import React from "react";

import useWorkspacePins from "@/hooks/use-workspace-pins";
import { AnimatePresence } from "framer-motion";
import Pin, { PinSkeleton } from "@/components/features/pin";
import { createArray } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

const Pins: any = () => {
  const pinsQuery = useWorkspacePins();

  const mounted = useMounted();
  if (pinsQuery.isLoading || !mounted)
    return createArray(10).map((i) => <PinSkeleton key={i} />);

  return (
    <AnimatePresence>
      {pinsQuery.data.map((pin: any, index: number) => (
        <Pin key={index} {...pin} index={index} />
      ))}
    </AnimatePresence>
  );
};

export default Pins;
