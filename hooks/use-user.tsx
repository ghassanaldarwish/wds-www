import { getUser, userQueryKeys } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const userQuery: any = useQuery({
    queryKey: userQueryKeys,
    queryFn: getUser,
  });
  return userQuery;
}
