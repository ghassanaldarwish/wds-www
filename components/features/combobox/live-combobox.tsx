"use client";

import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LiveCombobox = ({ className }: any) => {
  const { workspace }: any = useParams();
  return (
    <Link
      className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
      href={`/leader/${workspace}`}
    >
      <Icons.wifi />
    </Link>
  );
};

export default LiveCombobox;
