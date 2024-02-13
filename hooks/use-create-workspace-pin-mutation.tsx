import { useMutation } from "@tanstack/react-query";
import { createWorkspacePin } from "@/services/workspace";

export default function useCreateWorkspacePinMutation() {
  const createWorkspacePinMutation: any = useMutation({
    mutationFn: createWorkspacePin,
  });
  return createWorkspacePinMutation;
}
