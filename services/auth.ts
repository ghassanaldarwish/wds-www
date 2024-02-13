import authApi from "@/lib/auth";

export const refresh = async (refreshToken: string) => {
  const url = `/refresh`;
  const response = await authApi(url, {
    method: "GET",
    headers: {
      cookie: `refresh_token=${refreshToken}`,
    },
  });
  const result = await response?.data;
  return result;
};
