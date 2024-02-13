"use client";
import React, { createContext, useContext } from "react";
import { redirect } from "next/navigation";
import useActiveWorkspace from "@/hooks/use-active-workspace";
import useUser from "@/hooks/use-user";
const Context = createContext(null);

const useAuthContext = () => useContext(Context);

const AuthProvider = ({ children }: any) => {
  const { activeWorkspace } = useActiveWorkspace();

  const userQuery: any = useUser();

  if (userQuery.data) {
    if (activeWorkspace) redirect(`/library/${activeWorkspace}`);
    else redirect("/workspaces");
  }

  return <Context.Provider value={null}>{children}</Context.Provider>;
};

export { AuthProvider, useAuthContext };
