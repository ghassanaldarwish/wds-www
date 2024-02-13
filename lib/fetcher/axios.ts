import axios from "axios";

import { authURL } from "../../infrastructure/api";

const instance = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: any) => {
    console.log("config request== >", config);

    const token = "token";
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error: any) => {
    console.log("error request== >", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },

  async (error: any) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await instance(authURL() + "/refresh");
        const access_token = response?.data?.value;

        if (access_token) {
          originalRequest.headers["Authorization"] = access_token;
          return axios(originalRequest);
        }
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
