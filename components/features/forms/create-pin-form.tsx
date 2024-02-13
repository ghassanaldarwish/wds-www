"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { redirect, useParams } from "next/navigation";
import useCreateWorkspacePinMutation from "@/hooks/use-create-workspace-pin-mutation";

export default function CreatePinForm({ className }: any) {
  const createWorkspacePinMutation = useCreateWorkspacePinMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { workspace }: any = useParams();

  //if (createWorkspacePinMutation.isSuccess) redirect(`/workspace/${workspace}`);

  async function onSubmit(e: any) {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      workspace,
    };

    console.log(body);

    createWorkspacePinMutation.mutate(body);
  }
  return (
    <div className={cn("grid gap-6", className)}>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Pin Name
            </Label>

            <Input
              autoFocus={true}
              required={true}
              id="name"
              placeholder="Pin Name"
              type="text"
              name="name"
              autoCapitalize="none"
              className="col-span-3"
              autoCorrect="off"
              autoComplete="off" // Using a non-standard value
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={cn(buttonVariants())}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

/**
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Workspace Name
          </Label>
          <Input id="name" name="name" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            User Password
          </Label>
          <Input id="password" name="password" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="confirmPassword" className="text-right">
            Confirm User Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            className="col-span-3"
          />
        </div>
      </div>

      <Button type="submit">Create</Button>
    </form>
 */
