import { LayoutRoot } from "@/components/index";
import Navbar from "./navbar";
import View from "./view";
import Infrastructure from "./infrastructure";
import { headers } from "next/headers";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
export default async function Index({ params, searchParams }: any) {
  const session = await getServerSession(options);
  const headersList = headers();
  const referer = headersList.get("referer") || "/create/workspace";

  if (!session) {
    redirect("/login?callbackUrl=" + referer);
  }
  return (
    <Infrastructure params={params} searchParams={searchParams}>
      <LayoutRoot>
        <Navbar />
        <View />
      </LayoutRoot>
    </Infrastructure>
  );
}
