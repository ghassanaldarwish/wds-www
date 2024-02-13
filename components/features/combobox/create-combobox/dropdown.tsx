"use client";

import { Icons } from "@/components/ui/icons";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useParams } from "next/navigation";
import CreateNewPinLink from "../../buttons/create-new-pin-link";

function Dropdown({ children }: any) {
  const { workspace }: any = useParams();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Create New</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icons.pin className="mr-2 h-4 w-4" />
            <CreateNewPinLink>New pin</CreateNewPinLink>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Icons.org className="mr-2 h-4 w-4" />
            <Link href={`/create/workspace`}>New workspace</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
