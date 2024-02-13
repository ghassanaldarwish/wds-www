"use client";

import { getWorkspacePins, pinsQueryKeys } from "@/services/workspace";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function useWorkspacePins() {
  const { workspace }: any = useParams();

  const pinsQuery: any = useQuery({
    queryKey: pinsQueryKeys,
    queryFn: getWorkspacePins(workspace),
  });
  return pinsQuery;
}
