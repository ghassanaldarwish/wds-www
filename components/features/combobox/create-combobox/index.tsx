import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import React from "react";

import Dropdown from "./dropdown";

function CreateCombobox({ className }: any) {
  return (
    <Dropdown>
      <div
        className={cn(
          buttonVariants({ variant: "outline" }),
          "cursor-pointer flex items-center px-2 justify-center gap-2"
        )}
      >
        <Icons.add className="" />
        <Icons.triangleDown className="" />
      </div>
    </Dropdown>
  );
}

export default CreateCombobox;
