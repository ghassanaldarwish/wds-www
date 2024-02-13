import { LayoutRoot, NavbarRoot, ViewRoot } from "@/components/index";
import { Icons } from "@/components/ui/icons";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth/next";
export default async function Index({ searchParams }: { searchParams: any }) {
  const { callbackUrl } = searchParams;
  const session = await getServerSession(options);

  if (session) {
    redirect(callbackUrl || "/workspaces");
  }
  return (
    <LayoutRoot>
      <NavbarRoot className="bg-transparent border-none">
        <NavbarRoot.Header>
          <NavbarRoot.Back className="static" />
          <NavbarRoot.Logo>
            <NavbarRoot.Link href="/">Home</NavbarRoot.Link>
          </NavbarRoot.Logo>
        </NavbarRoot.Header>
        <NavbarRoot.Footer>
          <NavbarRoot.RegisterLink />
          <NavbarRoot.ThemeSwitcher />
        </NavbarRoot.Footer>
      </NavbarRoot>
      <ViewRoot className="mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter your credentials to sign in to your account
          </p>
        </div>

        <ViewRoot.UserLoginForm />
      </ViewRoot>
    </LayoutRoot>
  );
}
