import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWorkspaceUser } from "@/services/workspace";
import { userQueryKeys } from "@/services/users";

export default function useLoginWorkspaceMutation() {
  const queryClient = useQueryClient();
  const loginWorkspaceMutation: any = useMutation({
    mutationFn: loginWorkspaceUser,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: userQueryKeys,
      });
    },
  });
  return loginWorkspaceMutation;
}
