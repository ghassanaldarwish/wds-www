"use client";
import React from "react";
import { Icons } from "../../ui/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import useSidebar from "@/hooks/use-sidebar";

export default function SidebarMenuToggle() {
  const { isOpenSidebar, toggleSidebar } = useSidebar();

  return isOpenSidebar ? (
    <Icons.close
      onClick={toggleSidebar}
      className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
    />
  ) : (
    <Icons.menu
      onClick={toggleSidebar}
      className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
    />
  );
}
