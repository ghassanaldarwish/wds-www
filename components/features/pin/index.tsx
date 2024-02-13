"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton";
import StudioLink from "../buttons/studio-link";

export function PinSkeleton() {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 ">
        <div className="space-y-1">
          <SkeletonComponent className="mr-2 h-4 w-4" />
          <SkeletonComponent className="mr-2 h-4 w-4" />
        </div>
        <div className="flex border items-center  rounded-md bg-secondary text-secondary-foreground">
          <SkeletonComponent className="mr-2 h-4 w-4" />
          <SkeletonComponent className="mr-2 h-4 w-4" />

          <Separator orientation="vertical" className="h-[20px]" />
          <SkeletonComponent className="mr-2 h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <SkeletonComponent className=" mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              <SkeletonComponent className="  h-3 w-3 fill-sky-400 text-sky-400" />
            </div>
            <div className="flex items-center">
              <SkeletonComponent className=" mr-1 h-3 w-3" />
              <SkeletonComponent className="  h-3 w-3" />
            </div>
            <SkeletonComponent className="h-full w-full" />
          </div>
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default function Pin({ index, title, description, id }: any) {
  return (
    <motion.div
      key={index}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.1, delay: 0.03 * index }}
    >
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 ">
          <div className="space-y-1">
            <CardTitle>
              <Link target="_blank" href={`/workspace/`}>
                {title}
              </Link>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex border items-center  rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <StudioLink param={id} variant="ghost" />
            </Button>
            <Separator orientation="vertical" className="h-[20px]" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="px-2 shadow-none">
                  <Icons.moreHorizontal className="h-4 w-4 text-secondary-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Future Ideas
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icons.add className="mr-2 h-4 w-4" /> Create List
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icons.add className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <Icons.add className="mr-1 h-3 w-3" />
              20k
            </div>
            <div>Updated April 2023</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
