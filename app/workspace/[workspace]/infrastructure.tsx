import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { ReactQueryHydrateProvider } from "@/components/providers/rq-hydrate-provider";
import {
  getWorkspacePins,
  getWorkspaceUser,
  pinsQueryKeys,
  workspaceUserQueryKeys,
} from "@/services/workspace";

export default async function Infrastructure({
  params,
  children,
  searchParams,
}: {
  params: any;
  children: any;
  searchParams: any;
}) {
  const { workspace } = params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: workspaceUserQueryKeys,
    queryFn: await getWorkspaceUser(workspace),
  });

  await queryClient.prefetchQuery({
    queryKey: pinsQueryKeys,
    queryFn: await getWorkspacePins(workspace),
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <ReactQueryHydrateProvider state={dehydratedState}>
      {children}
    </ReactQueryHydrateProvider>
  );
}
