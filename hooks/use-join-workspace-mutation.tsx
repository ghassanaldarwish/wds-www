import { useMutation } from "@tanstack/react-query";
import { joinWorkspaceUser } from "@/services/workspace";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import useActiveWorkspace from "@/hooks/use-active-workspace";

export default function useJoinWorkspaceMutation() {
  const { setActiveWorkspace } = useActiveWorkspace();

  const joinWorkspaceMutation: any = useMutation({
    mutationFn: joinWorkspaceUser,
  });

  if (joinWorkspaceMutation.isSuccess) {
    Cookies.set(
      "droplet_refresh_token",
      joinWorkspaceMutation.data?.refreshToken
    );
    setActiveWorkspace(joinWorkspaceMutation.data.value);
    redirect(`/workspace/${joinWorkspaceMutation.data.value}`);
  }
  return joinWorkspaceMutation;
}
