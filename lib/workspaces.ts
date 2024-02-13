import axios from "axios";
import { isServer } from "./utils";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
export const workspacesURL = () => {
  let url = `http://workspaces-api:3017`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://api.workspaces.webdrei.com`;
    else url = `http://api.workspaces.localhost`;
  }

  return url;
};

const workspacesApi = axios.create({
  baseURL: workspacesURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

workspacesApi.interceptors.request.use(
  async (config: any) => {
    let token;

    if (isServer()) {
      // Server-side token retrieval
      const session: any = await getServerSession(options);
      token = session?.accessToken;
    } else {
      // Client-side token retrieval
      const session: any = await getSession();
      token = session?.accessToken;
    }

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default workspacesApi;
