import { useMutation, useQueryClient } from "@tanstack/react-query";

import { loginUser, userQueryKeys } from "@/services/users";
export default function useLoginUserMutation() {
  const queryClient = useQueryClient();
  const loginUserMutation: any = useMutation({
    mutationFn: loginUser,

    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: userQueryKeys,
      });
    },
  });

  return loginUserMutation;
}
