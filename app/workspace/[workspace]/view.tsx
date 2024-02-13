import { ViewRoot } from "@/components/index";
import React from "react";

export default async function View() {
  return (
    <ViewRoot className=" flex flex-col gap-4 ">
      <ViewRoot.PinsToolbar />

      <ViewRoot.Pins />
    </ViewRoot>
  );
}
