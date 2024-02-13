import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/services/users";

export default function useCreateUserMutation() {
  const createUserMutation: any = useMutation({ mutationFn: createUser });

  return createUserMutation;
}
