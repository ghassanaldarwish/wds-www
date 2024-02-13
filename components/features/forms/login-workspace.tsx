"use client";
import useLoginWorkspaceMutation from "@/hooks/use-login-workspace-mutation";
import { cn } from "../../../lib/utils";
import { Button, buttonVariants } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginWorkspace({ className, user, workspace }: any) {
  const loginWorkspaceMutation: any = useLoginWorkspaceMutation();
  const [isOpen, setIsOpen] = useState(false);

  if (loginWorkspaceMutation.isSuccess) {
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    const body = {
      workspace: workspace.value,
      password: e.target.password.value,
      email: user.email,
    };

    console.log(body);

    loginWorkspaceMutation.mutate(body);
    setIsOpen(false);
  }
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger className={cn(buttonVariants(), className)}>
        Login
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login Workspace</DialogTitle>
          <DialogDescription>
            Login to the workspace to start collaborating with your team.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
