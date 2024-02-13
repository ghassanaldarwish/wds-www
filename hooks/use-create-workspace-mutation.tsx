import { createWorkspace } from "@/services/workspaces";
import { useMutation } from "@tanstack/react-query";
export default function useCreateWorkspaceMutation() {
  const createWorkspaceMutation: any = useMutation({
    mutationFn: createWorkspace,
  });

  return createWorkspaceMutation;
}
