import axios from "axios";
export { axios };
import { isServer } from "./utils";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
import { authURL } from "./auth";
export const usersURL = () => {
  let url = `http://users-api:3014`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://api.users.webdrei.com`;
    else url = `http://api.users.localhost`;
  }
  return url;
};

const usersApi = axios.create({
  baseURL: usersURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

usersApi.interceptors.request.use(
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

export default usersApi;
