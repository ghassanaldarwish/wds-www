import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { cookies } from "next/headers";
import { ReactQueryHydrateProvider } from "@/components/providers/rq-hydrate-provider";
import axios from "axios";
import { authURL, usersURL } from "@/infrastructure/api";

export default async function Infrastructure({
  params,
  children,
  searchParams,
}: {
  params: any;
  children: any;
  searchParams: any;
}) {
  const queryClient = getQueryClient();

  const dehydratedState = dehydrate(queryClient);
  return (
    <ReactQueryHydrateProvider state={dehydratedState}>
      {children}
    </ReactQueryHydrateProvider>
  );
}
