import { usersURL } from "@/infrastructure/api";
import usersApi, { axios } from "@/lib/users";

// this should remove

interface UserProps {
  body?: any;
  params?: string[];
  query?: any;
  options?: any;
}

/********************** Global Users ***************************/
/**********   Find Current User   **************** */
export const userQueryKeys = ["user"];
export const getUser = async (options: any, isServer = false) => {
  const url = `/find/one`;
  const response = await usersApi(url);
  const result = await response.data;
  return result;
};
/*************************/

/**********   Create User   **************** */
export async function createUser(body: any) {
  const url = `${usersURL()}/create/one`;
  const response = await axios.post(url, body);
  const result = await response.data;

  return result;
}
/*************************/

/**********   Login User   **************** */
export async function loginUser(body: { email: string; password: string }) {
  const url = `/login`;
  const response = await usersApi.post(url, body);

  const result = await response.data;
  return result;
}
