import React from "react";
import { ViewRoot } from "@/components/index";

export default async function View() {
  return (
    <ViewRoot className=" flex flex-col gap-4 ">
      <ViewRoot.WorkspacesToolbar />
      <ViewRoot.Workspaces />
    </ViewRoot>
  );
}
