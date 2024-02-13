import { LayoutRoot, NavbarRoot, ViewRoot } from "@/components/index";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth/next";
export default async function Index({ searchParams }: { searchParams: any }) {
  const { callbackUrl } = searchParams;
  const session = await getServerSession(options);

  if (session) {
    return redirect(callbackUrl || "/workspaces");
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
          <NavbarRoot.LoginLink />
          <NavbarRoot.ThemeSwitcher />
        </NavbarRoot.Footer>
      </NavbarRoot>

      <ViewRoot className="container grid h-[95vh] w-screen flex-col lg:items-center lg:justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Image
          src="/login.svg"
          width={720}
          height={1000}
          alt="login image"
          className="   lg:block   object-contain w-full h-64 hidden "
        />
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter your credentials below to create your account
            </p>
          </div>
          <ViewRoot.UserRegisterForm />
        </div>
      </ViewRoot>
    </LayoutRoot>
  );
}
