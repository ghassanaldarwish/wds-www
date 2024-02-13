import axios from "axios";
import axiosWithAuth from "./axios";

type FetcherType = {
  url: string;
  authorization?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  cookie?: string;
  body?: any;
};

const fetcher = async ({ url, method = "GET", body }: FetcherType) => {
  const response = await axiosWithAuth({
    url,
    method,
    data: body,
    withCredentials: true,
  });

  return response.data;
};

const workspaceFetcher = ({
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

const commandsFetcher = ({ url, body, method = "POST" }: FetcherType) => {
  return async () => {
    const response = await axiosWithAuth({
      method,
      url,
      withCredentials: true,
      data: body,
    });

    return response.data;
  };
};

export { fetcher, workspaceFetcher, commandsFetcher };
