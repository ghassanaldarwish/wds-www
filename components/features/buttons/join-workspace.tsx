"use client";

import useJoinWorkspaceMutation from "@/hooks/use-join-workspace-mutation";
import { Button } from "../../ui/button";

export default function JoinWorkspace({ workspace }: any) {
  const joinWorkspaceMutation: any = useJoinWorkspaceMutation();

  async function onJoin(e: any) {
    e.preventDefault();

    console.log("workspace", workspace);

    joinWorkspaceMutation.mutate(workspace);
  }
  return <Button onClick={onJoin}>Join</Button>;
}
