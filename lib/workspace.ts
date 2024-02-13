import axios from "axios";
export { axios };
import { isServer } from "./utils";

export const workspaceURL = (workspace: string) => {
  let url = `http://${workspace}-api:4444`;

  if (!isServer()) {
    if (process.env.NODE_ENV === "production")
      url = `https://${workspace}.api.workspace.webdrei.com`;
    else url = `http://${workspace}.api.workspace.localhost`;
  }

  return url;
};

type FetcherType = {
  url: string;
  authorization?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  cookie?: string;
  body?: any;
};

const workspaceApi = ({
  url,
  authorization,
  method = "GET",
  cookie,
  body,
}: FetcherType) => {
  return async () => {
    const response = await axios({
      method,
      url,
      headers: {
        Authorization: authorization,
        Cookie: cookie,
      },
      data: body,

      withCredentials: true,
    });

    return response.data;
  };
};

export default workspaceApi;
