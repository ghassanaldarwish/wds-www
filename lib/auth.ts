import axios from "axios";
import { isServer } from "./utils";

export const authURL = () => {
  let url = `http://auth-api:3013`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://api.auth.webdrei.com`;
    else url = `http://api.auth.localhost`;
  }

  return url;
};

const authApi = axios.create({
  baseURL: authURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default authApi;
