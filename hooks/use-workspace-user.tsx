import { userQueryKeys } from "@/services/users";

import { getWorkspaceUser } from "@/services/workspace";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function useWorkspaceUser() {
  const { workspace }: any = useParams();

  const query: any = useQuery({
    queryKey: userQueryKeys,
    queryFn: getWorkspaceUser(workspace),
  });
  return query;
}
