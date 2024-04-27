"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

export default function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-2">
          <Image
            width={48}
            height={48}
            className="w-8"
            src="/united-kingdom-icon.png"
          />
          <ChevronDown className="w-4 h-4" />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex gap-2">
          <Image
            width={48}
            height={48}
            className="w-8"
            src="/united-kingdom-icon.png"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2">
          <Image
            width={48}
            height={48}
            className="w-8"
            src="/germany-icon.png"
          />
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2">
          <Image
            width={48}
            height={48}
            className="w-8"
            src="/united-arab-emirates-icon.png"
          />
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
