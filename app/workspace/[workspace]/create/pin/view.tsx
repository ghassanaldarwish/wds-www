import React from "react";
import { ViewRoot } from "@/components/index";
import { Icons } from "@/components/ui/icons";

export default async function View() {
  return (
    <ViewRoot className="mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create new pin
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter your presentation/lesson name.
        </p>
      </div>

      <ViewRoot.CreatePinForm />
    </ViewRoot>
  );
}
