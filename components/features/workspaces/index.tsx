"use client";
import { useRouter } from "next/navigation";
import React from "react";
import LoginWorkspace from "../forms/login-workspace";
import JoinWorkspace from "../buttons/join-workspace";
import { Skeleton } from "@/components/ui/skeleton";
import useUser from "../../../hooks/use-user";
import { buttonVariants } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function WorkspacesSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
    </div>
  );
}

function NotFound() {
  return (
    <div className=" container h-[90vh] flex justify-center items-center">
      <div className="flex h-[450px] w-full shrink-0 items-center justify-center rounded-md border border-dashed">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 text-muted-foreground"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="11" r="1" />
            <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
            <path d="M17 18.5a9 9 0 1 0-10 0" />
          </svg>

          <h3 className="mt-4 text-lg font-semibold">No workspaces created</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            You have not created any Workspace. Create one below.
          </p>
          <Link
            href="/create/workspace"
            className={cn(buttonVariants({ size: "sm" }), "relative")}
          >
            Create Workspace
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Workspaces() {
  const userQuery: any = useUser();
  const router = useRouter();
  const { data: session } = useSession();
  console.log("Client Session", session);

  if (userQuery.isLoading) return <WorkspacesSkeleton />;
  if (!userQuery.data?.workspaces || userQuery.data?.workspaces?.length < 1)
    return <NotFound />;

  const onWorkspaceLogin = (workspace: string) => {
    // send requset to server to login to workspace
    // http://workspace-api.localhost:8088/web-drei/login
    router.replace(`/workspace/${workspace}`);
  };
  return (
    <div className="container">
      {userQuery.data?.workspaces?.map((workspace: any, index: number) => {
        return (
          <div
            className="border   p-4 flex justify-between items-center"
            key={index}
          >
            <div
              className=" hover:underline cursor-pointer"
              onClick={() => onWorkspaceLogin(workspace.value)}
            >
              {workspace.value}
            </div>

            {workspace?.isLogin ? (
              <JoinWorkspace user={userQuery.data} workspace={workspace} />
            ) : (
              <LoginWorkspace user={userQuery.data} workspace={workspace} />
            )}
          </div>
        );
      })}
    </div>
  );
}
