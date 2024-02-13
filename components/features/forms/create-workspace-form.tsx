"use client";
import useCreateWorkspaceMutation from "@/hooks/use-create-workspace-mutation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { redirect } from "next/navigation";

export default function CreateWorkspaceForm({ className }: any) {
  const createWorkspaceMutation: any = useCreateWorkspaceMutation();
  const [isLoading, setIsLoading] = useState(false);

  if (createWorkspaceMutation.isSuccess) redirect(`/workspaces`);

  async function onSubmit(e: any) {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    createWorkspaceMutation.mutate(body);
  }
  return (
    <div className={cn("grid gap-6", className)}>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Workspace Name
            </Label>

            <Input
              autoFocus={true}
              required={true}
              id="name"
              placeholder="Workspace Name"
              type="text"
              name="name"
              autoCapitalize="none"
              className="col-span-3"
              autoCorrect="off"
              autoComplete="off" // Using a non-standard value
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              User Password
            </Label>

            <Input
              required={true}
              id="password"
              placeholder="User Password"
              type="password"
              name="password"
              autoCapitalize="none"
              className="col-span-3"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmPassword">
              Confirm User Password
            </Label>

            <Input
              required={true}
              id="confirmPassword"
              placeholder="Confirm User Password"
              type="password"
              name="confirmPassword"
              autoCapitalize="none"
              className="col-span-3"
              autoCorrect="off"
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
